import React from "react";
import { useState } from "react";
import data from "./data";
import Tours from "./components/Tours";

const App = () => {
  const [tour, setTour] = useState(data);

  function removeCard(id) {
    const newCards = tour.filter((tour) => tour.id !== id);
    setTour(newCards);
  }

  if (tour.length === 0) {
    return (
      <div className="refresh">
        <h2>No tours left !!</h2>
        <button className="refresh-btn" onClick={() => setTour(data)}>
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div className="wrapper">
      <div className="container">
        <h2 className="title">Plan with Om</h2>
      </div>

      <div>
        <Tours tours={tour} removeCard={removeCard}></Tours>
      </div>
    </div>
  );
};

export default App;

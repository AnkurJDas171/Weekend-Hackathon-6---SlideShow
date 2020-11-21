import React, { Component, useState } from "react";
import "../styles/App.css";

const App = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handelRestartClick=()=>{

    setCurrentSlide(0);

  };

  const handelPrevClick=()=>{

    let prevSlide = currentSlide - 1;

    setCurrentSlide(prevSlide);

  };

  const handelNextClick=()=>{

    let nextSlide = currentSlide + 1;

    setCurrentSlide(nextSlide);

  };


  return (
    <>
      <h1 data-testid="title">{slides[currentSlide].title}</h1>
      <p data-testid="text">{slides[currentSlide].text}</p>
      <button disabled={currentSlide === 0} data-testid="button-restart" onClick={handelRestartClick}>
        Restart
      </button>
      <button disabled={currentSlide === 0} data-testid="button-prev" onClick={handelPrevClick}>
        Previous
      </button>
      <button
        disabled={currentSlide === slides.length - 1}
        data-testid="button-next"
        onClick={handelNextClick}
      >
        Next
      </button>
    </>
  );
};

export default App;

import React from "react";
import "../App.css";
import { useContext } from "react";
import { QuizStateContext } from "../utilities/Contexts";

import { Questions } from "../utilities/Questions";

const EndScreen = () => {
  const { results, setResults, setGameState } = useContext(QuizStateContext);

  const restartQuiz = () => {
    setResults([]);
    setGameState("start");
  };
  return (
    <div className="EndScreen">
    

      <div id="table">
        <div className="answer">
          <span>Question 1: Who was the Man of the Series ? </span>
          <h2>{results[0]}</h2>
        </div>
        <div className="answer">
          <span>Question 2: Who acheived 100 matches record in this series? </span>
          <h2>{results[1]}</h2>
        </div>
        <div className="answer">
          <span>Question 3: How many wickets Ashwin took in this series? </span>
          <h2>{results[2]}</h2>
        </div>
        <div className="answer">
          <span>Question 4: Who scored the highest individual score in this series? </span>
          <h2>{results[3]}</h2>
        </div>
      </div>
      <button id="restart" onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
};

export default EndScreen;

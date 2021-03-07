import { useState } from "react";
import "../App.css";
import { Questions } from "../utilities/Questions";

import { useContext } from "react";
import { QuizStateContext } from "../utilities/Contexts";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  const { results, setResults, setGameState } = useContext(QuizStateContext);

  const chooseOption = (option) => {
    setOptionChosen(option);
  };

  const skip = () => {
    setCurrentQuestion(currentQuestion + 1);
    setResults((oldArray) => [...results, "Not Answered"]);
  };

  const nextQuestion = () => {
    if (Questions[currentQuestion].answer == optionChosen) {
      setResults((oldArray) => [...results, "Correct"]);
    } else {
      setResults((oldArray) => [...results, "Incorrect"]);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const finishQuiz = () => {
    if (Questions[currentQuestion].answer == optionChosen) {
      setResults((oldArray) => [...results, "Correct"]);
    } else {
      setResults((oldArray) => [...results, "InCorrect"]);
    }
    setGameState("finished");
  };

  return (
    <div className="Quiz">
      <h1 className="Question">{Questions[currentQuestion].prompt}</h1>
      

      
      <div className="questions">
        <button
          onClick={() => {
            chooseOption("optionA");
          }}
        >
          {Questions[currentQuestion].optionA}
        </button>
        <button
          onClick={() => {
            chooseOption("optionB");
          }}
        >
          {Questions[currentQuestion].optionB}
        </button>
        <button
          onClick={() => {
            chooseOption("optionC");
          }}
        >
          {Questions[currentQuestion].optionC}
        </button>
        <button
          onClick={() => {
            chooseOption("optionD");
          }}
        >
          {Questions[currentQuestion].optionD}
        </button>
      </div>
      
      {currentQuestion == Questions.length - 1 ? (
        <div>
          <button onClick={finishQuiz} id="nextQuestion">
            Finish Quiz
          </button>
          <button onClick={finishQuiz} id="nextQuestion">
            Skip
          </button>
        </div>
      ) : (
        <div>
          <button onClick={nextQuestion} id="nextQuestion">
            Submit
          </button>
          <button onClick={skip} id="nextQuestion">
            Skip
          </button>
        </div>
      )}
    </div>
  );
}

export default Quiz;

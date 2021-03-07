import { useState } from "react";
import "./App.css";
import Start from "./Components/Start";
import Quiz from "./Components/Quiz";
import ResultScreen from "./Components/ResultScreen";
import { QuizStateContext } from "./utilities/Contexts";

function App() {
  const [gameState, setGameState] = useState("start");
  const [results, setResults] = useState([]);
  return (
    <div className="App">
      <h1 className="heading">IND VS ENG 2021 QUIZ</h1>
      <QuizStateContext.Provider
        value={{
          gameState,
          setGameState,
          results,
          setResults,
        }}
      >
        {gameState === "start" && <Start />}
        {gameState === "playing" && <Quiz />}
        {gameState === "finished" && <ResultScreen />}
      </QuizStateContext.Provider>
    </div>
  );
}

export default App;

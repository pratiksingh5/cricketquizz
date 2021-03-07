import { useContext } from "react";
import "../App.css";
import { QuizStateContext } from "../utilities/Contexts";

function Menu() {
  const { gameState, setGameState } = useContext(QuizStateContext);
  return (
    <div className="Menu">
      <button
        onClick={() => {
          setGameState("playing");
        }}
      >
        <h1 className="start">START QUIZ</h1>
      </button>
    </div>
  );
}

export default Menu;

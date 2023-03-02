import { useState } from "react";
import HangmanDrawing from "./HangmanDrawing";
import HangmanWord from "./HangmanWord";
import KeyBoard from "./KeyBoard";
import wordList from "./wordList.json";

function App() {
  const [wordToGuess, setWordToGuess] = useState(
    wordList[Math.floor(Math.random() * wordList.length)]
  );
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        alignItems: "center",
        margin: "0 auto",
      }}
    >
      <div style={{ fontSize: "2rem", textAlign: "center" }}>Win Lose</div>
      <HangmanDrawing />
      <HangmanWord />
      <KeyBoard />
    </div>
  );
}

export default App;

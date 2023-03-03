import React from "react";
import styles from "./KeyBoard.module.css";

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type KeyBoardProps = {
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
  disabled?: boolean;
};

const KeyBoard = ({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  disabled = false,
}: KeyBoardProps) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px , 1fr))",
        gap: "0.5rem",
      }}
    >
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInActive = inactiveLetters.includes(key);
        return (
          <button
            className={`${styles.keyBtn} ${isActive ? styles.active : ""} ${
              isInActive ? styles.inactive : ""
            }`}
            key={key}
            onClick={() => addGuessedLetter(key)}
            disabled={isActive || isInActive || disabled}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default KeyBoard;

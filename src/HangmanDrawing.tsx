import React from "react";

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

const HEAD = (
  <div
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "100%",
      border: "10px solid black",
      position: "absolute",
      right: "-30px",
      top: "50px",
    }}
  />
);

const BODY = (
  <div
    style={{
      width: "10px",
      height: "100px",
      background: "black",
      position: "absolute",
      top: "115px",
      right: 0,
    }}
  />
);

const RIGHTARM = (
  <div
    style={{
      width: "80px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "150px",
      right: "-80px",
      rotate: "-30deg",
      transformOrigin: "left bottom",
    }}
  />
);

const RIGHTLEG = (
  <div
    style={{
      width: "80px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "200px",
      right: "-70px",
      rotate: "30deg",
      transformOrigin: "left bottom",
    }}
  />
);

const LEFTARM = (
  <div
    style={{
      width: "80px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "150px",
      right: "10px",
      rotate: "30deg",
      transformOrigin: "right bottom",
    }}
  />
);

const LEFTLEG = (
  <div
    style={{
      width: "80px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "200px",
      right: 0,
      rotate: "-30deg",
      transformOrigin: "right bottom",
    }}
  />
);

const BODY_PARTS = [HEAD, BODY, RIGHTARM, RIGHTLEG, LEFTARM, LEFTLEG];

const HangmanDrawing = ({ numberOfGuesses }: HangmanDrawingProps) => {
  return (
    <div style={{ position: "relative" }}>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div
        style={{
          width: "10px",
          height: "50px",
          background: "black",
          position: "absolute",
          right: 0,
        }}
      />
      <div
        style={{
          width: "200px",
          height: "10px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          width: "10px",
          height: "250px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div style={{ width: "250px", height: "10px", background: "black" }} />
    </div>
  );
};

export default HangmanDrawing;

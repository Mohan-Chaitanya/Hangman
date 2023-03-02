import React from "react";

const HangmanDrawing = () => {
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
        height: "150px",
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
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "150px",
        right: "-100px",
        rotate: "-30deg",
        transformOrigin: "left bottom",
      }}
    />
  );

  const RIGHTLEG = (
    <div
      style={{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "250px",
        right: "-90px",
        rotate: "30deg",
        transformOrigin: "left bottom",
      }}
    />
  );

  const LEFTARM = (
    <div
      style={{
        width: "100px",
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
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "250px",
        right: 0,
        rotate: "-30deg",
        transformOrigin: "right bottom",
      }}
    />
  );

  return (
    <div style={{ position: "relative" }}>
      {HEAD}
      {BODY}
      {RIGHTARM}
      {RIGHTLEG}
      {LEFTARM}
      {LEFTLEG}
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
          height: "400px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div style={{ width: "250px", height: "10px", background: "black" }} />
    </div>
  );
};

export default HangmanDrawing;

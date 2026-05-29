import { useState, useEffect } from "react";
import "./index.css";

function Riddles() {
  const [riddle, setRiddle] = useState("");
  const [results, setResults] = useState([]);
  const [reveal, setReveal] = useState(false);

  function getData() {
    fetch(`https://riddles-api-eight.vercel.app/${riddle}`)
      .then((res) => res.json())
      .then((data) => {
        setResults(data);
        setReveal(false);
      });
  }

  return (
    <div>
      <button
        value="funny"
        onClick={(e) => {
          setRiddle(e.target.value);
          getData();
        }}
      >
        Funny
      </button>
      <button
        value="math"
        onClick={(e) => {
          setRiddle(e.target.value);
          getData();
        }}
      >
        Math
      </button>
      <button
        value="logic"
        onClick={(e) => {
          setRiddle(e.target.value);
          getData();
        }}
      >
        Logic
      </button>
      <button
        value="mystery"
        onClick={(e) => {
          setRiddle(e.target.value);
          getData();
        }}
      >
        Mystery
      </button>
      <button
        value="science"
        onClick={(e) => {
          setRiddle(e.target.value);
          getData();
        }}
      >
        Science
      </button>
      <p>{results && results.riddle}</p>
      <button
        value="answer"
        onClick={(e) => {
          setReveal(true);
        }}
      >
        Answer
      </button>
      <p>{reveal && results && results.answer}</p>
    </div>
  );
}

export default Riddles;

import React, { useState } from "react";
import "./styles.css";

const genreData = {
  Drama: [
    { name: "Game of thrones", ratings: "9.2/10" },
    { name: "The witcher", ratings: "8.2/10" }
  ],
  Action: [
    { name: "Money Heist", ratings: "8.2/10" },
    { name: "Arrow", ratings: "7/10" }
  ],

  Crime: [
    { name: "Mirzapur", ratings: "8.8/10" },
    { name: "Sacred Games", ratings: "9/10" }
  ]
};

export default function App() {
  const [series, setSeries] = useState("Crime");

  function clickHandler(genre) {
    setSeries(genre);
  }
  return (
    <div className="App">
      <h1>
        Tv Series
        {
          <span role="img" aria-label="icon">
            🎬
          </span>
        }{" "}
        Recommendation
        {
          <span role="img" aria-label="icon">
            🍿
          </span>
        }{" "}
      </h1>
      <small>Some TV series you might like based on different genre</small>

      <div>
        {Object.keys(genreData).map((genre) => (
          <button
            onClick={() => clickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "rgb(10, 19, 49)",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid goldenrod",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>

      <div>
        <ul>
          {genreData[series].map((series) => (
            <li
              key={series.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid",
                margin: "1rem 0rem",
                borderRadius: "0.5rem",
                textAlign: "center"
              }}
            >
              <div style={{ fontSize: "bolder" }}>{series.name}</div>
              <div style={{ fontSize: "smaller" }}>{series.ratings}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import "./styles.css";

const genreData = {
  Drama: [
    {
      name: "Game of thrones",
      Description:
        "Game of Thrones is an American fantasy drama television series created by David Benioff and D. B. Weiss for HBO. It is an adaptation of A Song of Ice and Fire, a series of fantasy novels by George R. R. Martin, the first of which is A Game of Thrones",
      ratings: "9.6/10"
    },
    {
      name: "The witcher",
      Description:
        "The witcher Geralt, a mutated monster hunter, struggles to find his place in a world in which people often prove more wicked than beasts.",
      ratings: "9.2/10"
    },
    {
      name: "The Good doctor",
      Description:
        "Shaun, a young doctor, joins a renowned hospital in San Jose, California, but his colleagues do not socialise with him. He uses his skills to treat patients and prove his abilities to his co-workers.",
      ratings: "9.0/10"
    }
  ],
  Action: [
    {
      name: "Money Heist",
      Description:
        "A criminal mastermind who goes by The Professor has a plan to pull off the biggest heist in recorded history -- to print billions of euros in the Royal Mint of Spain. To help him carry out the ambitious plan, he recruits eight people with certain abilities and who have nothing to lose. The group of thieves take hostages to aid in their negotiations with the authorities, who strategize to come up with a way to capture The Professor. As more time elapses, the robbers prepare for a showdown with the police.",
      ratings: "9.2/10"
    },
    {
      name: "Arrow",
      Description:
        "After mastering the skill of archery on a deserted island, multi-millionaire playboy Oliver Queen returns to his city to take on the vigilante persona of Arrow to fight crime and corruption.",
      ratings: "8/10"
    },
    {
      name: "Flash",
      Description:
        "Barry Allen, a forensic scientist with the Central City police force, is struck by lightning in a freak accident. When he wakes up after nine months, he discovers that he can achieve great speeds.",
      ratings: "7.1/10"
    }
  ],

  Crime: [
    {
      name: "Mirzapur",
      Description:
        "Akhandanand Tripathi made millions exporting carpets and became the mafia boss of Mirzapur. His son Munna, an unworthy, power-hungry heir, stops at nothing to continue his father's legacy.",
      ratings: "9.2/10"
    },
    {
      name: "Sacred Games",
      Description:
        "When police officer Sartaj Singh receives an anonymous tip about the location of criminal overlord Ganesh Gaitonde, he embarks on a chase around Mumbai in what becomes a dangerous cat-and-mouse game. Amidst the chaos, trappings of a corrupt underworld are revealed. After being removed from the Gaitonde case, Singh begins his own investigation as he works to save Mumbai from impending doom. Flashbacks reveal some of the crimes that Gaitonde has committed through the years.",
      ratings: "8.5/10"
    },
    {
      name: "paatal Lok",
      Description:
        "A cynical inspector is tasked with investigating a high-profile case which leads him into a dark realm of the underworld.",
      ratings: "8.4/10"
    }
  ]
};

export default function App() {
  const [series, setSeries] = useState("Drama");

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
              <div
                style={{
                  fontSize: "smaller",
                  fontStyle: "italic",
                  color: "white"
                }}
              >
                {series.Description}
              </div>
              <div style={{ fontSize: "bolder" }}>{series.ratings}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

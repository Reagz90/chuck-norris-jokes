import "./index.css";
import { useState } from "react";

function ChuckNorrisJokes() {
  const [joke, setJoke] = useState("");

  const fetchJoke = () => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((data) => setJoke(data.value))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <button
        className="text-white bg-gradient-to-r from-green-500 to-yellow-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        onClick={fetchJoke}
      >
        Give me a joke!
      </button>
      <div className="joke-content p-8 text-orange-50 text-center jokeFont text-2xl">
        {joke}
      </div>
    </div>
  );
}

export default ChuckNorrisJokes;

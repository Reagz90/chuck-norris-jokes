import "./App.css";
import "./index.css";
import ChuckNorrisJokes from "./ChuckNorrisJokes";

function App() {
  return (
    <div className="App flex flex-col items-center justify-center">
      <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-yellow-500 text-5xl text-center p-8 hover:animate-bounce headingFont">
        Chuck Norris Jokes
      </h1>
      <div className="flex flex-col items-center">
        <img className="p-8" src="./chucknorris.jpeg" alt="chuck" />
        <ChuckNorrisJokes />
      </div>
    </div>
  );
}

export default App;

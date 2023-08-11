import SearchEngine from "./SearchEngine";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchEngine />
      <footer>
        {" "}
        Coded by Thea Sullivan and available on{" "}
        <a href="https://github.com/TheacSully" target="_blank">
          Github
        </a>
      </footer>
    </div>
  );
}

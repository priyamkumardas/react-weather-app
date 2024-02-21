import logo from './logo.svg';
import './App.css';

import { useWeather } from "./Context/Weather";
import Button from "./components/Button";
import Input from "./components/Input";
import Card from "./components/Card";

function App() {
  const weather =useWeather();
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1>Weather Api</h1>
      <Input></Input>
      <Button onClick={weather.fetchData} value="Search"></Button>
      <Card></Card>
      <Button value="refresh"></Button>

    </div>
  );
}

export default App;

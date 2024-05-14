import logo from "./logo.svg";
import "./App.css";
import { Hello } from "./components/Hello";
import Welcome from "./components/Welcome";
import JSX_Hello from "./components/JSX_Hello";
import Message from "./components/Message";

function App() {
  return (
    <div className="App">
      <Message />
      {/* <Hello name="Hadeeqa"> 
        <p>This is the child tag!</p>
      </Hello>
      <Hello name="Ayan" />
      <Hello name="Mubashra" />
      <Welcome name="Imran"/>
      <Welcome name="Asma"/>
      <JSX_Hello /> */}
    </div>
  );
}

export default App;

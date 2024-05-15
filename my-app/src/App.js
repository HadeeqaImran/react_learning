import logo from "./logo.svg";
import "./App.css";
import { Hello } from "./components/Hello";
import Welcome from "./components/Welcome";
import JSX_Hello from "./components/JSX_Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import Clock from "./components/Clock";
import List from "./components/List"
import Form from './components/Form'
function App() {
  return (
    <div className="App">
      <Message />
      <Counter />
      <Clock />
      <List list={[1, 2, 3, 4, 5]}/>
      <Form />
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

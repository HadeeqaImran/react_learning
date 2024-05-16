import './App.css';
import Counter from './components/Counter';
import Twoway_Counter from './components/Twoway_Counter';
function App() {
  return (
    <div className="App">
      <Twoway_Counter />
      <Counter />
    </div>
  );
}

export default App;

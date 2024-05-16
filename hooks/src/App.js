import './App.css';
import Counter from './components/Counter';
import Twoway_Counter from './components/Twoway_Counter';
import Person from './components/Person';
function App() {
  return (
    <div className="App">
      <Twoway_Counter />
      <Counter />
      <Person />
    </div>
  );
}

export default App;

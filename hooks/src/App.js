import './App.css';
import Counter from './components/Counter';
import Twoway_Counter from './components/Twoway_Counter';
import Person from './components/Person';
import Array from './components/Array';

function App() {
  return (
    <div className="App">
      <Twoway_Counter />
      <Counter />
      <Person />
      <Array />
    </div>
  );
}

export default App;

import './App.css';
import Counter from './components/Counter';
import Twoway_Counter from './components/Twoway_Counter';
import Person from './components/Person';
import Array from './components/Array';
import MouseContainer from './components/MouseContainer';

function App() {
  return (
    <div className="App">
      <MouseContainer />
      <Twoway_Counter />
      <Counter />
      <Person />
      <Array />
    </div>
  );
}

export default App;

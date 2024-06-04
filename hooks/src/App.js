import './App.css';
//import Counter from './components/Counter';
import Twoway_Counter from './components/Twoway_Counter';
import Person from './components/Person';
import Array from './components/Array';
import MouseContainer from './components/MouseContainer';
import IntervalCounter from './components/IntervalCounter'
import DataFetch from './components/Datadetch';
import React from 'react'
import C from './components/useContext/C'
import DF from './components/useReducer/DF'
import DF2 from './components/useReducer/DF2'
import Parent from './components/Task/Parent'
import Counter from './components/useMemo/Counter'
import Focus from './components/useRef/Focus'
import Timer from './components/useRef/Timer'

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      {/* <MouseContainer />
      <Twoway_Counter />
      <Counter />
      <Person />
      <Array />
      <IntervalCounter />
      <DataFetch />
      <UserContext.Provider value={"Hadeeqa"}>
        <ChannelContext.Provider value={"Dubizzle"}>
          <C />
        </ChannelContext.Provider>
      </UserContext.Provider>
      <DF />
      <DF2 />
      <Parent />
      <Counter />
      <Focus />
      <Timer /> */}
      <Parent />
    </div>
  );
}

export default App;

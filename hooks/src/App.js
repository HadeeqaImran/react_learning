import './App.css';
import Counter from './components/Counter';
import Twoway_Counter from './components/Twoway_Counter';
import Person from './components/Person';
import Array from './components/Array';
import MouseContainer from './components/MouseContainer';
import IntervalCounter from './components/IntervalCounter'
import DataFetch from './components/Datadetch';
import React from 'react'
import C from './components/useContext/C'


export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      <MouseContainer />
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
    </div>
  );
}

export default App;

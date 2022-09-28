import './App.css';
import { Counter } from './components/code' 
import { UserContext,Reducer,GlobalContext} from './context/Global-context'
import { useContext, useState} from 'react'


function App() {

// usestate

  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
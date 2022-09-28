import { useState,useContext } from "react";
import { UserContext} from '../context/Global-context'


export const Counter = () => {
  const {user, add,substract,reset} = useContext(UserContext)

  return (
    <div className="App">
      <div className='background'>
      <header className="App-header">
      <h1>Counter 1</h1>
      <span>{user}</span>
        <div className ='button'>
        <button onClick={add}>Add</button>
        <button onClick={reset}>Reset</button>
        <button onClick={substract}>Substact</button>   
        </div>
      </header>
      </div>
    </div>
  )
}
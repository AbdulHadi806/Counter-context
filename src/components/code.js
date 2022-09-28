import { useContext } from "react";
import { UserContext} from '../context/Global-context'


export const Counter = () => {
  const {state, add, remove, reset} = useContext(UserContext)
    const addValu = (e) => {
      e.preventDefault()
      if(state < 10){
        add()
    }}
    const removeVal = () => {
      if(state > 0) {
        remove()
      }
    }
    const resetVal = () => {
      reset()
    }
  return (
    <div className="App">
      <div className='background'>
      <header className="App-header">
      <h1>Counter 1</h1>
      <span>{state}</span>
        <div className ='button'>
        <button onClick={addValu}>Add</button>
        <button onClick={resetVal}>Reset</button>
        <button onClick={removeVal}>Substact</button>   
        </div>
      </header>
      </div>
    </div>
  )
}
import './App.css';
import { Counter } from './components/code' 
import { UserContext} from './context/Global-context'
import { useState} from 'react'

function App() {
  const [user, setUser] = useState(0);

  const add = () => {
     if(user < 10){
      setUser(user + 1)
     }
  }
  const substract = () => {
    if(user > 0){
      setUser(user - 1)
    }
  }
  const reset = () => {
    setUser(0)
  }
// usestate

  return (
    <div className="App">
      <UserContext.Provider value={{user,add,substract,reset}}>
      <Counter />
      </UserContext.Provider>
    </div>
  );
}

export default App;
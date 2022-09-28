import { createContext, useReducer } from "react";

const InitialState = 0
export const Reducer = (state, action) => {
    switch(action.type) {
        case 'add':
            return (state + 1)
            default: 
            return state
        case 'remove':
            return (state - 1)
        case 'reset':
            return 0
    }
}


export const UserContext = createContext(InitialState);

export const GlobalContext = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, InitialState)
    
    const add = () => {
        if(state < 10){
            dispatch({type: 'add'})
        }
    }
    const remove = () => {
        if(state >= 0){
            dispatch({type: 'remove'})
        }
    }
    const reset = () => {
            dispatch({type: 'reset'})
    }
    return (
        <UserContext.Provider value={{add, remove, reset, state}}>
            {children}
        </UserContext.Provider>
        

    )
}

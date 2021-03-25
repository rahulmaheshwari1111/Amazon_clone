// set a data layer
// we need this to track basket {react-context}

import React, {createContext, useContext, useReducer} from 'react'


//THIS IS THE DATA LAYER
export const StateContext = createContext()

//BUILD A PROVIDER
export const StateProvider = ({reducer,initialState, children})=>(

<StateContext.Provider value= {useReducer(reducer,initialState)}> {children}

</StateContext.Provider>

)
// THIS is how we will use it inside of  a any component

export const useStateValue = ()=> useContext(StateContext);
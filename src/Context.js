import React, { useState, createContext } from 'react'

export const CountContext = createContext();

export const CountProvider = props => {
    const [state, setState]  = useState({
        count: 1,
        max: 1000
    })
    return (
        <CountContext.Provider value={[state, setState]}>
            {props.children}
        </CountContext.Provider>
    )
}

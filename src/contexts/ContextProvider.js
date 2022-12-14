import React, { createContext, useContext, useEffect, useState } from 'react'

const StateContext = createContext()
export const useStateContext = () => useContext(StateContext)

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(false)
    const [isClicked, setIsClicked] = useState(initialState)

    const handleClick = (clicked) => {
        setIsClicked({ ...initialState, [clicked]: true })
    }

    const [screenSize, setScreenSize] = useState()

    return (
        <StateContext.Provider
            value={{
                activeMenu,
                setActiveMenu,
                isClicked,
                setIsClicked,
                handleClick,
                screenSize,
                setScreenSize,
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

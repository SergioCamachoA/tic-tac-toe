import React, { createContext, useContext, useState } from "react"

export const GlobalContext = createContext()

export const GlobalContextProvider = ({ children }) => {
  const [scorePlayerOne, setScorePlayerOne] = useState(0)
  const [scorePlayerTwo, setScorePlayerTwo] = useState(0)
  const [startsPlayerOne, setStartsPlayerOne] = useState(true)
  const [ableToSelect, setAbleToSelect] = useState(true)

  const [isFriend, setIsFriend] = useState(false)

  const [winner, setWinner] = useState(null)

  const initialBoxProperties = [
    { id: 0 },
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
  ]

  const [boxProperties, setBoxProperties] = useState(initialBoxProperties)

  const [blockedOpponent, setBlockedOpponent] = useState(null)

  const values = {
    scorePlayerOne,
    setScorePlayerOne,
    scorePlayerTwo,
    setScorePlayerTwo,
    startsPlayerOne,
    setStartsPlayerOne,
    ableToSelect,
    setAbleToSelect,
    isFriend,
    setIsFriend,
    winner,
    setWinner,
    initialBoxProperties,
    boxProperties,
    setBoxProperties,
    blockedOpponent,
    setBlockedOpponent,
  }
  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  )
}

export const useGlobal = () => {
  const context = useContext(GlobalContext)
  return context
}

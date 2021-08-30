import React, { createContext, useContext, useState } from "react"
// import { useOpponent } from "../hooks/useOpponent"

export const GlobalContext = createContext()

export const GlobalContextProvider = ({ children }) => {
  const [scorePlayerOne, setScorePlayerOne] = useState(0)
  const [scorePlayerTwo, setScorePlayerTwo] = useState(0)
  const [startsPlayerOne, setStartsPlayerOne] = useState(true)
  const [ableToSelect, setAbleToSelect] = useState(true)

  const [isFriend, setIsFriend] = useState(true)

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
  }
  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  )
}

export const useGlobal = () => {
  const context = useContext(GlobalContext)
  return context
}

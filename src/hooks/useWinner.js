// import React from "react"
import { useGlobal } from "../context/useGlobal"

export const useWinner = () => {
  const {
    scorePlayerOne,
    scorePlayerTwo,
    setScorePlayerOne,
    setScorePlayerTwo,
    setAbleToSelect,
    setWinner,
  } = useGlobal()
  const handleWinner = (playerOne, playerTwo) => {
    const toWin = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    const playerOneWon = toWin.some((el) =>
      el.every((box) => playerOne.includes(box))
    )

    const playerTwoWon = toWin.some((el) =>
      el.every((box) => playerTwo.includes(box))
    )
    //disable/enable player selection
    if (playerOne.length > 0 || playerTwo.length > 0) setAbleToSelect(false)

    //handle winner
    if (playerOneWon) {
      setWinner("player one wins!")
      setScorePlayerOne(scorePlayerOne + 1)
      setAbleToSelect(true)
      return
    }
    if (playerTwoWon) {
      setWinner("player two wins!")
      setScorePlayerTwo(scorePlayerTwo + 1)
      setAbleToSelect(true)
      return
    }

    if (playerOne.length === 5 || playerTwo.length === 5) {
      setWinner("that's a tie, folks")
      setAbleToSelect(true)
    }
  }
  return { handleWinner }
}

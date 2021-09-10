// import { useState } from "react"
// import { useGlobal } from "../context/useGlobal"

export const useMatchPoint = () => {
  //   const toWin = [
  //     [0, 1, 2],
  //     [3, 4, 5],
  //     [6, 7, 8],
  //     [0, 3, 6],
  //     [1, 4, 7],
  //     [2, 5, 8],
  //     [0, 4, 8],
  //     [2, 4, 6],
  //   ]

  //   const { startsPlayerOne } = useGlobal()

  const handleMatchPoint = (playerOne, playerTwo) => {
    let randomBox = Math.floor(Math.random() * 9)

    return randomBox
  }

  return { handleMatchPoint }
}

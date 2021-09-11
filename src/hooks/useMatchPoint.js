// import { useState } from "react"
import { useGlobal } from "../context/useGlobal"

export const useMatchPoint = () => {
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

  const { startsPlayerOne } = useGlobal()

  const handleMatchPoint = (playerTwo, playerOne, secondRun = false) => {
    let validations = []
    let possibilities = []

    let chosenBox = null

    if (playerTwo.length >= 2 || playerOne.length >= 2) {
      for (const winEl of toWin) {
        for (const playerEl of playerOne) {
          if (winEl.includes(playerEl)) {
            if (!validations.includes(winEl)) {
              validations.push(winEl)
            } else {
              if (!possibilities.includes(winEl)) {
                possibilities.push(winEl)
              }
            }
          }
        }
      }

      let checkPossibilities = [...possibilities]

      for (const possibleEl of checkPossibilities) {
        for (const playedEl of playerTwo) {
          if (possibleEl.includes(playedEl)) {
            const index = possibilities.indexOf(possibleEl)
            possibilities.splice(index, 1)
          }
        }
      }

      if (possibilities.length === 0) {
        // console.log("no possibilities")

        if (!secondRun) {
          return handleMatchPoint(playerOne, playerTwo, true)
        } else {
          if (
            playerOne.length === 2 &&
            playerOne[0] % 2 === 0 &&
            playerOne[1] % 2 === 0
          ) {
            // if (playerOne[0] % 2 === 0 && playerOne[1] % 2 === 0) {
            const starters = [1, 3, 5, 7]
            const chosenStarter = Math.floor(Math.random() * 4)
            return (chosenBox = starters[chosenStarter])
            // }
          }
          return (chosenBox = Math.floor(Math.random() * 9))
        }
      } else if (possibilities.length === 1) {
        // console.log("one possibility")
        for (const playedBox of playerOne) {
          possibilities[0] = possibilities[0].filter((el) => el !== playedBox)
        }
        chosenBox = possibilities[0][0]
      } else {
        // console.log("different possibilities")
        const randomPossibility = Math.floor(
          Math.random() * possibilities.length
        )
        for (const playedBox of playerOne) {
          possibilities[randomPossibility] = possibilities[
            randomPossibility
          ].filter((el) => el !== playedBox)
        }
        chosenBox = possibilities[randomPossibility][0]
      }
    } else {
      if (startsPlayerOne && !playerTwo.includes(4)) {
        return (chosenBox = 4)
      } else {
        const starters = [0, 2, 6, 8]
        const chosenStarter = Math.floor(Math.random() * 4)
        return (chosenBox = starters[chosenStarter])
      }
    }
    return chosenBox
  }

  return { handleMatchPoint }
}

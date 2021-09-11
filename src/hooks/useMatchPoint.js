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

  const handleMatchPoint = (playerTwo, playerOne, counter = 0) => {
    // const handleMatchPoint = (playerOne, playerTwo) => {
    console.log("p1", playerOne)
    console.log("p2", playerTwo)
    console.log(counter)

    let validations = []
    let possibilities = []

    let chosenBox = null

    if (counter === 0 ? playerTwo.length >= 2 : playerOne.length >= 2) {
      // const handleTurn = (playerOne, playerTwo) => {
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

      //   console.log(possibilities)

      let checkPossibilities = [...possibilities]

      for (const possibleEl of checkPossibilities) {
        for (const playedEl of playerTwo) {
          //   console.log(playedEl)
          //   console.log(possibleEl)
          if (possibleEl.includes(playedEl)) {
            const index = possibilities.indexOf(possibleEl)
            possibilities.splice(index, 1)
          }
        }
      }
      //   console.log(possibilities)

      if (possibilities.length === 0) {
        console.log("no possibilities")

        if (counter === 0) {
          return handleMatchPoint(playerOne, playerTwo, 1)
        } else {
          chosenBox = Math.floor(Math.random() * 9)
        }
        // return randomBox
      } else if (possibilities.length === 1) {
        console.log("one possibility")
        for (const playedBox of playerOne) {
          possibilities[0] = possibilities[0].filter((el) => el !== playedBox)
        }
        chosenBox = possibilities[0][0]
      } else {
        console.log("different possibilities")
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
      // }
      // handleTurn(one, two)
    } else {
      if (startsPlayerOne) {
        if (!playerTwo.includes(4)) {
          return (chosenBox = 4)
        }
        return (chosenBox = Math.floor(Math.random() * 9))
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

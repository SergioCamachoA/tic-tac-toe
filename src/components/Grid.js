import React, { useEffect, useState } from "react"
import { useGlobal } from "../context/useGlobal"
import { Box } from "./Box"

export const Grid = () => {
  const {
    scorePlayerOne,
    scorePlayerTwo,
    setScorePlayerOne,
    setScorePlayerTwo,
    setAbleToSelect,
    isFriend,
    startsPlayerOne,
  } = useGlobal()

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

  const [isCrossTurn, setIsCross] = useState(true)

  const [playerOne, setPlayerOne] = useState([])
  const [playerTwo, setPlayerTwo] = useState([])

  const [winner, setWinner] = useState(null)

  useEffect(() => {
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

    // eslint-disable-next-line
  }, [playerOne, playerTwo])

  useEffect(() => {
    const getRandomBox = () => {
      if (playerOne.length === 5 || playerTwo.length === 5) return
      if (!isFriend) {
        if (startsPlayerOne ? !isCrossTurn : isCrossTurn) {
          const currentBox = Math.floor(Math.random() * 9)
          if (
            playerOne.includes(currentBox) ||
            playerTwo.includes(currentBox)
          ) {
            return getRandomBox()
          } else {
            let currentComputerTurn = [...initialBoxProperties]
            currentComputerTurn.forEach((eachBox) => {
              if (eachBox.id === currentBox) {
                eachBox.hasRef = true
              }
            })
            setBoxProperties(currentComputerTurn)
            return
          }
        }
      }
    }

    getRandomBox()
    // eslint-disable-next-line
  }, [isFriend, playerOne, playerTwo, startsPlayerOne, isCrossTurn])

  const [restart, setRestart] = useState(false)

  const handleRestart = () => {
    setWinner(null)
    setIsCross(true)
    setPlayerTwo([])
    setPlayerOne([])
    setRestart(!restart)
  }

  return (
    <div>
      <div
        className="grid"
        style={winner && { opacity: "0.3", pointerEvents: "none" }}
      >
        {boxProperties.map(({ id, hasRef }) => {
          return (
            <Box
              hasRef={hasRef}
              key={id}
              id={id}
              isCross={isCrossTurn}
              setIsCross={setIsCross}
              playerOne={playerOne}
              setPlayerOne={setPlayerOne}
              playerTwo={playerTwo}
              setPlayerTwo={setPlayerTwo}
              restart={restart}
              winner={winner}
            />
          )
        })}
      </div>
      {winner && (
        <div className="winner">
          <h1 className="winner-h1">{winner}</h1>
          <button onClick={() => handleRestart()}>restart game</button>
        </div>
      )}
    </div>
  )
}

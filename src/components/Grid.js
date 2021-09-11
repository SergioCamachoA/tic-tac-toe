import React, { useEffect, useState } from "react"
import { useGlobal } from "../context/useGlobal"
import { useOpponent } from "../hooks/useOpponent"
import { useWinner } from "../hooks/useWinner"
import { Box } from "./Box"

export const Grid = () => {
  const { winner, setWinner, boxProperties, startsPlayerOne, isFriend } =
    useGlobal()

  const { handleOpponent } = useOpponent()

  const { handleWinner } = useWinner()

  const [isCrossTurn, setIsCross] = useState(true)

  const [playerOne, setPlayerOne] = useState([])
  const [playerTwo, setPlayerTwo] = useState([])

  useEffect(() => {
    handleWinner(playerOne, playerTwo)
    // eslint-disable-next-line
  }, [playerOne, playerTwo])

  useEffect(() => {
    handleOpponent(playerOne, playerTwo, isCrossTurn)
    // eslint-disable-next-line
  }, [playerOne, playerTwo, isCrossTurn, startsPlayerOne, isFriend])

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
            />
          )
        })}
      </div>
      {winner && (
        <div onClick={() => handleRestart()} className="winner">
          <h1 className="winner-h1">{winner}</h1>
          <button>restart game</button>
        </div>
      )}
    </div>
  )
}

import React from "react"
import { useGlobal } from "../context/useGlobal"

export const Score = () => {
  const { scorePlayerOne, scorePlayerTwo } = useGlobal()
  return (
    <div className="score-container">
      <h1>score</h1>
      <div className="player-one">
        <h1>player one</h1>
        <h1>{scorePlayerOne}</h1>
      </div>
      <div className="player-two">
        <h1>player two</h1>
        <h1>{scorePlayerTwo}</h1>
      </div>
    </div>
  )
}

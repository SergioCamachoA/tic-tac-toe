import React from "react"
import { useGlobal } from "../context/useGlobal"

export const Player = () => {
  const { startsPlayerOne, setStartsPlayerOne, ableToSelect } = useGlobal()

  const handleClick = () => {
    setStartsPlayerOne(!startsPlayerOne)
  }

  return (
    <div className="player">
      <h1>starts player {startsPlayerOne ? "one" : "two"}</h1>
      <div
        onClick={() => ableToSelect && handleClick()}
        className="select-player"
      >
        <button
          style={{ transform: `translateX(${startsPlayerOne ? 0 : 2}rem)` }}
        ></button>
      </div>
    </div>
  )
}

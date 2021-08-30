import React from "react"
import { useGlobal } from "../context/useGlobal"

export const GameMode = () => {
  const { isFriend, setIsFriend } = useGlobal()

  const handleOpponent = (isCurrentFriend) => {
    setIsFriend(isCurrentFriend)
  }

  return (
    <div className="game-mode">
      <h1> play against</h1>
      <button
        onClick={() => handleOpponent(true)}
        className={`${isFriend && "current-mode"}`}
      >
        a friend
      </button>
      <button
        onClick={() => handleOpponent(false)}
        className={`${!isFriend && "current-mode"}`}
      >
        the computer
      </button>
    </div>
  )
}

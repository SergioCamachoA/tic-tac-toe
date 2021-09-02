import React from "react"
import { useGlobal } from "../context/useGlobal"

export const GameMode = () => {
  const { isFriend, setIsFriend } = useGlobal()

  const handleOpponent = (isCurrentFriend) => {
    setIsFriend(isCurrentFriend)
  }

  return (
    <div className="game-mode">
      <button
        onClick={() => handleOpponent(true)}
        className={`${isFriend && "current-mode"}`}
      >
        vs friend
      </button>
      <button
        onClick={() => handleOpponent(false)}
        className={`${!isFriend && "current-mode"}`}
      >
        vs computer
      </button>
    </div>
  )
}

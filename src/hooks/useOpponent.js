// import { useState } from "react"

export const useOpponent = () => {
  //   const [isHuman, setIsHuman] = useState(true)

  const handleOpponent = () => {
    console.log("useComponent custom hook")
  }

  return { handleOpponent }
}

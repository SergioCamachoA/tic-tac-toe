import { useGlobal } from "../context/useGlobal"

export const useOpponent = () => {
  const { startsPlayerOne, isFriend, initialBoxProperties, setBoxProperties } =
    useGlobal()
  const handleOpponent = (playerOne, playerTwo, isCrossTurn) => {
    if (playerOne.length === 5 || playerTwo.length === 5) return
    if (!isFriend) {
      if (startsPlayerOne ? !isCrossTurn : isCrossTurn) {
        const currentBox = Math.floor(Math.random() * 9)
        if (playerOne.includes(currentBox) || playerTwo.includes(currentBox)) {
          return handleOpponent(playerTwo, playerTwo, isCrossTurn)
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

  return { handleOpponent }
}

import { useGlobal } from "../context/useGlobal"
import { useMatchPoint } from "./useMatchPoint"

export const useOpponent = () => {
  const { startsPlayerOne, isFriend, initialBoxProperties, setBoxProperties } =
    useGlobal()

  const { handleMatchPoint } = useMatchPoint()

  const handleOpponent = (playerOne, playerTwo, isCrossTurn) => {
    if (playerOne.length === 5 || playerTwo.length === 5) return
    if (!isFriend) {
      if (startsPlayerOne ? !isCrossTurn : isCrossTurn) {
        const currentBox = handleMatchPoint(playerOne, playerTwo)
        if (playerOne.includes(currentBox) || playerTwo.includes(currentBox)) {
          return handleOpponent(playerOne, playerTwo, isCrossTurn)
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

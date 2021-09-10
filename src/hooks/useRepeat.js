export const useRepeat = () => {
  const handleRepeat = (currentBox, playerOne, playerTwo) => {
    if (playerOne.includes(currentBox) || playerTwo.includes(currentBox))
      return true
  }
  return { handleRepeat }
}

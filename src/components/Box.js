import React, { useEffect, useRef, useState } from "react"
import cross from "../media/cross.png"
import circle from "../media/circle.png"
import { useGlobal } from "../context/useGlobal"

export const Box = ({
  hasRef,
  id,
  isCross,
  setIsCross,
  playerOne,
  setPlayerOne,
  playerTwo,
  setPlayerTwo,
  restart,
}) => {
  const { startsPlayerOne, winner, setBlockedOpponent } = useGlobal()
  const [isClicked, setIsClicked] = useState(false)
  const [crossTurn, setCrossTurn] = useState(true)

  const autofill = useRef(null)

  const clickHandler = (e) => {
    if (Number(e.target.id) === id) {
      setCrossTurn(isCross)
      setIsClicked(true)
      setIsCross(!isCross)
      if (isCross) {
        startsPlayerOne
          ? setPlayerOne([...playerOne, id])
          : setPlayerTwo([...playerTwo, id])
      } else {
        startsPlayerOne
          ? setPlayerTwo([...playerTwo, id])
          : setPlayerOne([...playerOne, id])
      }
    }
  }

  useEffect(() => {
    setIsClicked(false)
  }, [restart])

  useEffect(() => {
    if (!winner) {
      if (autofill.current !== null) {
        setBlockedOpponent(true)
        setTimeout(() => {
          autofill.current.click()
        }, 500)
        setTimeout(() => {
          setBlockedOpponent(null)
        }, 1000)
      }
    }

    // eslint-disable-next-line
  }, [hasRef, winner])

  return (
    <div
      key={id}
      id={id}
      ref={hasRef && autofill}
      onClick={(e) => !isClicked && clickHandler(e)}
      className={`box box-${id}`}
    >
      {/* <h1>{id}</h1> */}
      {isClicked && <img src={crossTurn ? cross : circle} alt="inside-box" />}
    </div>
  )
}

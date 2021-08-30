import React, { useEffect, useRef, useState } from "react"
import cross from "../media/cross.png"
import circle from "../media/circle.png"
import { useGlobal } from "../context/useGlobal"

export const Box = ({
  id,
  isCross,
  setIsCross,
  playerOne,
  setPlayerOne,
  playerTwo,
  setPlayerTwo,
  restart,
  hasRef,
  winner,
}) => {
  const { startsPlayerOne } = useGlobal()
  const [isClicked, setIsClicked] = useState(false)
  const [crossTurn, setCrossTurn] = useState(true)

  const autofill = useRef(null)

  //   console.log(ref)

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
    if (winner) {
      autofill.current = null
    } else {
      if (autofill.current !== null) {
        setTimeout(() => {
          autofill.current.click()
        }, 900)
      }
    }
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

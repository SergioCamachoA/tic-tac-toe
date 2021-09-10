import { useGlobal } from "../context/useGlobal"
import { Grid } from "./Grid"

export const GridContainer = () => {
  const { blockedOpponent } = useGlobal()
  return (
    <div
      className="grid-container"
      style={
        blockedOpponent && {
          pointerEvents: "none",
        }
      }
    >
      <Grid />
    </div>
  )
}

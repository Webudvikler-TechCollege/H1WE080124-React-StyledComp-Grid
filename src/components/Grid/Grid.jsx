import { GridStyle } from "./Grid.styled"

export const Grid = ({ children }) => {
  return (
    <GridStyle>
        {children}
    </GridStyle>
  )
}

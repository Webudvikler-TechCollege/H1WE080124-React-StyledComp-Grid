import { MainStyle } from "./Main.styled"

export const Main = ({ children }) => {
  return (
    <MainStyle>
      <h2>Main</h2>
      { children }
    </MainStyle>
  )
}

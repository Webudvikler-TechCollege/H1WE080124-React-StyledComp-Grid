import { NavBarStyle } from "./NavBar.styled"

export const NavBar = () => {
  return (
    <NavBarStyle>
      <h3>Navigation</h3>
      <ul>
        <li><a href="#">Forside</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </NavBarStyle>
  )
}

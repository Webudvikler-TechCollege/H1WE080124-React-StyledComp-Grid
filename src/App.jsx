import { Footer } from './components/Footer/Footer'
import { Grid } from './components/Grid/Grid'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { NavBar } from './components/NavBar/NavBar'
import { SideBar } from './components/SideBar/SideBar'

function App() {
  return (
    <>
      <Grid>
        <Header />
        <NavBar />
        <SideBar />
        <Main>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque deleniti exercitationem perspiciatis debitis illo enim harum. Numquam, laborum saepe praesentium, voluptate quod tempora mollitia, suscipit qui aliquid sequi nisi quidem.</p>
        </Main>
        <Footer />
      </Grid>
    </>
  )
}

export default App

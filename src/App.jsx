import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Grid } from '@mui/material'
import NavDrawer from './Components/NavDrawer'
import HeaderAppBar from './Components/HeaderAppBar'
import Home from './Pages/Home'
import Area1 from './Pages/Area1'
import Area2 from './Pages/Area2'

function App() {
  return (
    <BrowserRouter>
      <Grid container>
        <Grid>
          <nav>
            <NavDrawer />
          </nav>
        </Grid>
        <Grid>
          <main>
            This is main content
          </main>
        </Grid>
      </Grid>
    </BrowserRouter>
  )
}

export default App

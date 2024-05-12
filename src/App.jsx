import './App.css'
//import { Button } from "@/components/ui/button"
//import { Header } from './components/Header/header'
import { Home } from './components/Header/header'
import { How_we_work } from './components/How-we-work/how-we-work'
import { Projet } from './components/Projets/Projets'
import { Design } from './components/Design/Design'

function App() {
 
  return (
    <>
      <Home/>
      <How_we_work/>
      <Projet/>
      <Design/>
    </>
  )
}

export default App

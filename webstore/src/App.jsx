import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './components/navBar'
import Footer from './components/footer'
import Carrousel from './components/carrousel'
import Destacados from './components/destacados'

function App() {
  return (
    <>
    <div>
      <NavBar />
      <Carrousel />
      <Destacados />
      <Footer />
    </div>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Benner from './components/Benner'
import Card from './components/Card'
import DetailProduct from './components/DetailProduct'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Header/>
      {/* <Benner/> */}
      <Routes>
        <Route path='/read/:id' element={<DetailProduct/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
     
     
    </>
  )
}

export default App

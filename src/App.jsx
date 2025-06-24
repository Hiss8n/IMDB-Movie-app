import React from "react"
import './index.css'
import { Routes,Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { MoviePage } from "./pages/MoviePage"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { AboutPage } from "./pages/About"

function App() {


  return (
     <> 
     <Header/>
  
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<AboutPage/>}/>
     <Route path="/movie/:id" element={<MoviePage/>}/>
    </Routes>
    <Footer/>
   </>

   
     
  )
}

export default App

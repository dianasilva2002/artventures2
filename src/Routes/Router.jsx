import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Login } from '../Views/Login/Login'
import { Navbar } from '../components/Navbar/Navbar'
import { Events } from "../Views/Events/Events"
import { Book } from "../Views/Book/Book"
import { Signup } from "../Views/Signup/Signup"
import { Tours } from '../Views/Tours/Tours'
import { Home } from '../Views/Home/Home'
import { Footer } from '../components/Footer/Footer'


export const Router = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/tours" element={<Tours/>} />
      <Route path="/events" element={<Events/>} />
      <Route path="/book" element={<Book />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
    
    </Routes>
    <Footer/>
    </>
  )
}

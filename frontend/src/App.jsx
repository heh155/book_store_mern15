import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Createbook from './pages/Createbook'
import Editbook from './pages/Editbook'
import Deletebook from './pages/Deletebook'
import Showbook from './pages/Showbook'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/books/create' element={<Createbook/>}/>
      <Route path='/books/edit/:id' element={<Editbook/>}/>
      <Route path='/books/delete/:id' element={<Deletebook/>}/>
      <Route path='/books/show/:id' element={<Showbook/>}/>
    </Routes>
  )
}

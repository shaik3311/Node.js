import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import AllPosts from './pages/AllPosts'
import CreatePost from './pages/CreatePost'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/allPosts' element={<AllPosts/>}/>
        <Route path='/createPost' element={<CreatePost/>}/>
      </Routes>
    </div>
  )
}

export default App
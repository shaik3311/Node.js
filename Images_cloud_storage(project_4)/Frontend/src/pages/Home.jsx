import React from 'react'
import Nav from '../components/Nav'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='w-screen h-screen bg-black text-white'>
        <Nav/>
        <div className='m-auto w-[70vw] h-[90vh] flex flex-col items-center justify-center'>
          <h1 className='text-5xl mb-5 font-bold'>Welcome to <span className='text-cyan-500'>ImageVault</span></h1>
          <p className='text-center'>ImageVault is a sleek image storage platform that lets users upload, manage, and access images <br /> instantly. Designed for speed and simplicity, it provides a smooth experience from <br />  upload to display using modern web technologies.</p>
          <Link to={'/allPosts'} className='bg-cyan-500 py-2 px-10 text-2xl font-lg rounded-lg mt-5 hover:bg-cyan-600 active:scale-96 text-left'>Explore 🔥</Link>
        </div>
    </div>
  )
}

export default Home
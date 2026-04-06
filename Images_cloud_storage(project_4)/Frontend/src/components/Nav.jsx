import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='text-white w-full h-[10vh] bg-cyan-400 flex justify-between items-center'>
      <div className='ml-10 text-3xl'>
        <Link to={'/'}>ImageVault</Link>
      </div>
        <div className='flex gap-10 mr-10 text-lg'>
          <Link to={'/createPost'}>Create Post</Link>
          <Link to={'/allPosts'}>All Posts</Link>
        </div>
    </nav>
  )
}

export default Nav
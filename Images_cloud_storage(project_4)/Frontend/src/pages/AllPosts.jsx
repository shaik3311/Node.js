import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import axios from 'axios'

const AllPosts = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const allPosts = await axios.get("http://localhost:3000/posts")
        // console.log(allPosts.data.posts);
        setPosts(allPosts.data.posts);
         
      } catch (err) {
        console.log(err);
      }
    }
    getPosts();
  }, []);

  const handleDelete = async (post)=>{
    const id = post._id;
    try{
      // console.log(post._id);
      const res = await axios.delete(`http://localhost:3000/posts/${id}`);
      let updated_Posts = posts.filter(post=>post._id!=id);
      setPosts(updated_Posts);
    }catch(error){
      console.log(error);
    }
  }
  

  return (
    <div className='bg-black min-h-screen text-white'>
      <Nav />

      <div className='p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        
        {posts.map((post) => (
          <div 
            key={post.id} 
            className='bg-zinc-900 rounded-2xl overflow-hidden shadow-md hover:scale-105 transition duration-300'
          >
            <img 
              src={post.url} 
              alt={post.title} 
              className='w-full h-48 object-cover'
            />

            <div className='p-4 flex justify-between'>
              <h2 className='text-lg font-semibold'>
                {post.title}
              </h2>
              <button className='hover:scale-120 active:scale-96'
              onClick={()=>{
                handleDelete(post)
              }}
              ><img src="/delete.png" alt="" className='w-5'/></button>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default AllPosts
import React, { useState } from 'react'
import Nav from '../components/Nav'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const createPost = () => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const submitHandler = async (e)=>{
    e.preventDefault();
    if(!title || !file){
      alert("Enter all fields");
      return;
    }

    const formData = new FormData();
    formData.append("title",title);
    formData.append("image",file);

    try{
      const res = await axios.post("http://localhost:3000/post", formData);
      alert(res);
    }catch(error){
      alert("Upload failed");
    }

  }
  return (
    <div className='w-screen h-screen bg-black text-white'>
      <Nav/>
      <div className='h-[90vh] flex items-center justify-center'>
        <form onSubmit={submitHandler} className='bg-cyan-900 px-8 py-12 rounded-lg flex flex-col'>
          <h1 className='text-2xl text-center'>Create a new post..</h1>
          <h2 className='mb-2'>Image Title : </h2>
          <input 
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value);
          }}
          name='title'
          className='mb-3 px-6 py-3 border-2 border-black rounded-lg' type="text" placeholder='Enter Title for image' required />
          <h2 className='mb-2'>Upload a image : </h2>
          <input
          onChange={(e)=>{
            setFile(e.target.files[0]);
          }}
          name='image'
          accept='image/*'
          className='mb-3 px-6 py-3 border-2 border-black rounded-lg' type="file" required/> <br />
          <button className='bg-cyan-700 py-3 rounded-lg hover:bg-cyan-800 active:scale-96' type='submit'>Upload</button>
        </form>
      </div>
    </div>
  )
}

export default createPost
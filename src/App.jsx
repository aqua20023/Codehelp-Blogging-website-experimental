import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Blogs from './components/Blogs'
import Pagination from './components/Pagination'
import { AppContext } from './context/AppContext'


function App() {
 const {fetchBlogPosts} = useContext(AppContext);

 useEffect(()=>{
  fetchBlogPosts();
 },[]);


  return (
    <div className='h-full w-full flex flex-col justify-center items-center'>
      <Header/>
      <Blogs/>
      <Pagination/>
    </div>
  )
}

export default App

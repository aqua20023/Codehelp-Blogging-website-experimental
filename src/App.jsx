import { use, useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Blogs from './components/Blogs'
import Pagination from './components/Pagination'
import { AppContext } from './context/AppContext'
import BlogPage from './pages/BlogPage'
import Header from './components/Header'
import TagPage from './pages/TagPage'
import CategoryPage from './pages/CategoryPage'
import { Routes, Route, useSearchParams, useLocation } from 'react-router-dom'
import Home from './pages/Home'

function App() {
 const {fetchBlogPosts} = useContext(AppContext);

 const [searchParam, setSearchParam] = useSearchParams()
 const location = useLocation();

 useEffect(()=>{
  const page = searchParam.get('page') ?? 1; 
  if(location.pathname.includes('tags')) {
    const tag = location.pathname.split('/').at(-1).replaceAll('-',' ');
    // -1 gives the last element of the link after /
    fetchBlogPosts(Number(page), tag);
  }
  else if(location.pathname.includes('category')) {
    const category = location.pathname.split('/').at(-1).replaceAll('-',' ');
    fetchBlogPosts(Number(page), null, category);
  }
  else {
    fetchBlogPosts(Number(page));
  }

 },[location.pathname, location.search]);


  return (
    <div className='h-full w-full flex flex-col justify-center items-center'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog/:id' element={<BlogPage />} />
        <Route path='/category/:category' element={<CategoryPage />} />
        <Route path='/tags/:tag' element={<TagPage />} />
      </Routes>
    </div>
  )
}

export default App

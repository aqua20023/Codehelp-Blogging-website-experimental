import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs'


const CategoryPage = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const category = location.pathname.split('/').at(-1);
  return (
    <div className='h-full w-full flex flex-col justify-center items-center'>
      <Header/>
      <div>
        <button 
        onClick={()=> navigation(-1)}>
          Back
        </button>
        <h1>Blogs on <span>{category}</span></h1>
      </div>
      <Blogs/>
      <Pagination/>
    </div>
  )
}

export default CategoryPage

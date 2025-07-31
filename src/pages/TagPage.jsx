import React from 'react'
import Header from '../components/Header'
import { useNavigate, useLocation } from 'react-router-dom'
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';

const TagPage = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1);
  return (
    <div>
      <Header/>
      <div>
        <button
        onClick={()=> navigation(-1)}>
          Back
        </button>
        <h1>Blogs Tagged <span>#{tag}</span></h1>
      </div>
      <Blogs/>
      <Pagination/>
    </div>
  )
}

export default TagPage

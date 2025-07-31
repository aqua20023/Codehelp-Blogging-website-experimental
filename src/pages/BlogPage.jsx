import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import Header from '../components/Header';
import Spinner from '../components/Spinner'
import Card from '../components/Card';
import { useContext } from 'react';
import { baseUrl } from '../baseUrl';

const BlogPage = () => {
  const [blog, setBlog] = useState('');
  const [relatedBlog,setRelatedBlog] = useState([]);
  const navigation = useNavigate();
  const location = useLocation();
  const {loading, setLoading, posts} = useContext(AppContext);
  const blogId = location.pathname.split('/').at(-1);
  const newBaseUrl = "https://codehelp-apis.vercel.app/api/";


  async function fetchRelatedBlogs(){
    setLoading(true);
    const url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    try{
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setBlog(data.blog);
      setRelatedBlog(data.relatedBlogs);
      //in above setRelatedBlog function data.relatedBlogs is not not a usestate variable instead it is predefined in the api array with name relatedBlogs
    }catch(error){
      console.log(error)
      setBlog(null);
      setRelatedBlog([]);
    }
    setLoading(false);
  }

  useEffect(()=>{
    if(blogId){
      fetchRelatedBlogs();
    }
  },[location.pathname]);

  
  return (
    <div className='h-full w-full flex flex-col justify-center items-center'>
      <Header/>
      <div className='w-11/12 max-w-[450px] flex flex-col gap-4 mt-[80px]'>
      <div>
        <button
        onClick={()=>navigation(-1)}>
          Back
        </button>
      </div>
       {
        loading ? (<Spinner/>) : 
          blog ? (
            <div>
            <Card  post={blog}/>
            <h2>Related Blogs</h2>
            <div>
            
              {relatedBlog.map((post)=>(
                 
                  <div key={post.id}>
                    <Card  post={post}/>
                  </div>
                ))}
            </div>
            </div>
          ):
          (
            <div>Blog not found</div>
          ) 
        }
      </div>
    </div>
  )
}

export default BlogPage

import React, { useContext } from 'react'
import {AppContext} from '../context/AppContext'
import Spinner from './Spinner'
import Card from './Card' 

const Blogs = () => {
  const {loading, posts} = useContext(AppContext);
  console.log("posts", posts);
  return (
    <div className='w-11/12 max-w-[450px] flex flex-col gap-4 mt-[80px]'>
      {
        loading ? (<Spinner/>) : 
        (
          posts.length === 0 ? 
          (
            <div>
              No post available
            </div>
          ) : 
          (
            
             posts &&  posts.map(((post) => (<Card key={post.id} post={post}/>)))
          )
        )
      }
    </div>
  )
}

export default Blogs

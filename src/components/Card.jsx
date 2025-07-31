import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import { NavLink } from 'react-router-dom';

const Card = ({post}) => {

  return (
        <div >
          <NavLink to={`/blog/${post.id}`}><span className='font-bold text-emerald-700 text-lg'>{post.title}</span></NavLink>
          <div>
            {post.id}
          </div>
          <p className='text-xs text-gray-600'>
            By <span className='italic'>{post.author}</span> on {" "}
            <NavLink to={`/category/${post.category.replaceAll(" ","-")}`}>
              <span className='underline font-bold'>{post.category}</span>
            </NavLink>
          </p>
          <p className='text-xs'>Posted on <span className=''>{post.date}</span></p>
          <p className='text-sm mt-[10px]'>{post.content}</p>
          <div className='flex gap-[8px]'>
            {Array.isArray(post.tags) && post.tags.map((tag, index) => (
              <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
              <span className='text-blue-500 font-bold underline text-[10px]'>{`#${tag}`}</span>
            </NavLink>))}
          </div>
        </div>
  );
}

export default Card

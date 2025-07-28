import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext';


const Card = ({post}) => {
  return (
        <div >
          <p className='font-bold text-emerald-700 text-lg'>{post.title}</p>
          <p className='text-xs text-gray-600'>
            By <span className='italic'>{post.author}</span> on <span className='underline font-bold'>{post.category}</span>
          </p>
          <p className='text-xs'>Posted on <span className=''>{post.date}</span></p>
          <p className='text-sm mt-[10px]'>{post.content}</p>
          <div className='flex gap-[8px]'>
            {post.tags && post.tags.map((tag, index) => (
              <span className='text-blue-500 font-bold underline text-[10px]' key={index}>{` #${tag} `}</span>
            ))}
          </div>
        </div>
  );
}

export default Card

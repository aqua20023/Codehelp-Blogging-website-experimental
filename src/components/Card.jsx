import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext';


const Card = ({post}) => {
  return (
        <div >
          <p>{post.title}</p>
          <p>
            By <span>{post.author}</span> on <span>{post.category}</span>
          </p>
          <p>Posted on <span>{post.date}</span></p>
          <p>{post.content}</p>
          <div>
            {post.tags && post.tags.map((tag, index) => (
              <span key={index}>{` #${tag} `}</span>
            ))}
          </div>
        </div>
  );
}

export default Card

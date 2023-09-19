import React from 'react'
import { Link } from 'react-router-dom';

export default function Post(props) {
  const { post, updatePost, removePost, getDate} = props;       

  return (    
    <div className='border py-2 px-4 rounded flex flex-col items-center mb-2'>
      <p>{getDate(post.created)}</p>
      <div>
        <p className='text-2xl'>
          <Link to={`/posts/${post.id}`}>{post.content}</Link>
        </p>
      </div>      
    </div>
  )
}

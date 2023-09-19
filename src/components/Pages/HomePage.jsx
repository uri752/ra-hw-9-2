import React from 'react'
import Post from './../Post/Post';
import { Link } from 'react-router-dom';


export default function HomePage(props) {    
    const { posts, getDate } = props;
    return (
    <div className='container mx-auto max-w-2xl pt-5'>
        <button className='bg-green-400 py-2 px-4 border'>
            <Link to='/posts/new'>Создать пост</Link>
        </button>
        <div>            
            {
            posts.map( ( post ) => {
                return(
                    <Post key={post.id} post={post} getDate={getDate}/>
                );
            })
            }

        </div>

    </div>
  )
}

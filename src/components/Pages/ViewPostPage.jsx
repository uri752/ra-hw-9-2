import React, { useState, useEffect } from 'react'
import PostEdit from '../Post/PostEdit';
import { useParams } from 'react-router-dom';

export default function ViewPostPage(props) {
    const { updatePost, removePost, getDate } = props;
    const [post, setPost] = useState({id:'', content:'', created:''});    
    const params = useParams();
    const { id } = params;
    

    async function getPostById(id) {
        let promise = fetch(`http://localhost:7070/posts/${id}`);
        promise.then( res => res.json())
        .then( json => {            
            const curPost = json.post;
            setPost(curPost)
        })          
        .catch( err => {
          console.warn(err);
          alert('Ошибка загрузки данных с сервера!');
        });
      }   
    
    useEffect( () => {        
        getPostById(id);        
    }, []);

    return (
        <div className='container mx-auto max-w-2xl pt-5'>            
            {<PostEdit post={post} updatePost={updatePost} removePost={removePost} getDate={getDate}/>}
        </div>
  )
}

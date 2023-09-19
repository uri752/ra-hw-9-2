import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PostEdit(props) {
  const { post, updatePost, removePost, getDate } = props; 
  const [isEdit, setIsEdit] = useState(false);  
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  return (    
    <div className='border py-2 px-4 rounded flex flex-col items-center mb-2'>      
      <span>{getDate(post.created)}</span>
      <div>
        { !isEdit && <p className='text-2xl'>{post.content}</p>}
        { isEdit && <textarea 
                className='w-full border-2 m-5'
                type='text' 
                id='text' 
                name='text'
                value={content} 
                onChange={e => setContent(e.target.value)} 
                rows='3' 
                autoComplete='off' 
                required/>}
        { !isEdit && <button className='bg-blue-400 py-1 px-4 border' onClick={ () => {
            setContent(post.content);
            setIsEdit(true);}}>Изменить</button> }
        { !isEdit && <button className='bg-red-400 py-1 px-4 m-1 border' onClick={ () => {           
            removePost(post.id);
            navigate('/');
            } } >Удалить</button>}
        { isEdit && <button className='bg-blue-400 py-1 px-4 border' onClick={ () => {            
            updatePost(post.id, content);
            //setIsEdit(false);
            navigate('/');
            } }>Сохранить</button>}
      </div>
      
    </div>
  )
}

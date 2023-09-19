import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function CreatePostPage(props) {
    const { addPost } = props;
    const [content, setContent] = useState();
    const navigate = useNavigate();    

    return (
    <div className='container mx-auto max-w-2xl pt-5'>        
        <form className='border py-2 px-4 rounded flex flex-col items-center mb-2'>
            <label htmlFor='text'>Создать пост</label>
            <textarea 
                className='w-full border-2 m-5'
                type='text' 
                id='text' 
                name='text'
                value={content} 
                onChange={e => setContent(e.target.value)} 
                rows='3' 
                autoComplete='off' 
                required/>
            <button 
                className='bg-blue-400 py-1 px-4 border' 
                onClick={ () => {
                    addPost(content);
                    navigate('/');
                } }>
                    Опубликовать
            </button>
        </form>        
    </div>
  )
}

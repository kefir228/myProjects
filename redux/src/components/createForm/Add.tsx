import React from 'react'
import './Add.css'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from 'app/store'
import { addPost } from 'app/postSlice'
export const Add = () => {
    const dispatch = useDispatch()
    const newPostState = useSelector((state: RootState) => state.newPost)

    const [inputLinkPhoto, setInputLinkPhoto] = useState('')
    const [inputName, setInputName] = useState('')
    const [inputText, setInputText] = useState('')
    const [email, setEmail] = useState('')
    const [photoContent, setPhotoContent] = useState('')


    const handleChange = () => {
        const newPost = {
            id: Date.now(),
            avatar: inputLinkPhoto,
            name: inputName,
            email: email,
            date: new Date().toLocaleDateString(),
            postText: inputText,
            image: photoContent,
            comments: 0,
            shares: 0,
            likes: 0,
        }
        dispatch(addPost(newPost))

        setInputLinkPhoto('');
        setInputName('');
        setInputText('');
        setEmail('');
        setPhotoContent('');
    }

    return (
        <div className='contentBox'>
            <h1 className='title'>{newPostState.h1}</h1>
            <ul className='inputList'>
                <input type="text"
                    placeholder='Link to photo'
                    value={inputLinkPhoto}
                    onChange={(e) => setInputLinkPhoto(e.target.value)}
                />
                <input type="text"
                    placeholder='Name'
                    value={inputName}
                    onChange={(e) => setInputName(e.target.value)}
                />
                <input type="text"
                    placeholder='Post Content'
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                />
                <input type="text"
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input type="text"
                    placeholder='Image for post content'
                    value={photoContent}
                    onChange={(e) => setPhotoContent(e.target.value)}
                />
                <button onClick={handleChange}>Add Post</button>
            </ul>
        </div>
    )
}
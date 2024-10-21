import React from 'react'
import './Public.css';
import { useSelector } from 'react-redux';
import { Header } from './Header/Header';
import { Comment } from './Comment/Comment';
import { Footer } from './Footer/Footer';
import { RootState } from 'app/store';

export const Public = () => {
    const posts = useSelector((state: RootState) => state.posts.posts)
    return (
        <div className="public-container">
            {posts.map((post) => (
                <div key={post.id} className='post'>
                    <Header
                        avatar={post.avatar}
                        name={post.name}
                        email={post.email}
                        date={post.date}
                    />
                    <Comment
                        postText={post.postText}
                        image={post.image}
                    />
                    <Footer
                        comments={post.comments}
                        shares={post.shares}
                        likes={post.likes}
                    />
                </div>
            ))}
        </div>
    )
}
import React from 'react'
import { useState } from 'react'
import './Footer.css'

interface FooterProps {
    comments: number
    shares: number
    likes: number
}

export const Footer: React.FC<FooterProps> = ({ comments, shares, likes }) => {

    const [currentComment, setCurrentComment] = useState(comments)
    const [currentShares, setCurrentShares] = useState(shares)
    const [currentLikes, setCurrentLikes] = useState(likes)

    const toggleValue = (currentValue: number, setValue: React.Dispatch<React.SetStateAction<number>>) => {
        setValue(prev => (prev === currentValue ? currentValue + 1 : currentValue))
    }

    return (
        <div className='footer'>
            <ul className="footer__list">
                <li onClick={() => toggleValue(comments, setCurrentComment)} className="footer__item" dangerouslySetInnerHTML={{ __html: `&#128172 ${currentComment}` }} />
                <li onClick={() => toggleValue(shares, setCurrentShares)} className="footer__item" dangerouslySetInnerHTML={{ __html: `&#128257  ${currentShares}` }} />
                <li onClick={() => toggleValue(likes, setCurrentLikes)} className="footer__item" dangerouslySetInnerHTML={{ __html: `&#9829  ${currentLikes}` }} />
                <li className="footer__item" dangerouslySetInnerHTML={{ __html: '&#128190' }} />
            </ul>
        </div>
    )
}
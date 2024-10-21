import React from 'react'
import './Header.css'

interface HeaderProps {
    avatar: string;
    name: string;
    email: string;
    date: string;
}

export const Header:React.FC<HeaderProps> = ({avatar, name, email, date}) => {
    return (
        <div>
            <ul className="header__list">
                <li className="avatar">{avatar && <img className="avatar__photo" src={avatar} alt={name}/>}</li>
                <li className="name">{name}</li>
                <li className="email">{email}</li>
                <li className="date">{date}</li>
            </ul>
        </div>
    )
}
import React from 'react'
import './Menu.css'
import { Link } from 'react-router-dom'

export const Menu = () => {
    return (
        <div className='menu'>
            <ul className='menuList'>
                <li className='menuItem'>
                    <Link to={''} className='link'>Posts</Link>
                </li>
                <li className='menuItem'>
                    <Link to={'/add'} className='link'>Add</Link>
                </li>
            </ul>
        </div>
    )
}
import React, {useState, useEffect} from 'react';
import Link from './Link';

const Header = () => {
    return (
        <div className = "ui secondary pointing menu">
            <Link href = "/" className = 'item'>
                Accordion
            </Link>
            <Link href = '/search' className = 'item'>
                Search
            </Link>
            <Link href = '/dropdown' className ='item'>
                Dropdown
            </Link>
            <Link href = '/translate' className = 'item'>
                Translate
            </Link>
            <Link href = '/video' className = 'item'>
                Video
            </Link>
        </div>
    )
}

export default Header;
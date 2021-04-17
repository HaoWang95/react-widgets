import React from 'react'

const Link = ({className, href, children}) => {
    const linkOnClick = (event) => {
        event.preventDefault();
        window.history.pushState({},'', href);

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent); 
    };


    return (
        <a onClick = {linkOnClick} className = {className} href = {href}>
            {children}
        </a>
    )
}

export default Link;
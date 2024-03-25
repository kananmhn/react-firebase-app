import React from 'react';
import "./Header.css";

const Header = () => {
    return (
        <header className='header'>
            <div className='row'>
                
                    <div className='logo text-center'>
                        <a href='/'>
                            <h1>Theme Builder</h1> 
                        </a>
                    </div>
            </div>
        </header>
    );
};

export default Header;
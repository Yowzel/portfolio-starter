import React from 'react';

import Logo from '../assets/Logo.png'

const Header = () => {

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  return <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        {}
        <a href='#'>
          <img src={Logo} alt =""/>
        </a>
        {}
        <button className='btn btn-sm' onClick={() => openInNewTab('https://docs.google.com/document/d/e/2PACX-1vQ8DSeGpLGjpAJQSQy5EF6lgG5lcQeuEu0vABtqbT-1vdeTUrzc5YyANX-H0Yozb_0ehoHOxFvB2SlM/pub')}>Resume</button>
      </div>
    </div>
  </header>;
};

export default Header;

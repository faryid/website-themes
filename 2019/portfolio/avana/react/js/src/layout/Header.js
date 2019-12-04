import React from 'react';
import Logo from '../components/Logo';
import NavItems from '../components/NavItems';

function Header() {
  const menuItems = [
    { path: '/', label: 'Work', title: 'Work' },
    { path: '/blog', label: 'Blog', title: 'Blog' },
    { path: '/about', label: 'About', title: 'About' },
    { path: '/contact', label: 'Contact', title: 'Contact' }
  ];

  return (
    <header role='header'>
      <div className='container'>
        {/* Logo */}
        <Logo />

        {/* Nav */}
        <nav role='header-nav' className='navy'>
          <NavItems items={menuItems} activePath='/' />
        </nav>
      </div>
    </header>
  );
}

export default Header;

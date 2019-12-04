import React from 'react';
import Logo from '../components/Logo';
import NavItems from '../components/NavItems';
import SocialIcons from '../components/SocialIcons';

function Footer() {
  const menuItems = [
    { path: '/', label: 'Work', title: 'Work' },
    { path: '/blog', label: 'Blog', title: 'Blog' },
    { path: '/about', label: 'About', title: 'About' },
    { path: '/contact', label: 'Contact', title: 'Contact' }
  ];

  const socialItems = [
    {
      name: 'X',
      url: 'https://x.com',
      icon: 'fa-twitter'
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com',
      icon: 'fa-facebook'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com',
      icon: 'fa-linkedin'
    },
    {
      name: 'Flickr',
      url: 'https://www.flickr.com',
      icon: 'fa-flickr'
    }
  ]

  return (
    <footer role='footer'>
      {/* Logo */}
      <Logo />

      {/* Nav */}
      <nav role='footer-nav'>
        <NavItems items={menuItems} />
      </nav>

      {/* Social */}
      <SocialIcons items={socialItems} />

      <p className='copy-right'>
        &copy; 2015 avana LLC. All rights Reserved
      </p>
    </footer>
  );
}

export default Footer;

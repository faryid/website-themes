import React from 'react';

function SocialIcons({ items }) {
  return (
    <ul role='social-icons'>
      {items.map(item => (
        <React.Fragment key={item.name}>
          <li>
            <a
              href={item.url}
              target='_blank'
              rel='noopener noreferrer'
              title={item.name}
              // aria-hidden='true'
            >
              <i className={`fa ${item.icon}`} />
            </a>
          </li>
          {' '}
        </React.Fragment>
      ))}
    </ul>
  );
}

SocialIcons.defaultProps = {
  items: [
    {
      name: 'Twitter',
      url: 'https://www.twitter.com',
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
};

export default SocialIcons;

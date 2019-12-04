import React from 'react';

function Figure({ src, alt, title, highlight, description, href }) {
  const style = {
    // Show white text in white background.
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
  };

  return (
    <figure className='effect-oscar'>
      <img
        src={src}
        alt={alt}
        className='img-responsive'
      />
      <figcaption>
        <h2>
          {title} <span>{highlight}</span>
        </h2>
        <p>{description}</p>
        <a href={href}>View more</a>
      </figcaption>
    </figure>
  );
}

export default Figure;

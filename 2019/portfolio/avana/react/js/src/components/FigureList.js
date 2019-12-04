import React from 'react';
import FigureItems from './Figure';

function FigureList({ workItems }) {
  return (
    // <ul className='grid-lod effect-2' id='grid'>
    <ul className='grid-lod effect-2'>
      {workItems.map((work, index) => (
        <FigureItems
          key={index}
          alt={work.alt}
          src={work.image}
          title={work.title}
          highlight={work.highlight}
          description={work.description}
          href={work.path}
        />
      ))}
    </ul>
  );
}

export default FigureList;

import React from 'react';

function NavItems({ items, activePath }) {
  return (
    <ul>
      {items.map(item => {
        const isActive = activePath === item.path;

        return (
          <React.Fragment key={item.path}>
            <li className={isActive ? 'nav-active' : undefined}>
              <a href={item.path} title={item.title}>
                {item.label}
              </a>
            </li>
            {' '}
          </React.Fragment>
        );
      })}
    </ul>
  );
}

NavItems.defaultProps = {
  activePath: null,
};

export default NavItems;

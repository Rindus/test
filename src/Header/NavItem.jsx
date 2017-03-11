import React from 'react';

export default (props) => {
  const {isActive, link, onClick, children} = props;
  let className = isActive ? "Navbar__item is-active" : "Navbar__item";
  return <a className={className} href={link} onClick={onClick}>{children}</a>;
  
}
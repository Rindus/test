import React from 'react';
import NavItem from "./NavItem";
import "./Header.css";
export default (props) =>
  <header className="Header">
    <h1 className="Header__brandName">Brandname</h1>
    <nav className="Navbar">
      {props.items.map(itemNumber =>
        <NavItem key={"NavItem--" + itemNumber}
          link={"#link_" + itemNumber}
          isActive={itemNumber === props.navItemActiveIndex}
          onClick={() => props.changeNavItemActive(itemNumber)}>
         Menu Item {itemNumber}
         </NavItem>
      )}

    </nav>
  </header>
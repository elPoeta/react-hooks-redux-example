import React from 'react'
import {NavLink} from 'react-router-dom';

const NavLinkItem = (props) => {
    const {path, title} = props;
    return (
        <NavLink to={path} exact activeClassName="NavBar-menu-current" className="NavBar-menu-links">
        {title}
      </NavLink>
    )
}

export default NavLinkItem

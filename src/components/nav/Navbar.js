import React from 'react'
import NavLinkItem from './NavLinkItem';

const Navbar = () => {
    const links = [
        {id:1, path:"/", title:"Home"},
        {id:2, path:"/recipes", title:"Recipes"},
        {id:3, path:"/createrecipe", title:"Create"}
    ]
    return (
        <nav className="NavBar-menu">
          <ul>
            {links.map(link => ( 
              <li key={link.id}>
                <NavLinkItem  path={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </nav>
    )
}

export default Navbar

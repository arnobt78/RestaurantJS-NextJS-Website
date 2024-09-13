"use client"

import { Link } from "react-scroll"


const links = [
  {
    path: 'home',
    name: 'home',
    offset: -50
  },
  {
    path: 'menu',
    name: 'menu',
    offset: -50
  },
  {
    path: 'about',
    name: 'about',
    offset: -150
  },
  {
    path: 'contact',
    name: 'contact',
    offset: 0
  },
]

const Nav = ({ containerStyles, linkStyles }) => {
  return (
    <nav className={`${containerStyles}`}>
      {
        links.map((link, index) => {
          return (
            <Link 
              key={index} 
              to={link.path}
              spy={true}
              smooth={true}
              offset={link.offset}
              duration={500}
              className={`${linkStyles}`}  
            >
              {link.name}
            </Link>
          )
        })
      }
    </nav>
  )
}

export default Nav
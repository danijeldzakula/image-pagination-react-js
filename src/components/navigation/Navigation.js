import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className='navigation'>
			<div className='container'>
				<ul>
          <NavLink className='nav-link' to='/'>Home</NavLink>
          <NavLink className='nav-link' to='/o-nama'>O Nama</NavLink>
          <NavLink className='nav-link' to='/galerija-radova'>Galerija</NavLink>
          <NavLink className='nav-link' to='/kontakt'>Kontakt</NavLink>
        </ul>
			</div>
    </nav>
  )
}

export default Navigation
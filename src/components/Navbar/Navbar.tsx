import * as React from 'react';
import './Navbar.css';


export function Navbar () {
  return (
    <div className='topnav'>
        <a className='active' href='#'>Home</a>
        <a href='#'>Contacts</a>
        <a href='#'>About Us</a>
        <a href='#'>News</a>
    </div>
  );
}

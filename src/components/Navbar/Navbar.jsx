// import * as React from 'react';
// import { styled, alpha } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import './navbar.css'
import Link from "next/link";

export default function Navbar() {
  return (
    <section className='navbar'>
      <Link href="/">CodeFlix</Link>
      <ul>
        <li>
          <Link href="/popular">Populaires</Link>
        </li>
        <li>
          <Link href="/bestnotes">Meilleures notes</Link>
        </li>
        <li>
          <Link href="/upcoming">à venir</Link>
        </li>
      </ul>
      <div>
        <input type="text" />
        <SearchIcon />
      </div>
    </section>
  )
}
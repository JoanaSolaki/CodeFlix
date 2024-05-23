"use client"

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
import { useContext } from 'react';
import { AppContext } from '@/app/AppContext';

export default function Navbar() {
  const appContext = useContext(AppContext)

  const handleSearchChange = (event) => {
    setTimeout(() => { appContext.setSearch(event.target.value) }, 1400)

  };

  return (
    <section className='navbar'>
      <Link href="/" className='brand'>CodeFlix</Link>
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
        <input onChange={handleSearchChange} type='search' name='search' id='search'/>
        <Link href="/search"><SearchIcon /></Link>
      </div>
    </section>
  )
}
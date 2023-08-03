import React, { useState } from 'react';
import { Link} from "react-router-dom";
  import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
  import WorkIcon from '@mui/icons-material/Work';
  import GridViewIcon from '@mui/icons-material/GridView';
  import CloseIcon from '@mui/icons-material/Close';
  import MenuIcon from '@mui/icons-material/Menu';
export default function Header() {
    const[sidebar,setSidbar]=useState(false)

  
    window.addEventListener("scroll", function () {
      const header = document.querySelector(".header");
      header.classList.toggle("active", window.scrollY > 200);
  });

  return (
    <>
    <header className='header'>
    <div className= 'container flex'>
    <div className='logo'>
    <img src='https://github.com/sunil9813/Resource-One/blob/master/assets/logo.png?raw=true'></img>
    </div>
    
    <div className="nav">
     <ul className= {sidebar ? "nav-links-sidebar":"nav-links"} onClick={() => setSidbar(false)}>
     <li><Link to='/'>Home</Link></li>
     <li><Link to='/pages'>Pages</Link></li>
     <li><Link to='/portfolio'>Portfolio</Link></li>
     <li><Link to='/shop'>Shop</Link></li>
     <li><Link to='/contact'>Contact</Link></li>
     <li className='icon'>
        <SearchOutlinedIcon className=' HeaderIcon'></SearchOutlinedIcon>
        <WorkIcon className=' HeaderIcon'></WorkIcon>
        <GridViewIcon className=' HeaderIcon'></GridViewIcon>
      </li>
    </ul>
    </div>
    <button className='navbar-items-icon' onClick={()=>{setSidbar(!sidebar)}}>
        {sidebar ? <CloseIcon></CloseIcon> : <MenuIcon></MenuIcon>}
    </button>
    </div>
    </header>
    </>
  )
}

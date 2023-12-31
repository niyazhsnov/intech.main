import React from 'react'
import { Link } from "react-scroll";
import { HideBetween } from 'react-hide-on-scroll';
import  {useState, useEffect} from "react";
import "./Navbar.css"

const Navbar = () => {

  return (
    <nav>
<header class="header">
<HideBetween div startDivID="first" endDivID="end"><a href="" class="logo"><img className='logoimg' src='https://img001.prntscr.com/file/img001/8BsRCpmTQme2e9lKUTmLfA.png'></img></a>
</HideBetween>

  
  <input class="menu-btn" type="checkbox" id="menu-btn" />
  <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
  <ul class="menu">
  <li>
              <Link activeClass="active" smooth spy to="komandamiz">
                Komandamız
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="xidmetlerimiz">
               Xidmətlərimiz
              </Link>
              </li>
              <li>
              <Link activeClass="active" smooth spy to="layihelendirme">
                Layihələrimiz
              </Link>
            </li>
            
     <li>
              <Link activeClass="active" smooth spy to="xeberler">
                Haqqımızda
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="elaqe">
               Əlaqə
              </Link>
            </li>
  </ul>
</header>
    </nav>
  )
}

export default Navbar

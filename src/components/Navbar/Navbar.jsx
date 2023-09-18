import React from 'react'
import { Link } from "react-scroll";
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav>
<header class="header">
  <a href="" class="logo"><img className='logoimg' src='https://img001.prntscr.com/file/img001/8BsRCpmTQme2e9lKUTmLfA.png'></img></a>


  
  <input class="menu-btn" type="checkbox" id="menu-btn" />
  <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
  <ul class="menu">
  <li>
              <Link activeClass="active" smooth spy to="komandamiz">
                Haqqımızda
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
              <Link activeClass="active" smooth spy to="emekdaslar">
               Əməkdaşlar
              </Link>
            </li>
     <li>
              <Link activeClass="active" smooth spy to="xeberler">
                Xəbərlər
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

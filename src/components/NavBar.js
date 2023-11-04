import React, { useEffect } from "react";
import "../stylesheets/NavBar.css";
import webdev from '../svgs/web_dev.svg'
import 'animate.css';
import { Link } from "react-router-dom";

export default function NavBar() {
  
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      const Nav_Bar = document.querySelector('.Nav-Wrapper')
      if(window.scrollY>0)
      {
       Nav_Bar.classList.add('anim_d_down')
      }
      else
      {
        Nav_Bar.classList.remove('anim_d_down')        
      }

    })
  },[])
  
  return (
    <>
      <header>
        <nav>
        <div className="Nav-Wrapper ">
          <div className="Nav-Bar">
            <div className="Nav-Left">
                <a className="Main_Title" href="" rel="noreferrer noopener">
                  @muttaqeen_231
                </a>
                <img src={webdev} alt="Dev." />
            </div>
            <div className="Nav-Right">
              <Link rel="noreferrer noopener" to='/'>
                Home
              </Link>
              <Link rel="noreferrer noopener" to='/Projects'>
                Projects
              </Link>
              <Link rel="noreferrer noopener" to='/AboutMe'>
                About
              </Link>
              <Link rel="noreferrer noopener" to='/Contact'>
                Contact
              </Link>
            </div>
          </div>
          <div className='B_Grad mt-2'/>
        </div>
        </nav>
      </header>
      
    </>
  );
}

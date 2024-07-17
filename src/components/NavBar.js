import React, { useEffect, useState } from "react";
import "../stylesheets/NavBar.css";
import webdev from "../svgs/web_dev.svg";
import "animate.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [display, setDisplay] = useState("none");
  const handleMenu = () => {
    if (display == 'none') {
      setDisplay('block');
    } else {
      setDisplay('none');
    }
  };
  useEffect(() => {
    const MainTitle = document.querySelector('#MainTitle')
    window.addEventListener("scroll", () => {
      const Nav_Wrpr = document.querySelector(".Nav-Wrapper");
      const Nav_Right = document.querySelector('#Nav_Right');
      const Nav_Left = document.querySelector('#Nav_Left');
      if (window.scrollY > 100) {
        Nav_Wrpr.classList.add("anim_d_down");
        Nav_Wrpr.style.height = '10vmin ';
        Nav_Wrpr.style.position = 'fixed';
        Nav_Wrpr.style.backgroundColor = 'transparent ';
        Nav_Left.style.width = '100%';
        Nav_Left.style.height = '100%';
        Nav_Left.style.justifyContent = 'center';
        Nav_Right.style.display = 'none';
        Nav_Left.classList.add('TxtAnim')
        MainTitle.style.fontSize = '6vmin';
        MainTitle.style.color = '#61dafb';
      } 
      else if(window.scrollY < 100) {
        Nav_Wrpr.style.position = 'static';
        Nav_Wrpr.classList.remove("anim_d_down");
        Nav_Wrpr.style.backgroundColor = '#0f0f0f';
        Nav_Left.style.justifyContent = 'flex-start';
        Nav_Right.style.display = 'flex'; 
        MainTitle.style.fontSize = '3vmin';
        MainTitle.style.color = '#61dafb';
        Nav_Left.classList.remove('TxtAnim')
      
      }
    });
  }, []);

  return (
    <>
      <header>
        <nav>
          <div className="Nav-Wrapper ">
          <div className="B_Grad mt-2" />
              <div className="Nav-Bar">
                <div className="Nav-Left" id="Nav_Left">
                  <div>
                  <a className="Main_Title" href="" rel="noreferrer noopener" id="MainTitle">
                  @im_muttaqeen
                </a>
                </div>
                <div style={{overflow:'hidden'}}>
                <img src={webdev} alt="Dev." />
                </div>
                </div>
                <div className="Nav-Right" id="Nav_Right">
                <Link rel="noreferrer noopener" to="/">
                  Home
                </Link>
                <Link rel="noreferrer noopener" to="/Projects">
                  Projects
                </Link>
                <Link rel="noreferrer noopener" to="/AboutMe">
                  About
                </Link>
                <Link rel="noreferrer noopener" to="/Contact">
                  Contact
                </Link>
                </div>
            </div>
          </div>   
        </nav>
    
      </header>
    </>
  );
}

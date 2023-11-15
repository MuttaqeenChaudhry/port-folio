import React, { useEffect, useState } from "react";
import "../stylesheets/NavBar.css";
import webdev from "../svgs/web_dev.svg";
import "animate.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

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
      if (window.scrollY > 100) {
        Nav_Wrpr.classList.remove("imgFadeo");
        Nav_Wrpr.classList.add("anim_d_down");
        MainTitle.style.fontSize = '6vmin';
        MainTitle.style.color = '#0f0f0f';
        Nav_Wrpr.style.backgroundColor = '#F5F5F5 ';
        Nav_Wrpr.style.height = '12vmin ';
        Nav_Wrpr.style.borderWidth = '0px 0px 5px 0px';
        Nav_Wrpr.style.borderStyle = 'solid';
        Nav_Wrpr.style.borderColor = '#61dafb';
        Nav_Wrpr.style.position = 'fixed';
      } 
      else if(window.scrollY < 100) {
        Nav_Wrpr.style.position = 'static';
        MainTitle.style.fontSize = '21px';
        MainTitle.style.color = '#61dafb';
        Nav_Wrpr.style.backgroundColor = '#0f0f0f';
        Nav_Wrpr.style.border = 'none';
        Nav_Wrpr.classList.remove("anim_d_down");
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
                <div className="Nav-Left">
                <a className="Main_Title" href="" rel="noreferrer noopener" id="MainTitle">
                  @muttaqeen_231
                </a>
                <img src={webdev} alt="Dev." />
                </div>
                <div className="Nav-Right">
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
                <div className="NavMenu">
                <FontAwesomeIcon icon={faBars} color="#61dafb" onClick={handleMenu}/>
                </div>
            </div>
          </div>
          <div className="PortMenuWrpr" style={{ display: display }}>
              <div className="PortMenu">
              <span>
                <Link rel="noreferrer noopener" to="/" className="c-prim">
                  Home
                </Link>
              </span>
              <span>
              <Link rel="noreferrer noopener" to="/Projects" className="c-prim">
                Projects
              </Link>
              </span>
              <span>
              <Link rel="noreferrer noopener" to="/AboutMe" className="c-prim">
                About
              </Link>
              </span>
              <span>
              <Link rel="noreferrer noopener" to="/Contact" className="c-prim">
                Contact
              </Link>
              </span>
              </div>
            </div>
         
        </nav>
      </header>
    </>
  );
}

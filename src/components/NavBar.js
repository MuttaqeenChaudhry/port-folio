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
    if (display == "none") {
      setDisplay("block");
    } else {
      setDisplay("none");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const Nav_Bar = document.querySelector(".Nav-Wrapper");
      if (window.scrollY > 20) {
        Nav_Bar.classList.add("anim_d_down");
      } else {
        Nav_Bar.classList.remove("anim_d_down");
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
                <a className="Main_Title" href="" rel="noreferrer noopener">
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
          </div>
        </nav>
      </header>
    </>
  );
}

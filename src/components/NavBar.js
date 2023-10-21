import React from "react";
import "../stylesheets/NavBar.css";
import webdev from '../svgs/web_dev.svg'

export default function NavBar() {
  return (
    <>
      <header>
        <nav>
        <div className="Nav-Wrapper">
          <div className="Nav-Bar">
            <div className="Nav-Left">
                <a className="Main_Title" href="" rel="noreferrer noopener">
                  @muttaqeen_231
                </a>
                <img src={webdev} alt="Dev." />
            </div>
            <div className="Nav-Right">
              <a href="" rel="noreferrer noopener">
                Home
              </a>
              <a href="" rel="noreferrer noopener">
                Projects
              </a>
              <a href="" rel="noreferrer noopener">
                About
              </a>
              <a href="" rel="noreferrer noopener">
                Contact
              </a>
            </div>
          </div>
        </div>
        </nav>
      </header>
    </>
  );
}

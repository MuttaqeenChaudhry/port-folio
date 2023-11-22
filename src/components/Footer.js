import React, { useContext } from "react";
import LightContext from "./LightContext";
import "../stylesheets/Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  const ScrollTop = useContext(LightContext)
  return (
    <>
      <footer id="Footer_Wrpr">
        <div className="HTne_Wrpr">
          <div className="HTne" />
        </div>
        <div className="Footer">
          <div>
            <h3>Home</h3>
            <ul>
              <li><Link onClick={ScrollTop} to="/">Main</Link></li>
            </ul>
          </div>
          <div>
            <h3>Projects</h3>
            <ul>
              <li><Link onClick={ScrollTop} to='/Projects'>Read More</Link></li>
            </ul>
          </div>
          <div>
            <h3>About</h3>
            <ul>
              <li><Link onClick={ScrollTop} to='/AboutMe'>Discover</Link></li>
            </ul>
          </div>
          <div>
            <h3>Contact</h3>
            <ul>
              <li><Link onClick={ScrollTop} to='/Contact'>Get in touch</Link></li>
            </ul>
          </div>
        </div>
        <div className="B_Grad" />
      </footer>
    </>
  );
}

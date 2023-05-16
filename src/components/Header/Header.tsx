import { useState, useEffect } from "react";

import "./Header.scss";

import Email from '../../assets/email.svg';
import Linkedin from '../../assets/linkedin.svg';
import Github from '../../assets/github.svg';

const Header = () => {
  const [small, setSmall] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => {
      setSmall(window.pageYOffset > 100);
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header className={`flex-row-center ${small ? "small" : ""}`}>
      <div className="logo-nav-container flex-row-center">
        <img src="/jakub-netflix-logo.png" />
        <nav>
          <ul className="flex-row-center">
            {/* <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li> */}
            <a href="mailto:jakubednarz1@gmail.com">
              <img src={Email} />
            </a>
            <a href="https://www.linkedin.com/in/jakub-bednarz-685068238/" target="_blank">
              <img src={Linkedin} />
            </a>
            <a href="https://github.com/JakubBednarz25" target="_blank">
              <img src={Github} />
            </a>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

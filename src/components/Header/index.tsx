import { useEffect, useState } from "react";
import "./style.css";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleMouseMove = () => {
      setHidden(false);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleLinkClick = () => {
    setHidden(true);
    
  };


  return (
    
       <header className={`${scrolled ? 'scrolled' : ''} ${hidden ? 'hidden' : ''}`}>
      <img src="src\assets\logo.jpg" alt="Logo do evento AnimeConnect" />

      <nav>
        <ul>
          <li>
            <a onClick={handleLinkClick} href="#section-hero">Home</a>
          </li>
          <li>
            <a onClick={handleLinkClick}  href="#section-about">Sobre</a>
          </li>
          <li>
            <a onClick={handleLinkClick}  href="#section-schedule">Cronograma</a>
          </li>
          <li>
            <a onClick={handleLinkClick}  href="#section-tickets">Ingressos</a>
          </li>
          <li>
            <a onClick={handleLinkClick}  href="#section-location">Localização</a>
          </li>
          <li>
            <a onClick={handleLinkClick}  href="#section-form">Newsletter</a>
          </li>
          <li>
            <a onClick={handleLinkClick}  href="#section-contact">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

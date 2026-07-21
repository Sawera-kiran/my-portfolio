import { useEffect, useState } from "react";
import "./Header.css";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      // Navbar background effect
      setScrolled(window.scrollY > 50);

      // 👇 Close menu on scroll (only when scrolling down)
      if (window.scrollY > lastScrollY) {
        setMenuOpen(false);
      }

      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`main_h ${scrolled ? "scrolled" : ""}`}>
      <div className="row">
        <span className="logo">Sawera Kiran</span>

        {/* DESKTOP NAV */}
        <nav className="desktop-nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#works">Works</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        {/* HAMBURGER */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="mobile-menu">
          <ul>
            <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#works" onClick={() => setMenuOpen(false)}>Works</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
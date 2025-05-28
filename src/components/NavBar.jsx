import { useState, useEffect, useRef } from "react";
import { navLinks } from "../constants";

const NavBar = () => {
  // track if the user has scrolled down the page
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // create an event listener for when the user scrolls
    const handleScroll = () => {
      // check if the user has scrolled down at least 10px
      // if so, set the state to true
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    // add the event listener to the window
    window.addEventListener("scroll", handleScroll);

    // cleanup the event listener when the component is unmounted
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);





  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleScroll = () => {
    const section = document.getElementById('contact');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  const handleLinktree = () => {
    window.open('https://linktr.ee/yourusername', '_blank');
    setOpen(false);
  };
  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a href="#hero" className="logo">
          Jayveer Singh
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>


        <div ref={dropdownRef} style={{ position: 'relative', display: 'inline-block' }}>
          <a href="#" className="contact-btn group" onClick={() => setOpen(!open)}>
            <div className="inner">
              <span>Contact me</span>
            </div>
          </a>

          {open && (
            <div
              style={{
                marginTop: '2px',
                position: 'absolute',
                top: '100%',
                left: 0,
                backgroundColor: 'black',
                border: '1px solid #ddd',
                borderRadius: '6px',
                zIndex: 1000,
                minWidth: '130px'
              }}
            >
              <a href="#contact">
                <button onClick={handleScroll} style={{ padding: '10px', cursor: 'pointer', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  Contact Form
                </button>
              </a>

              <a href="https://linktr.ee/jayveersingh1" target="_blank">
                <button onClick={handleLinktree} style={{ padding: '10px', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  Visit Linktree
                </button>
              </a>

           
            </div>
            
          )}
      </div>

    </div>
    </header >
  );
}

export default NavBar;

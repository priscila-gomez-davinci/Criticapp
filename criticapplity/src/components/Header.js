import React, { useRef, useEffect } from 'react';
import '../styles/header.css'


function Header({ title }) {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        menuRef.current.classList.remove('show');
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMenuToggle = () => {
    menuRef.current.classList.toggle('show');
  };

  return (
    <header>
      <h1>{title}</h1>
      <nav ref={menuRef}>
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Acerca de</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
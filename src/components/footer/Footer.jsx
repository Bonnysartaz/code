import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaAngellist } from 'react-icons/fa'
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">Sk Sartaz Ahmed</a>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/meri-gogichashvili/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/Meri-MG" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://angel.co/u/meri-gogichashvili" target="_blank" rel="noreferrer" ><FaAngellist /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; ET 2023. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
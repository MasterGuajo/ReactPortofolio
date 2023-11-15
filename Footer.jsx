import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Jorge</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portofolio'>Portofolio</a></li>
        <li><a href='#extracurriculars'>Extracurriculars</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://github.com' target='_blank'>{BsGithub}</a>
        <a href='https://linkedin.com' target='_blank'>{BsLinkedin}</a>
        <a href='https://instagram.com' target='_blank'>{BsInstagram}</a>
      </div>

    </footer>
  )
}

export default Footer
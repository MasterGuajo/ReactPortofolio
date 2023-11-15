import React from 'react'
import './about.css'
import Jorge from '../../assets/porcupine_about.png'
import {GrPersonalComputer} from 'react-icons/gr'
import {GiGraduateCap} from 'react-icons/gi'
import {GoProjectRoadmap} from 'react-icons/go'

const About = () => {
  return (
    <section id='about'>
      <h5>A Little Bit</h5>
      <h2>About Me</h2>

      <div className="container about__container">

        <div className="about__jorge">
          <div className="about__jorge-image">
            <img src={Jorge} alt='Jorge'/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <GrPersonalComputer className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className='about__card'>
              <GiGraduateCap className='about__icon'/>
              <h5>Education</h5>
              <small>Rising Junior at The University of Texas at El Paso</small>
            </article>

            <article className='about__card'>
              <GoProjectRoadmap className='about__icon'/>
              <h5>Instructing Assistant</h5>
              <small>IA for Intro to CS course at UTEP</small>
            </article>

          </div>

          <p>
            Hey! My name's Jorge Humberto Garcia.
          </p>
          <p>
            I was born in El Paso, Texas and moved back for college after living in Chihuahua, Mexico.
          </p>
          <p>
            I love learning new items and have enjoyed learning about computer vision and machine learning and how we can use this technology for our everyday lives.
          </p>
          <p>
            Currently I work as a Web Developer and Teaching Assistant for the univeristy, while also being part of the Coding Interview Club as an officer.
          </p>

          <a href='#contact' className='btn btn-primary'>Contact Me!</a>

        </div>
      </div>
    </section>
  )
}

export default About
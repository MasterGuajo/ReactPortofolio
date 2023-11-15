import React from 'react'
import './experience.css'
import {AiOutlineCheckCircle} from 'react-icons/ai'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What I've Learned</h5>
      <h2>My Experience</h2>

      <div className="conatiner experience__container">

        <div className="experience__current">
          <h5>Current Job</h5>
          <h3>Undergraduate Teaching Assistant</h3>
          <h5>Teaching CS1301 Introduction to Computer Science</h5>
          <div className="experience__content">

            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>Lab Section</h4>
                <small className='text-light'>Organized and conducted bi-weekly lab section where students reienforce key concepts through project based learning</small>
              </div>
             
            </article>

            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>Worked alongside Googler in Residence</h4>
                <small className='text-light'>Worked alongside facutly and GIR in order to provide interesting and creative lab activities</small>
              </div>
             
            </article>

            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>Review Sessions</h4>
                <small className='text-light'>Held review session for all students before midterms and finals</small>
              </div>
             
            </article>


          </div>
{/* 
          <div className="experience__content">

            <h4>HTML CSS Bootstrap</h4>

            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>

              <small className='text-light'>Worked with faculty for stuff</small>
              
            
            </article>

          </div> */}

        </div>

        <div className="experience__past">
        
          <h5>2022 - 2023</h5>
          <h3>Full Stack Web Developer</h3>
          <h5>Created tools and projects for faculty</h5>
          <div className="experience__content">
            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>Tools used</h4>
                <small className='text-light'>HTML, CSS, React and October CMS</small>
              </div>
              
            </article>
          
          </div>



          <h5>2021</h5>
          <h3>Barista</h3>
          
          <h5>2018-2021</h5>
          <h3>Robotics Mentor</h3>
          <h5>Mentored highschool and middleschool students</h5>
          <div className="experience__content">

            {/* <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <div>
                <h4>Cad</h4>
                <small className='text-light'>Mentored highschool and middleschool students</small>
              </div>
              
            </article> */}
            
          </div>

        </div>
      </div>
    </section>
  )
}

export default Experience
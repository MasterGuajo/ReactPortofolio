import React from 'react'
import './extracurricular.css'
import Person from '../../assets/Porcupine on computer.jpg'


// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    logo: Person,
    title: 'Coding Interview Club - Officer',
    info: 'Help run and manage a club that helps students prepare for future technical interviews through bi-weekly meetings where we go over interview problems'
  },
  {
    logo: Person,
    title: 'DeepLearningAI - Completed',
    info: 'Machine learning using Tensorflow that involved Concurrent and Recurring Neural Networks, Natural Language Processing and '
  },
  {
    logo: Person,
    title: 'Google Thing',
    info: 'Machine learning using google cloud services like Vertex'
  }
]

const Extracurricular = () => {
  return (
    <section id='extracurricular'>
      <h5>Fun Activities / Courses I'm currently doing</h5>
      <h2>Outside of the classroom</h2>

      <Swiper className="container courses__container"
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}

      >

        {
          data.map(({logo,title,info}, index) => {
            return (
              <SwiperSlide key={index} className="course">
                <div className="course__logo">
                  <img src={logo} alt='Some Person' />
                </div>
                <h5 className='course_name'>{title}</h5>
                <small className='course__info'>{info}</small>
              </SwiperSlide>
            )
          })
        }

        
      </Swiper>
    </section>
  )
}

export default Extracurricular
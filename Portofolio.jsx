import React from 'react'
import './portofolio.css'
import Project1 from '../../assets/artimonki.jpg'

const data = [
  {
    id:1,
    image:Project1,
    title: 'Google TechX Wiki Page',
    description: "Google Cloud Storage, Python, Jinja, HTML, CSS",
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id:2,
    image:Project1,
    title: 'Tensorflow',
    description: "Google Cloud Storage, Python, Jinja, HTML, CSS",
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id:3,
    image:Project1,
    title: 'TicketMiner',
    description: "Object-Oriented, Java",
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id:4,
    image:Project1,
    title: 'Hackathon',
    description: "Google Cloud Storage, Python, Jinja, HTML, CSS",
    github: 'https://github.com',
    demo: 'https://github.com'
  },
]

const Portofolio = () => {
  return (
    <section id='portofolio'>
      <h5>Recent Projects I've done!</h5>
      <h2>Projects!</h2>

      <div className="container portofolio__container">

        {
          data.map(({id, image, title, description,github, demo}) => {
            return (
              <article key={id} className='portofolio__item'>
              <div className='portofolio__item-image'>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <h5>{description}</h5>
              <div className="portofolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
              
            </article>
            )
          })
        }


        {/* <article className='portofolio__item'>
          <div className='portofolio__item-image'>
            
          </div>
          <h3>Google Tech X Project</h3>
          <div className="portofolio__item-cta">
            <a href='https:.//github.com' className='btn' target='_blank'>Github</a>
            <a href='https:.//github.com' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
          
        </article> */}
      </div>

    </section>
  )
}

export default Portofolio
import React from 'react'
import style from './styles/work.module.css'
import { SectionWrapper } from '../hoc'
import { projects } from './constants'

const Work = () => {
  return (
    <div>
      <h1 className={style.title}>My Recent Works</h1>
      <div className={style.project_container}>
        {projects.map((project) => (
          <div className={style.card}>
            <img className={style.img} src={project.img} alt="project sample" />
            <div className={style.card_overlay}>
              <div className={style.card_text}>
              <div className={style.text}>
                <p>{project.name}</p>
                <p>
                  <span>{project.tech[0]}</span>
                  <span>{project.tech[1]}</span>
                  <span>{project.tech[2]}</span>
                </p>
              </div>
              <button className={style.btn}>Learn More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Work, "work");
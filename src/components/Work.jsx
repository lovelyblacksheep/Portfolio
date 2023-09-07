import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import style from './styles/work.module.css';
import SectionWrapper from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import Popup from './Popup';

const Work = () => {
  const [isOpen, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handlePopupClick = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handlePopupClose = () => {
    setSelectedProject(null);
    setOpen(false);
  };

  return (
    <div className="relative">
      <motion.h1 variants={textVariant()} className={style.title}>
        My Recent Works
      </motion.h1>
      <div className={style.project_container}>
        {/* Projects Card */}
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            variants={fadeIn('up', '', index * 0.4, 0.5)}
            index={index}
            className={style.card}
          >
            {
              project.id !== '10' ?
                <img className={style.img} src={project.img} alt="project sample" loading="lazy" />
                :
                <img className={style.img-10} src={project.img} alt="project sample" loading="lazy" />
            }
            <div className={style.card_overlay}>
              <div className={style.card_text}>
                <div className={style.text}>
                  <h2 className={style.name}>{project.name}</h2>
                  <p className={style.tech}>
                    {project.tech.map((i) => (
                      <span key={i} className={style.tech_list}>{`#${i}`}</span>
                    ))}
                  </p>
                </div>
                <a href={project.live_link} target="_blank" className={`${style.live_link} ${style.btn_container}`} rel="noreferrer">
                  <span className={style.btn_hover}>View Live</span>
                  <span className={style.btn}>View Live</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      {/* Popup Window */}
      <AnimatePresence>
        {isOpen && (
          <Popup handleClose={handlePopupClose} project={selectedProject} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default SectionWrapper(Work, 'work', 'my-8');

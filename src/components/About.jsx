import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../hoc';
import style from './styles/about.module.css';
import { textVariant, slideIn } from '../utils/motion';
import mypicture from '../assets/mypicture.jpg';

const About = () => (
  <>
    <motion.h1 variants={textVariant()} className={style.title}>
      About Me
    </motion.h1>
    <div className={style.content}>
      <motion.div variants={slideIn('left', '', 0, 1)} className={style.para}>
        <p className={style.text}>
          My name is
          {' '}
          <a
            href="https://www.linkedin.com/in/kaungmyatkyaw/"
            target="_blank"
            className={style.link}
            rel="noreferrer"
          >
            James Carter
          </a>
          {' '}
          I am a web developer with [Number of years] years of experience in the industry.
        </p>
        <p className={style.text}>
        I have a strong passion for creating beautiful and functional websites and web applications. I specialize in both front-end and back-end development, with expertise in programming languages such as HTML, CSS, JavaScript, PHP, and SQL.

        </p>
        <p className={style.text}>
        Throughout my career, I have had the opportunity to work on a variety of projects for clients in various industries, including e-commerce, healthcare, and education. I take pride in my ability to understand my clients' needs and create custom solutions that meet their specific requirements.

        </p>

        <p className={style.text}>
        In addition to my technical skills, I am a creative problem-solver and a team player. I enjoy collaborating with designers, project managers, and other developers to bring projects to life.

        </p>

        <p className={style.text}>
        When I'm not coding, you can find me exploring new technologies and attending tech meetups and conferences. I am constantly learning and growing as a developer, and I look forward to bringing my skills and passion to your next project.

        </p>
      </motion.div>
      <motion.div
        variants={slideIn('right', '', 0, 1)}
        className={style.img_container}
      >
        <div className={style.overlay} />
        <img className={style.img} src={mypicture} alt="Kaung Myat Kyaw" loading="lazy" />
      </motion.div>
    </div>
  </>
);

export default SectionWrapper(About, 'about', '');

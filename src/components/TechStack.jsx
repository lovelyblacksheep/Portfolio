import React, { useState } from 'react';
import Lottie from 'lottie-react';
import DevSkillsAnimation from '../assets/lottie/developer-yoga.json';
import { motion } from 'framer-motion';
import SectionWrapper from '../hoc';
import { technologies } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import style from './styles/techstack.module.css';
import { skills } from '../constants/skills';

// const TechStack = () => {
//   const [stack, setStack] = useState('all');

//   const handlePageChange = (stack) => {
//     setStack(stack);
//   };

//   const stacks = ['all', 'languages', 'frameworks', 'tools'];

//   return (
//     <>
//       <motion.p variants={fadeIn('', '', 0.5, 1)} className={style.title}>Here are a few technologies I`ve been working with recently:</motion.p>
//       <motion.div variants={textVariant()} className={style.btn_container}>
//         {stacks.map((currentStack) => (
//           <button
//             key={currentStack.name}
//             type="button"
//             className={currentStack === stack ? style.btn_active : style.btn}
//             onClick={() => handlePageChange(currentStack)}
//           >
//             {currentStack}
//           </button>
//         ))}
//       </motion.div>
//       <div className={style.tech_container}>
//         {technologies.filter((technology) => technology.stack.includes(stack)).map((tech, index) => (
//           <motion.abbr
//             initial="hidden"
//             whileInView="show"
//             variants={fadeIn('up', '', index * 0.15, 0.5)}
//             title={tech.name}
//             key={tech.name}
//             className={style.tech}
//           >
//             <img className={style.tech_img} src={tech.icon} alt={tech.name} loading="lazy" />
//           </motion.abbr>
//         ))}
//       </div>
//     </>
//   );
// };

// export default SectionWrapper(TechStack, '', '');

function Skills() {
  return (
    <div className="w-full ml-auto mr-auto flex flex-col items-center opening-box-animate-paddin text-white overflow-hidden md:overflow-visible p-5 w-full flex-1 text-center" style={{maxWidth: '1200px'}}>
      <div className="mt-20 space-y-32">

        <div className="flex flex-col md:flex-row justify-between relative">
          {/* <h2 className="relative text-3xl w-full text-center md:text-left font-bold md:max-w-lg mb-10 md:mr-10 md:mb-0 md:w-max mr-0 ">
            I got the experience.
            <br />
            Here is my toolbelt for success.
            <img
              className="absolute bottom-[-90px] left-[-50px] lg:bottom-[-0px] lg:left-[-35px] z-[-10]"
              src="/static/doodles/skills/laptop.svg"
            />

            <img
              className="absolute hidden md:block top-[140px] right-0 lg:top-[210px]"
              src="/static/doodles/skills/coding.svg"
            />

            <img
              className="absoulte hidden md:block top-[200px] right-[50px] lg:top-[170px] lg:right-[0px]"
              src="/static/doodles/skills/youtube.svg"
            />

            <img
              className="absolute top-[-15px] right-[-15px]"
              src="/static/doodles/skills/fillStar.svg"
            />

          </h2> */}
          <div className='mr-10 hidden lg:block'>
            <Lottie
              animationData={DevSkillsAnimation}
              className='max-w-sm'
            />
          </div>

          <div className="gap-x-8 gap-y-12 grid grid-cols-3 items-center max-w-lg md:gap-12 md:mx-none place-content-center relative sm:gap-8 sm:grid-cols-6" style={{marginLeft: '68px', marginRight: '68px'}}>
            {skills.map((item, index) => {
              return (
                <div
                  title={item.title}
                  key={index}
                  className="w-10 mx-auto flex items-center flex-col justify-center"
                >
                  <img src={item.icon} style={item.style} />
                  <p className="text-xs text-fun-gray font-bold mt-3 opacity-80">
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
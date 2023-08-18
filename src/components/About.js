import React from 'react';

import { useInView } from 'react-intersection-observer';

import { motion } from 'framer-motion';
import {Link} from 'react-scroll'

import { fadeIn } from '../variants';
const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return <section className='section' id='about' ref={ref}>
      <div className='container mx-auto h-screen'>

        <div className='flex items-center justify-center gap-28 '>
          {/*img*/}
          <motion.div 
            variants={fadeIn('right',0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false, amount: 0.3}}
            className=' bg-about bg-no-repeat rounded-full h-[500px] w-[500px]
          mix-blend-lighten bg-top p-'></motion.div>
          {/*text*/}
          <motion.div
            variants={fadeIn('left',0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false, amount: 0.3}}
            >
            <h2 className='h2 text-accent'>About me.</h2>
            <h3 className='h3 mb-4 '>
              I am a new grad software engineer.
            </h3>
            <p className='max-w-md mb-1'>
              A Sacramento native with a love for software engineering, 
              I've led sections in Stanford's Code in Place and participated 
              in both the Google Computer Science Summer Institute and the Google 
              Software Product Sprint. Now on the lookout for software engineering 
              roles to contribute my skills and drive for innovation.
            </p>
            {/*Stats*/}
          </motion.div>
        </div>
        <div className='flex gap-x-8 items-center justify-center'>
          <Link to='contact' activeClass='active'
            smooth={true}
            spy={true}
            offset={-200}><button className='btn btn-lg' >Contact me</button></Link>
          <Link to='work'  activeClass='active'
            smooth={true}
            spy={true}
            offset={-200}> <a href='#' className='text-gradient btn-link'>My Portfolio</a></Link>
        </div>
      </div>
    </section>;
};

export default About;

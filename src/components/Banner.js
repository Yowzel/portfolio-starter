import React from 'react';

import Image from '../assets/pic.jpg'

import {FaGithub} from 'react-icons/fa'

import {Link} from 'react-scroll'

import {TypeAnimation} from 'react-type-animation'

import {motion} from 'framer-motion'

import {fadeIn} from '../variants'

const Banner = () => {
  return <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
        {/*Text*/}
        <div className='flex-1 text-center font-secondary lg:text-left'>
          <motion.h1 
          variants={fadeIn('up', 0.3)} 
          initial="hidden" 
          whileInView={'show'} 
          viewport={{once: false, amount:0.7}} 
          className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
            GIA-HUY <span>GONZALEZ</span>
          </motion.h1>
          <motion.div 
            variants={fadeIn('up', 0.4)} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{once: false, amount:0.7}} 
            className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
            <span className='text-white mr-4'>I am a</span>
            <TypeAnimation sequence={[
              'Software Developer', 
              2000,
              'Machine Learning Engineer', 
              2000,
              'Data Analyst', 
              2000,
              ]}
              speed={50}
              className='text-accent '
              wrapper='span'
              repeat={Infinity}
            />
          </motion.div>
          <motion.p 
            variants={fadeIn('up', 0.5)} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{once: false, amount:0.7}} 
            className='mb-8 max-w-lg mx-auto lg:mx-0'>
          I'm Gia-Huy, a Sacramento-based software engineer with a Computer Science
           degree from Sacramento State. I'm open to both remote work and relocation.
          </motion.p>
          <motion.div 
            variants={fadeIn('up', 0.6)} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{once: false, amount:0.7}} 
            className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0 '>
            <Link to='contact' activeClass='active'
            smooth={true}
            spy={true}
            offset={-200}><button className='btn btn-lg' >Contact me</button></Link>
          <Link to='work'  activeClass='active'
            smooth={true}
            spy={true}
            offset={-200}> <a href='#' className='text-gradient btn-link'>My Portfolio</a></Link>
          </motion.div>
          <motion.div 
            variants={fadeIn('up', 0.7)} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{once: false, amount:0.7}} 
            className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
            <a href='https://github.com/Yowzel'>
              <FaGithub/>
            </a>
          </motion.div>
        </div>
        {/*Image*/}
        <motion.div 
          variants={fadeIn('down', 0.5)} 
          initial="hidden" 
          whileInView={'show'} 
          className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
          <img src={Image} alt='' className='rounded-full w-96'/>
        </motion.div>
      </div>
    </div>
  </section>;
};

export default Banner;

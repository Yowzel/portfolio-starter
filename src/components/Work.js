import React from 'react';

import {motion} from 'framer-motion'

import {fadeIn} from '../variants'

import Img1 from '../assets/portfolio-img1.png'
import Img2 from '../assets/portfolio-img2.png'
import Img3 from '../assets/portfolio-img3.png'

const Work = () => {
  return <section className='section' id='work'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <motion.div 
          variants={fadeIn('right',0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false, amount: 0.3}}
          className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
          {/*text*/}
          <div >
            <h2 className='h2 leading-tight text-accent'>My Latest <br/>
            Work.
            </h2>
            <p className='max-w-sm mb-16'>
              Some of my latest work, creating an Ai summary website,
              developing my own small business website, 
              and cross platform mobile app for CalTrans
            </p>
            <button className='btn btn-sm'>View All Projects</button>
          </div>
          {/*image*/}
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/*overlays*/}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all
            duration-300'></div>
            {/*img*/}
            <img 
              src={Img1} 
              alt='' 
              className='group-hover:scale-125 transition-all duration-500'/>
            {/*pretitle*/}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all 
            duration-500 z-50'>
              <span className='text-gradient'>
                NextJS Project
              </span>
              
            </div>
            {/*title*/}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all 
              duration-700 z-50'>
              <span className='text-3xl text-white'>Ai Summary</span>
            </div>
          </div>
        </motion.div>
        <motion.div 
          variants={fadeIn('left',0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false, amount: 0.3}}
          className='flex-1 flex flex-col gap-y-10'>
          {/*Image */}
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/*overlays*/}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all
            duration-300'></div>
            {/*img*/}
            <img 
              src={Img2} 
              alt='' 
              className='group-hover:scale-125 transition-all duration-500'/>
            {/*pretitle*/}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all 
            duration-500 z-50'>
              <span className='text-gradient'>
                NextJS Project
              </span>
              
            </div>
            {/*title*/}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all 
              duration-700 z-50'>
              <span className='text-3xl text-white'>Ai Summary</span>
            </div>
          </div>
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/*overlays*/}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all
            duration-300'></div>
            {/*img*/}
            <img 
              src={Img3} 
              alt='' 
              className='group-hover:scale-125 transition-all duration-500'/>
            {/*pretitle*/}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all 
            duration-500 z-50'>
              <span className='text-gradient'>
                NextJS Project
              </span>
              
            </div>
            {/*title*/}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all 
              duration-700 z-50'>
              <span className='text-3xl text-white'>Ai Summary</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>;
};

export default Work;

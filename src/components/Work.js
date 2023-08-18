import React from 'react';

import {motion} from 'framer-motion'

import {fadeIn} from '../variants'

import Img1 from '../assets/prompter.PNG'
import Img2 from '../assets/ML.PNG'
import Img3 from '../assets/dashboard.PNG'

const Work = () => {

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

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
              Machine Learning Projects,
              Data Analyst Tableau Projects.
            </p>
            <button className='btn btn-sm' onClick={() => openInNewTab('https://github.com/Yowzel')}>View All Projects</button>
          </div>
          {/*image*/}
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'
            onClick={() => openInNewTab('https://prompter-qq92txzl5-yowzel.vercel.app/')}
          >
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
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'
             onClick={() => openInNewTab('https://github.com/Yowzel/ML_Projects/tree/main')}
          >
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
                Machine Learning Projects
              </span>
              
            </div>
            {/*title*/}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all 
              duration-700 z-50'>
              <span className='text-3xl text-white'>Cal Housing Prediction</span>
            </div>
          </div>
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'
            onClick={() => openInNewTab('https://public.tableau.com/app/profile/gia.huy.gonzalez')}

          >
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
                Data Analyst Projects
              </span>
              
            </div>
            {/*title*/}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all 
              duration-700 z-50'>
              <span className='text-3xl text-white'>Tableau Dashboards</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>;
};

export default Work;

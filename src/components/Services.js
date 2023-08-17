import React from 'react';

import {BsArrowUpRight} from 'react-icons/bs';

import {motion} from 'framer-motion'

import {fadeIn} from '../variants'

const services =[
  {
    name:'Section Leader @ Stanford Code in Place',
    description: 'At Stanfords Code in Place, I led coding sections, fostering collaboration and innovation while guiding peers through challenges. This experience showcased the collective achievements of our coding journeys, enhancing both my understanding and theirs.'
  },
  {
    name:'Student @ Google Software Product Sprint',
    description: 'Selected for Googles Software Product Sprint, I collaborated with talented peers on real-world projects, gaining hands-on experience and mentorship from Google engineers. This enriched my skills and understanding of dynamic tech-driven product development.'
  },
  {
    name:'Student @ Google Computer Science Summer Institute',
    description: 'Proud participant in Googles Computer Science Summer Institute, honing my coding skills and gaining invaluable insights into the tech industry from Googles top-notch professionals.'
  },
]

const Services = () => {
  return <section className='section' id='services'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        {/*text*/}
        <motion.div 
          variants={fadeIn('right',0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false, amount: 0.3}}
          className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mb-12 mix-blend-lighten lg:mb-0'>
        <h2 className='h2 text-accent mb-6'>
          What I've done
        </h2>
        <h3 className='h3 max-w-[455px] mb-16'>I'm a new grad software engineer</h3>
      
        </motion.div>
        {/*experiences*/}
        <motion.div 
          variants={fadeIn('left',0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false, amount: 0.3}}
          className='flex-1'>
          {/*experiences list */}
          <div>
            {services.map((service,index)=>{
              const {name, description} = service;
              return (
                <div className='border-b border-white/20 h-[210px] mb-[38px] flex' key={index}>
                  <div className='max-w-[476px]'>
                    <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                    <p className='font-secondary leading-tight'>{description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>
  </section>;
};

export default Services;

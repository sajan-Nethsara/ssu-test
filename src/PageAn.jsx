import React from 'react'
import { motion } from 'framer-motion'

const PageAn = ({children }) => {
  return (
    <div className='overflow-hidden '>
    <motion.div
    className=''
    variants={{
      hidden:{opacity:0 , x:window.innerWidth},
      visible:{opacity:1 , x:0},
      exit:{opacity:0 , x:-window.innerWidth}
    }}
    initial='hidden'
      animate='visible'
      transition={{duration:0.2 , ease:'easeInOut'}}
    >
      {children}
    </motion.div>
    </div>
  )
}

export default PageAn
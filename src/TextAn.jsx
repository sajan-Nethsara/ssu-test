import React,{useEffect,useRef} from 'react'
import { motion , useAnimation , useInView } from 'framer-motion'

const TextAn = ({children , bgColor}) => {
  let slideColor = 'bg-[#f7ba2b]'
  if(bgColor == 'red'){
    slideColor = 'bg-[#ed1c24]'
  }
  const ref = useRef(null)
  const isInView = useInView(ref,{once:false})
  const mainControls = useAnimation()
  const slideControls = useAnimation()
  useEffect(()=>{
    if(isInView){
      mainControls.start('visible')
      slideControls.start('visible')
    }
  },[isInView])

  return (
    <div ref={ref} className='w-fit relative overflow-hidden'>
      <motion.div
      variants={{
        hidden:{opacity:0,y:20},
        visible:{opacity:1,y:0}
      }}
      initial='hidden'
      animate={mainControls}
      transition={{duration:0.5,delay:0.1}}
      >
        {children}
      </motion.div>
      {/* <motion.div
        variants={{
          hidden:{left:0},
          visible:{left:'100%'}
        }}
        initial='hidden'
        animate={slideControls}
        transition={{duration:0.3 , ease:'easeIn'}}
        className={`absolute top-[4px] bottom-[4px] left-0 right-0 z-20  ${slideColor} rounded`}
      /> */}
    </div>
  )
}

export default TextAn
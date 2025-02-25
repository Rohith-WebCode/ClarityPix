import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { sample } from '../assets/assets'
import { delay, motion } from "motion/react"
import { AppContext } from '../context/AppContext'

const Header = () => {
  const {user,setShowLogin} = useContext(AppContext)
  const navigate = useNavigate()
  const onClickHandler = ()=>{
    if(user){
      navigate('/result')
    }else{
      setShowLogin(true)
    }
  }
  return (
    <motion.div className='flex flex-col justify-center items-center text-center my-20'  initial={{opacity:0.2,y:100}} transition={{duration:1}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
        <motion.div className='text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500'  initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} transition={{delay:0.2,duration:0.8}}>
            <p>Your Words, Our Vision</p>
            <img src={assets.star_icon} alt="" />
        </motion.div>
        <motion.h1 className='text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto my-10 text-center' initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.4,duration:2}} >Turn text to <span className='text-blue-600'>image</span>, in seconds.</motion.h1>
        <motion.p className='text-center max-w-xl mx-auto mt-5' initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.6,duration:0.8}}>Unlock the power of creativity by turning your words into striking, high-resolution images, all with the speed and simplicity you need.</motion.p>

        <motion.button onClick={onClickHandler} className='sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full'
          
          whileHover={{scale:1.05}} whileTap={{scale:0.95}} initial={{opacity:0}} animate={{opacity:1}} transition={{default:{duration:0.5},opacity:{delay:0.8,duration:1}}}
          >
            Generate Images
            <img src={assets.star_group} className='h-6'/>
        </motion.button>
        {/* <div className='flex flex-wrap justify-center mt-16 gap-3'> */}
              {sample.map((item, index)=>(
                <div key={index} className='flex flex-wrap justify-center mt-16 gap-3'>
                  {item.sampleImage.map((img,imgIndex)=>(
                    <motion.img  whileHover={{scale:1.05,duration:0.1}} className='rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10' src={img.src} key={imgIndex} alt=''  width={70}/>
                  ))
                  }
              
                </div>
              ))}
        {/* </div> */}
        <motion.p className='mt-2 text-neutral-600' initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.2,duration:0.8}} >Generated images from claritypix</motion.p>
    </motion.div>
  )
}

export default Header
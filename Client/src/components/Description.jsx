import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"

const Description = () => {
  return (
    <motion.div  initial={{opacity:0.2,y:100}} transition={{duration:1}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
        <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Bringing Your Text to Life.</h1>
        <p className='text-gray-500 mb-8'>Turn Your Thoughts into Masterpieces with AI</p>

        <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
            <img src={assets.sample_img_1} alt='' className='w-80 xl:w-96 rounded-lg'/>
            <div>
                <h2 className='text-3xl font-medium max-w-lg mb-4'>Introducing Your AI Design Partner</h2>
                <p className='text-gray-600 mb-4'>ClarityPix is an AI-powered platform that transforms text into stunning visuals in seconds. With a user-friendly interface and lightning-fast processing, 
                    it’s perfect for anyone looking to create custom, high-quality images effortlessly. Turn your ideas into reality with ClarityPix—where words come to life!</p>
                    <p className='text-gray-600'>Simply describe your idea, then let advanced AI generate high-quality images instantly. Perfect for any project, it’s an easy, fast solution for creating stunning visuals.</p>
            </div>
        </div>
    </motion.div>
  )
}

export default Description
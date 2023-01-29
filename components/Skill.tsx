import React from 'react'
import { motion } from "framer-motion";

type Props = {}

function Skill({}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img src='https://pbs.twimg.com/profile_images/1235868806079057921/fTL08u_H_400x400.png'
            className='rounded-full border border-gray-500 object cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'/>
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 xl:w-32 xl:h-32 rounded-full z-0 text-center'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-md font-bold text-black opacity-100'>Springboot 100%</p>
            </div>
        </div>
    </div>
  )
}

export default Skill
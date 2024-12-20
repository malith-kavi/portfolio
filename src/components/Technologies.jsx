import React from 'react';
import { RiPhpFill, RiReactjsLine, RiTailwindCssFill } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiMongodb, SiMysql } from 'react-icons/si';
import { DiNodejs, DiRedis } from 'react-icons/di';
import { BiLogoPostgresql } from 'react-icons/bi';
import { FaJava, FaNodeJs, FaPython, FaReact, FaSwift } from 'react-icons/fa';
import { FcAndroidOs } from 'react-icons/fc';
import { SiFlutter } from 'react-icons/si';
import { FaDartLang } from 'react-icons/fa6';
import { PiFigmaLogoDuotone } from 'react-icons/pi';
import { RiFirebaseFill } from 'react-icons/ri';
import { FaJsSquare } from 'react-icons/fa';
import { delay, motion } from "framer-motion"; 

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition:{
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

export const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h1 
        whileInView={{opacity: 1, y: 0 }}
        initial={{ opacity:0, y: -100 }}
        transition={{duration: 1.5}}
        className='my-20 text-center text-4xl'>Technologies</motion.h1>
        <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{duration: 1.5 }} 
        className='flex flex-wrap items-center justify-center gap-4'>

            <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate" 
            className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FcAndroidOs className='text-7xl'/>
            </motion.div>

            <motion.div 
            variants={iconVariants(5)}
            initial="initial"
            animate="animate" 
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaDartLang className='text-7xl text-cyan-600'/>
            </motion.div>

            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate" 
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <PiFigmaLogoDuotone className='text-7xl text-purple-400'/>
            </motion.div>

            <motion.div 
            variants={iconVariants(1.5)}
            initial="initial"
            animate="animate" 
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiFirebaseFill className='text-7xl text-orange-400'/>
            </motion.div>

            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate" 
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiFlutter className='text-7xl text-sky-400'/>
            </motion.div>

            <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"  
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaJava className='text-7xl text-sky-500'/>
            </motion.div>

            <motion.div 
            variants={iconVariants(6)}
            initial="initial"
            animate="animate" 
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaJsSquare className='text-7xl text-yellow-300'/>
            </motion.div>

            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate" 
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiMongodb className='text-7xl text-green-500'/>
            </motion.div>

            <motion.div 
            variants={iconVariants(4)}
            initial="initial"
            animate="animate" 
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiMysql className='text-7xl text-blue-700'/>
            </motion.div>

            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate" 
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <DiNodejs className='text-7xl text-green-400'/>
            </motion.div>


            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate" 
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiPhpFill className='text-7xl text-sky-800'/>
            </motion.div>

            <motion.div 
            variants={iconVariants(6)}
            initial="initial"
            animate="animate" 
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaPython className='text-7xl text-blue-400'/>
            </motion.div>

            <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"  
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <BiLogoPostgresql className='text-7xl text-sky-600'/>
            </motion.div>

            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate" 
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaReact className='text-7xl text-cyan-400'/>
            </motion.div>

            <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"  
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaSwift className='text-7xl text-orange-400'/>
            </motion.div>
            <motion.div
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"  
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiTailwindCssFill className='text-7xl text-cyan-500'/>
            </motion.div>

        </motion.div>
    </div>
  )
}
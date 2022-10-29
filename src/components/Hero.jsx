import React from 'react'
import { motion } from 'framer-motion';
import CountUp, {useCountUp} from 'react-countup';
import {discount, robot} from '../assets'
import GetStarted from './GetStarted';
 
const Hero = () => {
  return (
    <motion.main className='mb-[100px]'
      whileInView={{y: [100, 0], opacity: [.2, 1]}}
    >
        <div className='ss:ml-[70px] ss:mr-0 mx-5 mb-0 ss:mb-[100px] ss:flex text-white'>
            <div className='mt-[100px] '>
                <div className='flex bg-discount-gradient items-center p-3 rounded mb-2 w-[335px] h-[27px]'>
                    <img src={discount} alt='discount' className='w-[32px] h-[32px]' />
                    <p className='text-white text-poppins'>20% <span>Discount For</span> 1 Month <span>Account</span></p>
                </div>
                <div className='relative'>
                  <h1 className='ss:text-[72px] text-[52px] font-poppins font-semibold'>
                    The Next <br/>
                    <span className="text-gradient">Generation</span> <br/> 
                    Payment Method
                  </h1>
                  <div className='hidden ss:inline ss:absolute top-[50px] right-[110px] '><GetStarted /></div>
                </div>
                <p className='text-[18px] w-full ss:w-[67%] mb-[100px] ss:mb-0 font-poppins'>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
We examine annual percentage rates, annual fees.</p>
            </div>
            <img src={robot} alt='robot' className='ss:w-[40%]'/>
        </div>
        <motion.div className='ss:flex ss:mx-[70px] mb-[50px]  ss:mb-[100px] justify-between ml-10'
        >
          <motion.div className='flex items-center '
            whileHover={{scale: 1.1}}
          >
            <span className='text-[40px] text-white'><CountUp className='' enableScrollSpy end={3800} duration={2}/>+</span>
            <p className='text-gradient ml-5 text-[20px]'>USERS ACTIVE</p>
          </motion.div>
          <motion.div className='flex items-center '
            whileHover={{scale: 1.1}}
          >
            <span className='text-[40px] text-white'><CountUp className='' enableScrollSpy end={230} duration={2}/>+</span>
            <p className='text-gradient ml-5 text-[20px]'>TRUSTED BY COMPANY</p>
          </motion.div>
          <motion.div className='flex items-center '
            whileHover={{scale: 1.1}}
          >
            <span className='text-[40px] text-white'>$<CountUp className='' enableScrollSpy end={230} duration={2}/>M+</span>
            <p className='text-gradient ml-5 text-[20px]'>TRANSACTIONS</p>
          </motion.div>
        </motion.div>
        <motion.div className='justify-center flex items-center ss:hidden'
          initial={{ opacity: 0.6, scale:.2 }}
          whileInView={{ opacity: 1, scale:1 }}
          transition={{duration:.5, type:'spring'}}
        ><GetStarted  /></motion.div>
    </motion.main>
  )
}

export default Hero
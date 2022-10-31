import React from 'react'
import Button from './Button'
import { features } from '../constants'
import FeatureCard from './FeatureCard'

const Business = () => {
  return (
    <div className='text-white md:flex justify-between'>
        <div className='mb-[40px]'>
            <h1 className='font-semibold text-5xl font-poppins'>You do the business, <br/>we’ll handle the money.</h1>
            <p className='sm:w-[60%] font-poppins pt-[20px] pb-[40px] text-base font-light'>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
            <Button />
        </div>
        <div className=''>
            {features.map((feature, index)=> (
                <FeatureCard key={index} {...feature} />
            ))}
        </div>
    </div>
  )
}

export default Business
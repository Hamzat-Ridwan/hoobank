import React from 'react'

const FeatureCard = ({icon, title, content}) => {
  return (
    <div className='flex items-center font-poppins mb-6 hover:bg-[#14101D] rounded-[20px] p-[20px]'>
        <div className='min-w-[64px] h-[64px] rounded-full flex items-center justify-center bg-dimBlue'>
            <img src={icon} alt='icon' className="w-[50%] h-[50%] object-contain" />
        </div>
        <div className='ml-[10px]'>
            <h1 className='font-semibold'>{title}</h1>
            <p className='text-base font-light'>{content}</p>
        </div>
    </div>
  )
}

export default FeatureCard
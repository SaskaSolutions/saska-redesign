import React from 'react'

const Card = ({icon, children}) => {
  return (
    <div className='w-[260px] h-[350px] relative flex items-center justify-center rounded-br-[75px] bg-dark text-white shadow-lg'>
        <div className='absolute top-[calc(0%-33px)] left-[calc(0%+20px)] size-[66px] rounded-[6px] bg-primary-light flex items-center justify-center'>
            <img src={icon} alt="" className='w-[42px] h-[42px] invert' />
        </div>
        <div className='px-[20px]'>
            {children}
        </div>
    </div>
  )
}

export default Card
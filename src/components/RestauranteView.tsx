import React from 'react'
import Image from 'next/image';
import watch from "@/assets/common/Watch.svg"
import pin from "@/assets/common/Pin.svg"

interface RestView {
    name: string;
    distance: string;
    time: string;
}

const RestauranteView = ({name, distance, time} : RestView) => {
  return (
    <div className='text-black flex text-xs flex-col'>
        <span className=' font-bold'>
            {name}
        </span>
        <div className='w-full flex gap-4'>
            <div className='flex gap-2 items-center'>
                <Image alt="PinIcon" src={pin} width={15} height={15}/>
                <span>{distance}</span>
            </div>
            <div className='flex gap-2 items-center'>
                <Image alt="watchIcon" src={watch} width={15} height={15}/>
                <span>{time}</span>
            </div>
        </div>
    </div>
  )
}

export default RestauranteView
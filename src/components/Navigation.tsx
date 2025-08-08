import React from 'react'
import ArrowLeft from '@/assets/common/LeftArrow.svg'
import ArrowRight from '@/assets/common/RightArrow.svg'
import Image from 'next/image'

const RightArrow = () => {
    return (
        <div>
            <Image alt="ArrowRight" src={ArrowRight} width={40} height={40}/>
        </div>
    )
}

const LeftArrow = () => {
    return (
        <div>
            <Image alt="ArrowLeft" src={ArrowLeft} width={40} height={40}/>
        </div>
    )
}

export { RightArrow, LeftArrow }

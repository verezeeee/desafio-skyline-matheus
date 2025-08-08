import React from 'react'
import Image from 'next/image'
import close from "@/assets/common/Close.svg"

const CloseButton = () => {
  return (
    <div>
        <Image alt="CloseIcon" src={close} width={40} height={40}/>
    </div>
  )
}

export default CloseButton
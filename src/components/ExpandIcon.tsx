import React from 'react'
import Image from 'next/image'
import expand from "@/assets/common/Expand.svg"

const ExpandIcon = () => {
  return (
    <div>
        <Image alt="ExpandIcon" src={expand} width={35} height={35}/>
    </div>
  )
}

export default ExpandIcon
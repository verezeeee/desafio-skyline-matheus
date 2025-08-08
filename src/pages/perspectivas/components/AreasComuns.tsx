import React from 'react'
import images from '@/utils/imgsAreasComuns'
import Gallery from '@/components/Gallery'

const AreasComuns = () => {
    return (
        <div className="w-full flex flex-col items-center">
            <Gallery 
                images={images} 
                titleDefault="IMAGENS DAS ÁREAS COMUNS" 
                maxWidth="max-w-[1200px]" 
                gridCols="md:grid-cols-5" 
                aspectRatio="aspect-[5/3]" 
                expandedAspectRatio="aspect-[16/8]" />
        </div>

    )
}

export default AreasComuns
import React from 'react'
import images from '@/utils/imgsApartamentos'
import Gallery from '@/components/Gallery'

const Apartamentos = () => {
    return (
        <div className="w-full flex flex-col items-center">
            <Gallery 
                images={images} 
                titleDefault="IMAGENS DAS APARTAMENTOS" 
                maxWidth="max-w-[1200px]" 
                gridCols="md:grid-cols-3" 
                aspectRatio="aspect-[5/3]" 
                expandedAspectRatio="aspect-[16/8]" />
        </div>
    )
}

export default Apartamentos
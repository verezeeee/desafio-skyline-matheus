import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import ExpandIcon from '@/components/ExpandIcon'
import { LeftArrow, RightArrow } from '@/components/Navigation'
import CloseButton from '@/components/CloseButton'
import formatText from '@/utils/formatText'

interface GalleryImage {
  src: any;
  label: string;
}

interface GalleryProps {
  images: GalleryImage[];
  titleDefault: string | React.ReactNode;
  maxWidth?: string;
  gridCols?: string;
  aspectRatio?: string;
  expandedAspectRatio?: string;
}

const Gallery: React.FC<GalleryProps> = ({
  images,
  titleDefault,
  maxWidth = 'max-w-[1200px]',
  gridCols = 'md:grid-cols-3',
  aspectRatio = 'aspect-[5/3]',
  expandedAspectRatio = 'aspect-[16/8]',
}) => {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null)

  useEffect(() => {
    if (expandedIdx === null) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setExpandedIdx(null)
      if (e.key === 'ArrowLeft') setExpandedIdx(idx => (idx !== null && idx > 0 ? idx - 1 : idx))
      if (e.key === 'ArrowRight') setExpandedIdx(idx => (idx !== null && idx < images.length - 1 ? idx + 1 : idx))
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [expandedIdx, images.length])

  return (
    <div className="w-full flex flex-col items-center">
      <h2 className={`text-2xl text-black md:text-3xl tracking-wider font-light mt-8 mb-8 w-[90%] ${maxWidth} text-left`}>
        {expandedIdx !== null ? formatText(images[expandedIdx].label) : titleDefault}
      </h2>
      {expandedIdx !== null ? (
        <div className={`relative w-[90%] ${maxWidth} mx-auto`}>
          <button
            className="absolute top-4 left-4 z-20"
            onClick={() => setExpandedIdx(null)}
            aria-label="Fechar"
          >
            <CloseButton />
          </button>
          <div className={`w-full ${expandedAspectRatio} relative rounded-lg overflow-hidden shadow-lg`}>
            <Image
              src={images[expandedIdx].src}
              alt={images[expandedIdx].label}
              fill
              className="object-cover"
              sizes="(max-width: 800px) 100vw, 80vw"
            />
          </div>
          <div className="flex justify-center items-center gap-4 mt-4">
            <button
              onClick={() => setExpandedIdx(idx => (idx !== null && idx > 0 ? idx - 1 : idx))}
              disabled={expandedIdx === 0}
              aria-label="Anterior"
              className={`p-2 ${expandedIdx === 0 ? 'opacity-30 cursor-not-allowed' : ''}`}
            >
              <LeftArrow />
            </button>
            <button
              onClick={() => setExpandedIdx(idx => (idx !== null && idx < images.length - 1 ? idx + 1 : idx))}
              disabled={expandedIdx === images.length - 1}
              aria-label="Próxima"
              className={`p-2 ${expandedIdx === images.length - 1 ? 'opacity-30 cursor-not-allowed' : ''}`}
            >
              <RightArrow />
            </button>
          </div>
        </div>
      ) : (
        <div className={`w-[90%] ${maxWidth} grid grid-cols-1 ${gridCols} gap-x-1`}>
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`relative overflow-hidden shadow-lg ${aspectRatio} cursor-pointer group`}
              onClick={() => setExpandedIdx(idx)}
            >
              <Image
                src={img.src}
                alt={img.label}
                fill
                className="object-cover group-hover:brightness-90 transition"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <span className="absolute top-2 left-2 z-10">
                <ExpandIcon />
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Gallery

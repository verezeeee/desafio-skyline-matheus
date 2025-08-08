import React from 'react'
import Image from 'next/image'

import fachada1 from '@/assets/fachada/fachada1.png'
import fachada2 from '@/assets/fachada/fachada2.png'
import fachada3 from '@/assets/fachada/fachada3.png'
import fachada4 from '@/assets/fachada/fachada4.png'
import fachada5 from '@/assets/fachada/fachada5.png'
import fachada6 from '@/assets/fachada/fachada6.png'
import CloseButton from '@/components/CloseButton'
import ExpandIcon from '@/components/ExpandIcon'
import { LeftArrow, RightArrow } from '@/components/Navigation'

const images = [fachada1, fachada2, fachada3, fachada4, fachada5, fachada6]

const Fachada = () => {
    const [expandedIdx, setExpandedIdx] = React.useState<number | null>(null)

    React.useEffect(() => {
        if (expandedIdx === null) return
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setExpandedIdx(null)
            if (e.key === 'ArrowLeft') setExpandedIdx(idx => (idx !== null && idx > 0 ? idx - 1 : idx))
            if (e.key === 'ArrowRight') setExpandedIdx(idx => (idx !== null && idx < images.length - 1 ? idx + 1 : idx))
        }
        window.addEventListener('keydown', handleKey)
        return () => window.removeEventListener('keydown', handleKey)
    }, [expandedIdx])

    return (
        <div className="w-full flex flex-col items-center">
            <h2 className="text-2xl text-black md:text-3xl tracking-wider font-light mt-8 mb-8 w-[90%] max-w-[1200px] text-left">
                IMAGENS DA <span className="font-bold">FACHADA</span>
            </h2>

            {expandedIdx !== null ? (
                <div className="relative w-[90%] max-w-[1200px] mx-auto">
                    <button
                        className="absolute top-4 left-4 z-20"
                        onClick={() => setExpandedIdx(null)}
                        aria-label="Fechar"
                    >
                        <CloseButton />
                    </button>
                    <div className="w-full aspect-[16/8] relative rounded-lg overflow-hidden shadow-lg">
                        <Image
                            src={images[expandedIdx]}
                            alt={`Fachada ${expandedIdx + 1}`}
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
                <div className="w-[90%] max-w-[1200px] grid grid-cols-1 md:grid-cols-3 gap-8">
                    {images.map((img, idx) => (
                        <div
                            key={idx}
                            className="relative rounded-lg overflow-hidden shadow-lg aspect-[4/3] cursor-pointer group"
                            onClick={() => setExpandedIdx(idx)}
                        >
                            <Image
                                src={img}
                                alt={`Fachada ${idx + 1}`}
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

export default Fachada
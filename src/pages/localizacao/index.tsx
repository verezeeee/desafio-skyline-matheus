import Button from '@/components/Button'
import Image from 'next/image'
import header from "../../assets/localizacao/header.svg"
import image1 from "../../assets/localizacao/image 1.svg"
import mapPin from "@/assets/common/MapPin.svg"
import React from 'react'
import restaurantes from '@/utils/restaurantes'
import RestauranteView from '@/components/RestauranteView'
const LocalizacaoPage = () => {
    const [currentButton, setCurrentButton] = React.useState<number>(0)

    const buttons = [
        {
            label: "Ultratour",
            onClick: () => { setCurrentButton(0) }
        },
        {
            label: "Proximidades",
            onClick: () => { setCurrentButton(1) }
        },
        {
            label: "Mapa 2d",
            onClick: () => { setCurrentButton(2) }
        },
        {
            label: "Mapa satélite",
            onClick: () => { setCurrentButton(3) }
        }
    ]

    const left = restaurantes.filter((_, idx) => idx < 4)
    const right = restaurantes.filter((_, idx) => idx >= 4)


    return (
        <div className="flex h-full flex-col justify-end w-full mt-16">
            {currentButton === 0 && (
                <main className="flex-1 px-16 flex flex-col justify-between gap-y-4 min-h-[75vh]">
                    <h1 className='text-[#2c2c2c] text-2xl tracking-wider mb-8'>ULTRATOUR</h1>
                    {/* https://tour.ultratour.com.br/Dimas/d-season/index.htm */}
                    <div className='flex justify-center h-full'>
                        <button onClick={() => {
                            window.open("https://tour.ultratour.com.br/Dimas/d-season/index.htm", "_blank");
                        }} className='bg-[#2c2c2c] w-32 h-12 cursor-pointer text-white px-4 py-2 rounded'>Ver site</button>
                    </div>
                </main>
            )}
            {currentButton === 1 && (
                <main className="flex-1 px-16 flex flex-col justify-between gap-y-4 min-h-[75vh]">
                    <div>
                        <Image src={header} alt="Header" />
                    </div>
                    <div className='flex gap-4'>
                        <Image src={image1} alt="Image 1" sizes='50vw' className='w-[30vw]' />
                        <div className='flex flex-col gap-2 w-[30%]'>
                            <h1 className='text-[#555] text-2xl tracking-wider mb-8'>O melhor da gastronomia no quintal de casa.</h1>
                            {left.map((item, idx) => {
                                return (
                                    <RestauranteView
                                        key={idx}
                                        name={item.name}
                                        distance={item.distance}
                                        time={item.time}
                                    />
                                )
                            })}
                        </div>
                        <div className='flex flex-col h-full justify-end gap-2 w-[30%]'>
                            {right.map((item, idx) => {
                                return (
                                    <RestauranteView
                                        key={idx}
                                        name={item.name}
                                        distance={item.distance}
                                        time={item.time}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </main>
            )}
            {currentButton === 2 && (
                <main className="flex-1 px-16 flex flex-col justify-center items-center gap-y-4 min-h-[75vh]">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3536.0731427600726!2d-48.5620804242229!3d-27.59126187624934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDM1JzI4LjUiUyA0OMKwMzMnMzQuMiJX!5e0!3m2!1spt-BR!2sbr!4v1754650813517!5m2!1spt-BR!2sbr" width="800" height="600" style={{border: "0"}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </main>
            )}
            {currentButton === 3 && (
                <main className="flex-1 px-16 flex flex-col justify-center items-center gap-y-4 min-h-[75vh]">
                    <Image src={mapPin} alt="MapPin" />
                </main>
            )}

            <div className='flex w-[90%] mt-8 justify-around items-center mx-auto'>
                {buttons.map((button, idx) => (
                    <Button
                        key={idx}
                        label={button.label}
                        onClick={button.onClick}
                        currentButton={currentButton}
                        idx={idx}
                    />
                ))}
            </div>
        </div>
    )
}

export default LocalizacaoPage
import React from 'react'
import Fachada from './components/Fachada'
import Button from '@/components/Button'
import AreasComuns from './components/AreasComuns'
import Apartamentos from './components/Apartamentos'

const PerspectivasPage = () => {
    const buttons = [
        {
            label: "Fachada",
            onClick: () => { setCurrentButton(0) }
        },
        {
            label: "Áreas Comuns",
            onClick: () => { setCurrentButton(1) }
        },
        {
            label: "Apartamentos",
            onClick: () => { setCurrentButton(2) }
        }
    ]
    const [currentButton, setCurrentButton] = React.useState<number>(0)

    return (
        <div className="flex flex-col min-h-screen w-full justify-between">
            <div className="mt-16">
                {currentButton === 0 && <Fachada />}
                {currentButton === 1 && <AreasComuns />}
                {currentButton === 2 && <Apartamentos />}
            </div>
            <div className="flex w-full max-w-[1200px] justify-around items-center py-6">
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

export default PerspectivasPage
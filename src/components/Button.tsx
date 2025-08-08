import React from 'react'

interface ButtonProps {
    label: string;
    onClick: () => void;
    currentButton: number;
    idx: number;
}

const Button = ({ label, onClick, currentButton, idx }: ButtonProps) => {
  return (
    <button onClick={onClick} 
    className={`bg-white text-[#2C2F30] px-8 py-2 rounded-[8px] cursor-pointer shadow-lg transition-all duration-200 hover:shadow-xl uppercase tracking-wider ${currentButton === idx ? "border-[#2C2F30] border-2" : ""}`}
    >{label}</button>
  )
}

export default Button
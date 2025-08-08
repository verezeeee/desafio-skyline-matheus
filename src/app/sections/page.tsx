"use client";
import React, { Suspense } from 'react'
import Image from 'next/image'
import logo from "../../assets/common/LogoWhite.svg"
import localizacao from "../../assets/sections/localizacao.png"
import perspectivas from "../../assets/sections/perspectivas.png"
import plantas from "../../assets/sections/plantas.png"
import diferenciais from "../../assets/sections/diferenciais.png"
import easyhome from "../../assets/sections/easyhome.png"
import maquete from "../../assets/sections/maquete.png"
import home from "../../assets/common/Home.svg"
import Link from 'next/link';
import LocalizacaoPage from '@/pages/localizacao';
import PerspectivasPage from '@/pages/perspectivas';

const menuItems = [
  { src: localizacao, label: "LOCALIZAÇAO" },
  { src: perspectivas, label: "PERSPECTIVAS" },
  { src: plantas, label: "PLANTAS" },
  { src: diferenciais, label: "DIFERENCIAIS" },
  { src: easyhome, label: "EASY HOME" },
  { src: maquete, label: "MAQUETE VIRTUAL" },
]

import { useSearchParams } from "next/navigation";

const SectionsContent = () => {
    const searchParams = useSearchParams();
    const [activeIdx, setActiveIdx] = React.useState<number>(0);

    React.useEffect(() => {
      const idx = searchParams?.get("activeIdx");
      if (idx !== null && !isNaN(Number(idx))) {
        setActiveIdx(Number(idx));
      }
    }, [searchParams]);

  const flexActive = 4
  const flexInactive = 1

  return (
    <div className="flex h-screen bg-[#f7f1ec]">
      <aside className="w-[320px] min-h-screen bg-[#232323] flex flex-col items-center py-4">
        {/* Logo */}
        <div className="w-full flex justify-center mb-2 px-2">
          <Image src={logo} alt="Logo" width={200} height={200} className="object-contain" />
        </div>
        {/* Menu items */}
        <div className="flex-1 w-full flex flex-col">
          {menuItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`
                w-full relative overflow-hidden transition-all duration-300 cursor-pointer
                ${activeIdx === idx ? "z-10" : ""}
              `}
              style={{
                flex: activeIdx === idx ? flexActive : flexInactive,
                minHeight: 0
              }}
            >
              <Image
                src={item.src}
                alt={item.label}
                fill
                className={`object-cover transition-all duration-300 ${activeIdx === idx ? 'opacity-100' : 'opacity-30'}`}
                style={{ zIndex: 1 }}
              />
              <span
                className="absolute bottom-2 right-2 bg-opacity-60 text-white text-xs font-semibold px-2 py-1 rounded tracking-widest uppercase z-20 select-none"
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </aside>
    <main className="flex-1 flex flex-col justify-start items-center">
        <div className="flex flex-col w-full items-center">
          {menuItems[activeIdx].label === "LOCALIZAÇAO" && (
            <LocalizacaoPage />
          )}
          {menuItems[activeIdx].label === "PERSPECTIVAS" && (
            <PerspectivasPage />
          )}
        </div>
    </main>
        <aside className="w-[120px] min-h-screen bg-[#232323] flex flex-col justify-end items-center py-4">
            <Link
                href="/"
                className="mb-2 cursor-pointer w-12 h-12 flex items-center justify-center rounded-full bg-[#343637] hover:bg-[#444] transition-colors duration-200 shadow-lg text-white text-2xl"
                aria-label="Home"
            >
                <Image src={home} alt="Home" width={200} height={200} />
            </Link>
        </aside>
    </div>
  );
};

const Sections = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SectionsContent />
        </Suspense>
    );
};

export default Sections
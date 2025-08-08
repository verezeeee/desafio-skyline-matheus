"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "../assets/common/Logo.svg";
import localizacao from "../assets/sections/localizacao.png"
import perspectivas from "../assets/sections/perspectivas.png"
import plantas from "../assets/sections/plantas.png"
import plantas1 from "../assets/sections/diferenciais.png"
import plantas2 from "../assets/sections/easyhome.png"
import plantas3 from "../assets/sections/maquete.png"

const menuItems = [
  { src: localizacao, label: "LOCALIZAÇAO" },
  { src: perspectivas, label: "PERSPECTIVAS" },
  { src: plantas, label: "PLANTAS" },
  { src: plantas1, label: "DIFERENCIAIS" },
  { src: plantas2, label: "EASY HOME" },
  { src: plantas3, label: "MAQUETE VIRTUAL" },
];

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex h-screen bg-[#f7f1ec]">
      <aside className="relative w-[650px] border-r border-[#eee] flex flex-col items-center py-8 px-8 overflow-y-auto scrollbar-hidden ml-32">
        <div className="w-full flex flex-col gap-6 z-10">
          {menuItems.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-2 items-center cursor-pointer transition-transform duration-200 hover:scale-105"
              onClick={() => {
                router.push(`/sections?activeIdx=${idx}`);
              }}
            >
              <Image
                src={item.src}
                alt={item.label}
                width={350}
                height={200}
                className="object-cover w-full"
              />
              <span className="text-[#2C2F30] text-right w-full text-xl tracking-wider">{item.label}</span>
            </div>
          ))}
        </div>
      </aside>
      <main className="flex-1 flex flex-col justify-center items-center">
      
        <Image src={logo} alt="Logo" width={400} height={400} />
        <div className="text-center text-[#555] text-lg tracking-wider">
          SELECIONE NO MENU AO LADO <br />
          POR QUAL SESSÃO DESEJA INICIAR!
        </div>
      </main>
    </motion.div>
  );
}
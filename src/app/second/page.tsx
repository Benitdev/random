"use client"

import CongratulationParticle from "@/components/CongratulationParticles"
import Image from "next/image"
import { useRef, useState } from "react"

const colors = [
  "rgb(190 24 93)",
  "#6a5af9",
  "#d61efd",
  "rgb(220, 38, 38)",
  "rgb(157 23 77)",
  "rgb(161 98 7)",
  "black",
]

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}

export default function Home() {
  const [number, setNumber] = useState<number>(0)
  const [numberResult, setNumberResult] = useState<number>(0)
  const [isRunning, setIsRunning] = useState(false)
  const intervalRef = useRef<NodeJS.Timer | null>(null)

  function handleStartClick() {
    setIsRunning(true)
    const intervalId = setInterval(() => {
      setNumber(Math.ceil(Math.random() * 300))
    }, 100)
    intervalRef.current = intervalId
    setTimeout(() => {
      setIsRunning(false)
      setNumberResult(Math.ceil(Math.random() * 300))
      clearTimeout(intervalId)
    }, 10000)
  }
  const color = getRandomColor()
  console.log(numberResult)
  return (
    <main className="flex h-screen flex-col items-center justify-between p-24 overflow-hidden relative bg-black/80">
      <div className="flex flex-col items-center gap-4">
        <Image
          src={"/custom-logo-company-white.png"}
          alt=""
          width={350}
          height={40}
        />
        <h2 className="text-slate-900 tracking-[20px] font-extrabold text-4xl uppercase animate-charcter text-center">
          bốc thăm may mắn
        </h2>
        <div className="relative rounded-full h-[500px] w-[500px] border-4 border-slate-900 flex items-center justify-center my-7">
          <div className="absolute rounded-full h-[500px] w-[500px] border-4 border-slate-900 bg-black/50"></div>
          <h1
            style={{
              color,
            }}
            className="absolute font-bold text-[150px] animate-fade text-center"
          >
            {number}
            <h2 className="uppercase font-bold text-2xl text-slate-200 text-center tracking-wider">
              Giải nhì
            </h2>
          </h1>
        </div>
        {isRunning ? (
          <span className="uppercase font-bold text-5xl text-slate-200">
            Umbla xì bùa ...
          </span>
        ) : (
          <button
            className="px-10 py-5 rounded-2xl uppercase font-bold text-xl bg-red-700 tracking-[2px]"
            onClick={handleStartClick}
          >
            Con số gì đây
          </button>
        )}
        {numberResult ? (
          <div className="fixed z-50 inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center">
            <div className="w-[500px] h-[550px] rounded-xl bg-cyan-700/50 p-5 backdrop-blur-md flex flex-col items-center gap-6">
              <h1 className="uppercase font-bold text-2xl text-slate-200 text-center tracking-[6px]">
                Xin chúc mừng!
              </h1>

              <Image src={"/mouse-pro.png"} alt="" width={250} height={250} />
              <h2 className="font-bold text-2xl text-slate-900 text-center mt-10">
                <span className="text-[100px] text-red-600">
                  {numberResult}
                </span>
              </h2>

              <button
                className="px-5 py-2 rounded-2xl uppercase font-bold text-xl bg-red-700 block mx-auto mt-5"
                onClick={() => {
                  setNumberResult(0)
                  setNumber(0)
                }}
              >
                Tiếp tục
              </button>
            </div>
            <CongratulationParticle />
          </div>
        ) : null}
      </div>
    </main>
  )
}

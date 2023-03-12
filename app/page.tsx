"use client"

import Image from 'next/image'
import { Inter } from 'next/font/google'
import Sidenav from '@/components/Sidenav'
import { useState } from "react"
import Main from "@/components/Main"
import { MyhticItems, getRandomItem } from "@/public/items"
import ItemImg from '@/components/ItemImg'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [ultimateBrawery, updateUltimateBrawery] = useState("")
  const getDataFromChild = (str: string) => {
    updateUltimateBrawery(str);
  }
  const url: string = "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/";

  return (
    <div className='flex justify-end' id="wrapper">
      <Main url={`${url}${ultimateBrawery.replaceAll('\'', '').replaceAll(' ', '').replaceAll('.', '')}_1.jpg`}>
        <div className='relative w-[100%] h-[100%]'>
          <span className="text-8xl text-white font-bold">
            { ultimateBrawery }
          </span>
          <div className='absolute bottom-0 left-0'>
            s
          </div>
        </div>
      </Main>
      <Sidenav changeParentUltimateBrawery={getDataFromChild}/>
    </div>
  )
}
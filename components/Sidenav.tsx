"use client"

import { ReactNode, useState } from "react"
import { getRandomChampion, champions } from "@/public/champions"
import Loading from "./Loading";
import "./Sidenav.css"
import Image from 'next/image';

export default function Sidenav({ changeParentUltimateBrawery }: any) { 

  const buttonCanGenerate = "GENERATE BRAWERY"; 
  const buttonProcessingActions = (<Loading />);

  const [buttonState, changeButtonState] = useState<string|ReactNode>(buttonCanGenerate);
  const handleButtonClick = () => {
    changeButtonState(buttonProcessingActions);
    changeParentUltimateBrawery(getRandomChampion(champions, true));
    setTimeout(() => {
      changeButtonState(buttonCanGenerate);
    }, 300)
  }
  return (
    <nav className="w-96 bg-[#0006a8] h-[100vh] text-center relative">
      <div className="py-7">
        <span className="text-3xl font-bold text-white" id="champion_name">UltimateBrawery</span>
      </div>
      <div className="py-[95%] text-white flex justify-center">
        <div id="button_wrapper">
          <button onClick={handleButtonClick} disabled={(buttonState != buttonCanGenerate)} id="generate_brawery_button">
            { buttonState }
          </button>
        </div>
      </div>
      <div className="relative bottom-0">
        <div className="absolute right-3">
          <a href="https://github.com/najskowski" target="_blank" title="checkout my github!" id="github_link">
            <Image
              src="/github.svg"
              alt="github logo"
              width={30}
              height={30}
            />
          </a>
        </div>
      </div>
    </nav>
  )
}
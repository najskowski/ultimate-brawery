"use client"

import { useState } from "react";

interface ComponentProps {
    url: string;
    children: React.ReactNode;
} 

export default function Main({ url, children }: ComponentProps) {
    return (
        <main style= {{
            backgroundImage: `url(${url})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }} 
          className="py-6 px-12 relative"
        >
            { children }
        </main>
    );
}
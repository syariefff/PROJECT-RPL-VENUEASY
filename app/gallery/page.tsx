import React from 'react'
import Image from 'next/image'
import BG from "@/image/bggallery.png"

const GALLERY = () => {
  return (
  <div className='relative w-full h-fit bg-black opacity-90'>
        <Image src ={BG}
        alt = "Hero"
        width={1360}
        height={900}
        className="w-full h-full object-cover bg-cover"/>
  </div>
);
}

export default GALLERY

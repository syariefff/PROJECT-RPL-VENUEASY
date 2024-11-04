import React from 'react'
import Image from 'next/image';
import Hero from "@/image/bg.png";
import BG from "@/image/image 11.png"

const GALLERY = () => {
  return (
    <div className='w full'>

        <Image src ={BG}
        alt = "Hero"
        width={1360}
        height={900}
        className="w-full h-full object-cover bg-black"/>
       <div className="min-h-screen bg-black py-10 px-6 ">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card Jakarta */}
          <div className="relative rounded-lg overflow-hidden shadow-lg mt-10">
            <Image
              src={Hero} // Ganti dengan path gambar Jakarta
              alt="Jakarta"
              layout="responsive"
              width={600}
              height={400}
              className="object-cover"
            />
            <div className="absolute top-4 left-4 text-white text-xl font-bold">
              JAKARTA
            </div>
          </div>

          {/* Card Bandung */}
          <div className="relative rounded-lg overflow-hidden shadow-lg mt-10">
            <Image
              src={Hero} // Ganti dengan path gambar Bandung
              alt="Bandung"
              layout="responsive"
              width={600}
              height={400}
              className="object-cover"
            />
            <div className="absolute top-4 left-4 text-white text-xl font-bold">
              BANDUNG
            </div>
          </div>

          {/* Card Surabaya */}
          <div className="relative rounded-lg overflow-hidden shadow-lg mt-10">
            <Image
              src={Hero} // Ganti dengan path gambar Surabaya
              alt="Surabaya"
              layout="responsive"
              width={600}
              height={400}
              className="object-cover"
            />
            <div className="absolute top-4 left-4 text-white text-xl font-bold">
              SURABAYA
            </div>
          </div>

          {/* Card Bali */}
          <div className="relative rounded-lg overflow-hidden shadow-lg col-span-1 md:col-span-2 lg:col-span-1 mt-5">
            <Image
              src={Hero} // Ganti dengan path gambar Bali
              alt="Bali"
              layout="responsive"
              width={600}
              height={400}
              className="object-cover"
            />
            <div className="absolute top-4 left-4 text-white text-xl font-bold">
              BALI
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
);
}

export default GALLERY

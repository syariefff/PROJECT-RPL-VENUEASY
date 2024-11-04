import React from 'react';
import Image from 'next/image';
import Hero from '@/image/bgn.png';
import Search from '@/icon/search.png'
import Location from '@/icon/location.png'
import Person from '@/icon/person.png'
import Building from '@/icon/building.png'

export default function Filter() {
return (
    <div className='w-full'>
      {/* Background Hero */}
        <div className="relative w-full h-fit bg-black opacity-90">
        <Image src ={Hero}
        alt = "Hero"
        width={1360}
        height={900}
        className="w-full h-full object-cover bg-cover"/>
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white mt-24">
            <h2 className="text-[40px] font-normal mb-6 text-white">
            Find The Best Unique Venue To Rent For<br/>Events In Indonesia
            </h2>

        <div className="flex items-center justify-between bg-gray-100 rounded-lg shadow-lg p-2 max-w-4xl mx-auto mt-20">
      {/* Icon dan Judul */}
      <div className="flex items-center space-x-2">
        <Image src={Building} alt="building" width={25} height={25}></Image>
        <h2 className="font-semibold text-black">Venue Search</h2>
      </div>

      {/* Input pencarian nama venue */}
      <div className="flex items-center space-x-2 border-l border-gray-300 pl-4">
        <Image src={Search} alt="searching" width={20} height={20} className="text-gray-500"></Image>
        <input
          type="text"
          placeholder="Search Name Venue"
          className="bg-gray-100 outline-none text-black"
        />
      </div>

      {/* Input lokasi event */}
      <div className="flex items-center space-x-2 border-l border-gray-300 pl-4">
        <Image src={Location} alt="location" width={20} height={20} className="text-gray-500"></Image>
        <input
          type="text"
          placeholder="Event Location"
          className="bg-gray-100 outline-none text-black"
        />
      </div>

      {/* Input jumlah tamu */}
      <div className="flex items-center space-x-2 border-l border-gray-300 pl-4">
        <Image src={Person} alt="person" width={25} height={25} className="text-gray-500"></Image>
        <input
          type="text"
          placeholder="Number Of Guest"
          className="bg-gray-100 outline-none text-black"
        />
      </div>

      {/* Tombol Search */}
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
        Search
      </button>
    </div>
        </div>
    </div>
);
}

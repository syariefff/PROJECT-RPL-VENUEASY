"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Hero from '@/image/bgn.png';
import Search from '@/icon/search.png';
import Location from '@/icon/location.png';
import Person from '@/icon/person.png';
import Building from '@/icon/building.png';
import RecommendedSection from '@/components/recomendasi';
import { venues } from '@/components/datavenue';

export default function Filter() {
  const [isClient, setIsClient] = useState(false); // State untuk memastikan hanya render di client
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('');
  const [guests, setGuests] = useState('');

  useEffect(() => {
    setIsClient(true); // Pastikan komponen hanya render di client
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  const handleGuestsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGuests(e.target.value);
  };

  if (!isClient) {
    return null; // Mencegah rendering di server
  }

  return (
    <div className='w-full'>
      {/* Background Hero */}
      <div className="relative w-full h-fit bg-black opacity-90">
        <Image
          src={Hero}
          alt="Hero"
          width={1200}
          height={900}
          className="w-full h-full object-cover bg-cover"
        />
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white mt-24">
        <h2 className="text-[40px] font-normal mb-6 text-white">
          Find The Best Unique Venue To Rent For<br />Events In Indonesia
        </h2>

        <div className="flex items-center justify-between bg-gray-100 rounded-lg shadow-lg p-1 max-w-4xl mx-auto mt-20">
          {/* Icon dan Judul */}
          <div className="flex items-center space-x-1">
            <Image src={Building} alt="building" width={25} height={25} className='ml-2' />
            <h2 className="font-semibold text-black">Venue Search</h2>
          </div>

          {/* Input pencarian nama venue */}
          <div className="flex items-center space-x-2 border-l border-gray-300 pl-4">
            <Image src={Search} alt="searching" width={20} height={20} className="text-gray-500" />
            <input
              type="text"
              placeholder="Search Name Venue"
              className="bg-gray-100 outline-none text-black"
              value={search}
              onChange={handleSearchChange}
            />
          </div>

          {/* Input lokasi event */}
          <div className="flex items-center space-x-2 border-l border-gray-300 pl-4">
            <Image src={Location} alt="location" width={20} height={20} className="text-gray-500" />
            <input
              type="text"
              placeholder="Event Location"
              className="bg-gray-100 outline-none text-black"
              value={location}
              onChange={handleLocationChange}
            />
          </div>

          {/* Input jumlah tamu */}
          <div className="flex items-center space-x-2 border-l border-gray-300 pl-4">
            <Image src={Person} alt="person" width={25} height={25} className="text-gray-500" />
            <input
              type="text"
              placeholder="Number Of Guest"
              className="bg-gray-100 outline-none text-black"
              value={guests}
              onChange={handleGuestsChange}
            />
          </div>

          {/* Tombol Search */}
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg mr-1 hover:bg-blue-700 transition duration-300">
            Search
          </button>
        </div>
      </div>

      {/* Komponen RecommendedSection */}
      <RecommendedSection venues={venues} />
    </div>
  );
}

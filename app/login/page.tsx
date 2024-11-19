"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Logo from '@/image/blacklogo.png';
import Google from '@/icon/google.png';
import Username from '@/icon/person.png';
import Lock from '@/icon/lock.png';

const Login: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#5b4636]">
        <div className="bg-white rounded-3xl shadow-lg p-8 mt-4 w-full max-w-4xl mx-4">
          <div className="flex flex-col items-center">
            <div className="text-center mb-6">
              <Image src={Logo} alt="Logo" className="mx-auto" width={80} height={70} />
              <h1 className="text-2xl font-bold">
                <span className="text-6xl">L</span>ogin To
              </h1>
              <h2 className="text-xl">Venueasy</h2>
            </div>
            <div className="flex items-center bg-blue-500 text-white w-60 py-2 rounded  mb-4">
              <Image src={Google} alt="Google" width={20} height={20} className="ml-2 mr-6" />
                <span>Log in with Google</span>
            </div>
            <div className="w-full max-w-xs">
              <div className="text-center mb-4">OR</div>
              <div className="mb-4">
                <div className="flex items-center bg-gray-300 rounded-3xl px-3 py-2 mb-2">
                <Image src={Username} alt="username" width={25} height={25}/>
                  <i className="fas fa-user mr-2"></i>
                  <input type="text" placeholder="Username" className="bg-transparent focus:outline-none w-full" />
                </div>
                <div className="flex items-center bg-gray-300 rounded-3xl px-3 py-2">
                <Image src={Lock} alt="lock" width={25} height={25}/>
                  <i className="fas fa-lock mr-2"></i>
                  <input type="password" placeholder="Password" className="bg-transparent focus:outline-none w-full" />
                </div>
              </div>
            </div>
            <button className="bg-[#8b4513] text-white w-32 py-2 rounded items-center justify-center">Login</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Login;
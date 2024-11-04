import Image from 'next/image';
import Hero from "@/image/bgn.png";
import Logo from "@/image/logo.png";
import Meeting from "@/icon/meeting.png"
import Outdoor from "@/icon/outdoor.png"
import Ballroom from "@/icon/ballroom.png"
import IG from "@/icon/instagram.png"
import HP from "@/icon/telephone.png"
import Email from "@/icon/email.png"

const Home = () => {
  return (
    <div className='w-full'>
      {/* Hero Section */}
      <div className="relative w-full h-fit bg-black opacity-90">
        <Image 
        src = {Hero}
        alt = "Hero"
        width={1200}
        height={900}
        className="w-full h-full object-cover bg-cover"/>
        {/* Text besar tengah */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
          <Image src={Logo} alt="logo" width={300} height={294} priority={true} quality={100} />
          <h2 className="text-[40px] font-normal mb-6 text-white">
            Temukan Tempat Terbaik Untuk Acara Anda
          </h2>

          {/* Tombol learn more */}
          <a
            href="#services"  // Mengubah href agar menuju ke ID "services" saat diklik
            className="bg-[#b30d0d] text-white font-bold px-3 py-1 rounded-md shadow-md 
            flex items-center space-x-2 transition duration-300 hover:bg-[#9d0a0a]"
          >
            <span className="text-lg">LEARN MORE</span>
            <span className="text-2xl leading-none">&gt;</span>
          </a>
        </div>
    </div>

      {/* Services Section */}
      <div id="services" className="bg-gray-300 py-16 text-center ">
        <h3 className="text-3xl font-bold text-blue-700 mb-4">LAYANAN KAMI</h3>
        <p className="text-gray-600 mb-12">pengalaman yang tak terlupakan bagi setiap acara Anda.</p>
        <div className="flex justify-center gap-10">

          {/* Meeting Room */}
          <div className="bg-gray-200 p-8 rounded-lg shadow-md w-64 text-center">
            <h4 className="text-2xl font-semibold">Meeting Room</h4>
            <Image src={Meeting} alt="BallRoom Icon" width={70} height={70} className="mx-auto mt-10" />
            <p className="text-black mt-10 font-normal text-[12px]">
              Ruang pertemuan yang sempurna untuk berdiskusi dan mencapai tujuan Anda,
              lengkap dengan segala fasilitas untuk mendukung kebutuhan Anda.
            </p>
          </div>

          {/* Outdoor */}
          <div className="bg-gray-200 p-8 rounded-lg shadow-md w-64 text-center">
            <h4 className="text-2xl font-semibold">Outdoor</h4>
            <Image src={Outdoor} alt="BallRoom Icon" width={70} height={70} className="mx-auto mt-10 mb-10" />
            <p className="text-black mt-10 font-normal text-[12px]">
              Outdoor area yang keren dan estetik, menciptakan suasana yang nyaman untuk
              acara spesial Anda, terbuka dengan pemandangan yang memukau.
            </p>
          </div>

          {/* Ballroom */}
          <div className="bg-gray-200 p-8 rounded-lg shadow-md w-64 text-center">
            <h4 className="text-2xl font-semibold">BallRoom</h4>
            <Image src={Ballroom} alt="BallRoom Icon" width={70} height={70} className="mx-auto mt-10 mb-10" />
            <p className="text-black mt-10 font-normal text-[12px]">
              Ruang pertemuan yang sempurna untuk acara besar, lengkap dengan fasilitas utama
              yang menjadikan acara Anda lebih mudah.
            </p>
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="mt-12 text-center">
          <p className="text-black mb-2">Contact Us</p>
          <div className="flex justify-center gap-4 text-black">
            <div className="flex items-center gap-1">
              <Image src={IG} alt="Icon" width={15} height={15} />
                <span>Venueasy</span>
            </div>
            <div className="flex items-center gap-1">
              <Image src={HP} alt="Icon" width={17} height={17} />
                <span>+62 867 3847 6645</span>
            </div>
            <div className="flex items-center gap-1">
              <Image src={Email} alt="Icon" width={17} height={17} />
                <span>info@venueasy.com</span>
            </div>
          </div>
        </div>
      </div>
  </div>
  );
};

export default Home;

import React from 'react';
import Image from 'next/image';
import VenueImage from '@/image/bg.png';

interface Venue {
  name: string;
  location: string;
  image: string; // Sesuaikan tipe ini dengan tipe yang sesuai untuk gambar
}

interface RecommendedSectionProps {
  venues: Venue[];
}

const RecommendedSection: React.FC<RecommendedSectionProps> = ({ venues }) => {
  return (
    <div className="bg-gray-300 py-2">
      <h2 className="text-2xl font-bold text-gray-500 mt-6 px-10">Recommended</h2>
      <section className="py-12 px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {venues.map((venue, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src={VenueImage} // Gunakan `venue.image` jika ada, jika tidak gunakan `VenueImage`
                alt={`Image of ${venue.name}`}
                width={400} // Atur lebar sesuai kebutuhan
                height={200} // Atur tinggi sesuai kebutuhan
                className="w-full h-48 object-cover bg-black"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">{venue.name}</h3>
                <div className="flex items-center text-gray-500">
                  <i className="fas fa-map-marker-alt text-red-500"></i>
                  <span>{venue.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default RecommendedSection;

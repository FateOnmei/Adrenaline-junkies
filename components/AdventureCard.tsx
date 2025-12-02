import React from 'react';
import { Adventure } from '../types';

interface AdventureCardProps {
  adventure: Adventure;
}

const AdventureCard: React.FC<AdventureCardProps> = ({ adventure }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl flex flex-col h-full border-b-4 border-red-600">
      <div className="relative h-56">
        <img 
          src={adventure.imageUrl} 
          alt={adventure.title} 
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute top-0 right-0 bg-red-600 text-white px-3 py-1 m-2 rounded-full text-xs font-bold uppercase tracking-wider">
          {adventure.difficulty}
        </div>
        <div className="absolute bottom-0 left-0 bg-black/70 text-white px-3 py-1 m-2 rounded text-xs font-bold">
          Cena: {adventure.priceLevel}
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 mb-2 font-montserrat leading-tight">
          {adventure.title}
        </h3>
        <p className="text-gray-600 mb-4 text-sm flex-grow">
          {adventure.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {adventure.activities.slice(0, 3).map((activity, idx) => (
            <span key={idx} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md font-medium border border-gray-200">
              {activity}
            </span>
          ))}
          {adventure.activities.length > 3 && (
            <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md font-medium border border-gray-200">
              +{adventure.activities.length - 3}
            </span>
          )}
        </div>
        
        <button className="mt-5 w-full bg-black text-white py-2.5 rounded-lg font-bold hover:bg-red-600 transition-colors duration-300 uppercase tracking-wide text-sm">
          Detail cesty
        </button>
      </div>
    </div>
  );
};

export default AdventureCard;
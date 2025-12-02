import React from 'react';
import { Adventure } from '../types';

interface AdventureCardProps {
  adventure: Adventure;
  onSelect: (adventure: Adventure) => void;
}

const AdventureCard: React.FC<AdventureCardProps> = ({ adventure, onSelect }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl flex flex-col h-full border-b-4 border-red-600 group">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={adventure.imageUrl} 
          alt={adventure.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute top-0 right-0 bg-red-600 text-white px-3 py-1 m-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-md">
          {adventure.difficulty}
        </div>
        <div className="absolute bottom-0 left-0 bg-black/70 text-white px-3 py-1 m-2 rounded text-xs font-bold backdrop-blur-sm">
          Cena: {adventure.priceLevel}
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 mb-2 font-montserrat leading-tight group-hover:text-red-600 transition-colors">
          {adventure.title}
        </h3>
        <p className="text-gray-600 mb-4 text-sm flex-grow line-clamp-3">
          {adventure.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto mb-4">
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
        
        <button 
          onClick={() => onSelect(adventure)}
          className="mt-auto w-full bg-black text-white py-2.5 rounded-lg font-bold hover:bg-red-600 transition-colors duration-300 uppercase tracking-wide text-sm flex items-center justify-center gap-2 group-hover:gap-3"
        >
          Detail cesty
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
        </button>
      </div>
    </div>
  );
};

export default AdventureCard;
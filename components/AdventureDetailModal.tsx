import React, { useEffect } from 'react';
import { Adventure } from '../types';

interface AdventureDetailModalProps {
  adventure: Adventure | null;
  onClose: () => void;
}

const AdventureDetailModal: React.FC<AdventureDetailModalProps> = ({ adventure, onClose }) => {
  // Prevent scrolling on body when modal is open
  useEffect(() => {
    if (adventure) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [adventure]);

  if (!adventure) return null;

  return (
    <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
    >
      <div 
        className="bg-white w-full max-w-4xl h-[90vh] md:h-auto md:max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image Section - Top on mobile, Left on desktop */}
        <div className="md:w-2/5 h-48 md:h-auto relative">
            <img 
                src={adventure.imageUrl} 
                alt={adventure.title} 
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/50"></div>
            
            {/* Badges */}
            <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase shadow-lg">
                    {adventure.difficulty}
                </span>
                <span className="bg-black text-white px-3 py-1 rounded-full text-xs font-bold uppercase shadow-lg">
                    {adventure.priceLevel}
                </span>
            </div>

            <button 
                onClick={onClose}
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-red-600 transition md:hidden"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
        </div>

        {/* Content Section */}
        <div className="flex-1 flex flex-col overflow-hidden bg-white">
            {/* Header */}
            <div className="p-6 md:p-8 border-b border-gray-100 relative">
                 <button 
                    onClick={onClose}
                    className="absolute top-6 right-6 text-gray-400 hover:text-red-600 transition hidden md:block"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>

                <h2 className="text-2xl md:text-3xl font-black font-montserrat text-gray-900 leading-tight mb-2">
                    {adventure.title}
                </h2>
                <div className="flex flex-wrap gap-2 mb-4">
                     {adventure.activities.map((act, idx) => (
                        <span key={idx} className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                            #{act}
                        </span>
                     ))}
                </div>
                <p className="text-gray-600 leading-relaxed">
                    {adventure.longDescription}
                </p>
            </div>

            {/* Scrollable Details */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8 scrollbar-hide">
                
                {/* Itinerary */}
                <section>
                    <h3 className="text-lg font-bold font-montserrat text-red-600 mb-4 flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        ITINERÁŘ
                    </h3>
                    <div className="space-y-4 border-l-2 border-gray-200 ml-2 pl-6 relative">
                        {adventure.itinerary.map((day) => (
                            <div key={day.day} className="relative">
                                <span className="absolute -left-[31px] top-0 bg-gray-100 border-2 border-red-500 text-red-600 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                                    {day.day}
                                </span>
                                <h4 className="font-bold text-gray-900 text-sm">{day.title}</h4>
                                <p className="text-sm text-gray-600 mt-1">{day.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Included */}
                    <section>
                        <h3 className="text-lg font-bold font-montserrat text-black mb-4 flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                            V CENĚ
                        </h3>
                        <ul className="space-y-2">
                            {adventure.included.map((item, i) => (
                                <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                                    <span className="text-green-500 mt-0.5">✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Requirements */}
                    <section>
                        <h3 className="text-lg font-bold font-montserrat text-black mb-4 flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                            POŽADAVKY
                        </h3>
                        <ul className="space-y-2">
                             {adventure.requirements.map((item, i) => (
                                <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                                    <span className="text-red-500 mt-0.5">•</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>
            </div>

            {/* Footer / CTA */}
            <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-between items-center">
                <div>
                    <span className="text-xs text-gray-500 uppercase font-bold tracking-wider block">Cena od</span>
                    <span className="text-2xl font-black text-gray-900">{adventure.priceLevel === '€' ? '490€' : adventure.priceLevel === '€€' ? '1 290€' : '2 890€'}</span>
                </div>
                <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-bold uppercase tracking-wider hover:bg-red-700 transition shadow-lg hover:shadow-red-500/30 transform hover:-translate-y-0.5">
                    Rezervovat
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AdventureDetailModal;
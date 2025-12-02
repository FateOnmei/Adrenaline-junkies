import React, { useState } from 'react';
import { adventures } from './data';
import AdventureCard from './components/AdventureCard';
import AIConsultant from './components/AIConsultant';

const App: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedDifficulty, setSelectedDifficulty] = useState('Vše');

  const filteredAdventures = selectedDifficulty === 'Vše' 
    ? adventures 
    : adventures.filter(adventure => adventure.difficulty === selectedDifficulty);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-roboto selection:bg-red-200">
      
      {/* Navigation */}
      <nav className="bg-black text-white py-4 px-6 sticky top-0 z-40 shadow-xl">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center gap-2">
                <div className="text-red-600">
                   <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L2 22h20L12 2zm0 3.8L18.5 20H5.5L12 5.8zM11 16h2v2h-2v-2zm0-6h2v4h-2v-4z"/>
                   </svg>
                </div>
                <h1 className="text-2xl font-black tracking-tighter italic font-montserrat">
                    ADRENALIN <span className="text-red-600">JUNKIES</span>
                </h1>
            </div>
            <div className="hidden md:flex gap-6 font-bold text-sm uppercase tracking-widest">
                <a href="#" className="hover:text-red-500 transition">Destinace</a>
                <a href="#" className="hover:text-red-500 transition">O nás</a>
                <a href="#" className="hover:text-red-500 transition">Kontakt</a>
            </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
            <img 
                src="https://picsum.photos/seed/climbing/1920/1080" 
                alt="Climber" 
                className="w-full h-full object-cover filter brightness-50 contrast-125"
            />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-black font-montserrat mb-6 leading-tight animate-fade-in">
                ZAŽIJ SVŮJ <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">LIMIT</span>
            </h2>
            <p className="text-xl md:text-2xl mb-10 font-light text-gray-200">
                Svět je plný míst, která ti rozbuší srdce. My tě tam vezmeme.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
                <button 
                    onClick={() => document.getElementById('adventures')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-red-600 text-white px-8 py-4 rounded-full font-bold text-lg uppercase tracking-wider hover:bg-red-700 transition transform hover:-translate-y-1 shadow-lg border-2 border-red-600"
                >
                    Vybrat Dobrodružství
                </button>
                <button 
                    onClick={() => setIsChatOpen(true)}
                    className="bg-transparent text-white px-8 py-4 rounded-full font-bold text-lg uppercase tracking-wider hover:bg-white hover:text-black transition transform hover:-translate-y-1 shadow-lg border-2 border-white backdrop-blur-sm"
                >
                    AI Konzultant
                </button>
            </div>
        </div>
      </header>

      {/* Main Content Grid */}
      <main id="adventures" className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold font-montserrat mb-4 text-black">
                NAŠE EXTRÉMNÍ NABÍDKA
            </h3>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Deset pečlivě vybraných zážitků, které prověří tvou odvahu. Od ledových plání po hlubiny džungle.
            </p>
        </div>

        {/* Difficulty Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['Vše', 'Střední', 'Vysoká', 'Extrémní'].map((level) => (
                <button
                    key={level}
                    onClick={() => setSelectedDifficulty(level)}
                    className={`px-6 py-2.5 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300 border-2 ${
                        selectedDifficulty === level
                            ? 'bg-red-600 border-red-600 text-white shadow-md transform scale-105'
                            : 'bg-white border-gray-200 text-gray-500 hover:border-red-400 hover:text-red-500'
                    }`}
                >
                    {level === 'Vše' ? 'Všechny úrovně' : `Obtížnost: ${level}`}
                </button>
            ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
            {filteredAdventures.length > 0 ? (
                filteredAdventures.map((adventure) => (
                    <AdventureCard key={adventure.id} adventure={adventure} />
                ))
            ) : (
                <div className="col-span-full text-center py-20">
                    <p className="text-xl text-gray-500">Pro tuto obtížnost zatím nemáme žádná dobrodružství.</p>
                </div>
            )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="mb-6">
                <h4 className="text-2xl font-black italic font-montserrat">
                    ADRENALIN <span className="text-red-600">JUNKIES</span>
                </h4>
            </div>
            <p className="text-gray-500 mb-8">
                © 2024 Adrenalin Junkies. Všechna práva vyhrazena. Život začíná tam, kde končí komfortní zóna.
            </p>
            <div className="flex justify-center gap-6 text-gray-400">
                <a href="#" className="hover:text-white transition">Instagram</a>
                <a href="#" className="hover:text-white transition">Facebook</a>
                <a href="#" className="hover:text-white transition">Twitter</a>
            </div>
        </div>
      </footer>

      {/* Floating Action Button for AI Chat */}
      <button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-6 right-6 bg-red-600 text-white p-4 rounded-full shadow-2xl hover:bg-red-700 transition-all duration-300 z-40 transform hover:scale-110 border-4 border-white"
        aria-label="Otevřít AI chat"
      >
        <div className="relative">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            <span className="absolute -top-2 -right-2 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-green-400"></span>
            </span>
        </div>
      </button>

      {/* AI Modal */}
      <AIConsultant isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      
    </div>
  );
};

export default App;
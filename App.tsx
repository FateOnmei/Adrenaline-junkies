import React, { useState, useEffect } from 'react';
import { adventures } from './data';
import AdventureCard from './components/AdventureCard';
import AIConsultant from './components/AIConsultant';
import AdventureDetailModal from './components/AdventureDetailModal';
import { ViewState, Adventure } from './types';

const App: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.HOME);
  const [selectedDifficulty, setSelectedDifficulty] = useState('Vše');
  const [selectedAdventure, setSelectedAdventure] = useState<Adventure | null>(null);

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const filteredAdventures = selectedDifficulty === 'Vše' 
    ? adventures 
    : adventures.filter(adventure => adventure.difficulty === selectedDifficulty);

  const renderContent = () => {
    switch (currentView) {
      case ViewState.HOME:
        return (
          <>
            {/* Hero Section */}
            <header className="relative h-[600px] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 z-0">
                  <img 
                      src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=80" 
                      alt="Mountain Adventure" 
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
                          <AdventureCard 
                            key={adventure.id} 
                            adventure={adventure} 
                            onSelect={setSelectedAdventure}
                          />
                      ))
                  ) : (
                      <div className="col-span-full text-center py-20">
                          <p className="text-xl text-gray-500">Pro tuto obtížnost zatím nemáme žádná dobrodružství.</p>
                      </div>
                  )}
              </div>
            </main>
          </>
        );
      
      case ViewState.ABOUT:
        return (
          <div className="animate-fade-in">
             <header className="relative h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img 
                        src="https://images.unsplash.com/photo-1525869811964-53594bfcb4b0?auto=format&fit=crop&w=1920&q=80" 
                        alt="Team on mountain" 
                        className="w-full h-full object-cover filter brightness-50"
                    />
                </div>
                <div className="relative z-10 text-center text-white px-4">
                    <h2 className="text-4xl md:text-6xl font-black font-montserrat mb-4">O NÁS</h2>
                    <p className="text-xl font-light">Kdo stojí za šílenstvím</p>
                </div>
             </header>

             <div className="max-w-4xl mx-auto px-4 py-20">
                <div className="prose prose-lg mx-auto text-gray-700">
                    <p className="text-2xl font-bold text-black mb-8 leading-relaxed">
                       "Nebyli jsme spokojeni s tím, co nabízely běžné cestovky. 'Dobrodružství' pro ně znamenalo jízdu autobusem bez klimatizace. Pro nás to znamená viset na laně 200 metrů nad zemí."
                    </p>
                    <p className="mb-6">
                        Adrenalin Junkies vznikli v roce 2020 jako odpověď na nudné dovolené. Jsme tým bývalých instruktorů přežití, horolezců a bláznů, kteří věří, že člověk se cítí nejvíce naživu, když je blízko smrti (obrazně řečeno... většinou).
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                        <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-600">
                            <h4 className="text-xl font-bold text-black mb-2">Bezpečnost (skoro) na prvním místě</h4>
                            <p className="text-sm">Máme nejlepší vybavení a certifikované průvodce. Riskujeme chytře, ne hloupě.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-600">
                            <h4 className="text-xl font-bold text-black mb-2">Lokální know-how</h4>
                            <p className="text-sm">Spolupracujeme s místními experty, kteří znají každý kámen a lavinový svah.</p>
                        </div>
                    </div>
                    <p>
                        Náš cíl je jednoduchý: Vrátit vás do práce v pondělí s pocitem, že tabulky v Excelu už nejsou tak děsivé, protože jste právě přežili víkend v Grónsku.
                    </p>
                </div>
             </div>
          </div>
        );

      case ViewState.CONTACT:
        return (
          <div className="animate-fade-in">
             <header className="relative h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img 
                        src="https://images.unsplash.com/photo-1486899430790-61dbf6f6d3f3?auto=format&fit=crop&w=1920&q=80" 
                        alt="Map and compass" 
                        className="w-full h-full object-cover filter brightness-50"
                    />
                </div>
                <div className="relative z-10 text-center text-white px-4">
                    <h2 className="text-4xl md:text-6xl font-black font-montserrat mb-4">KONTAKT</h2>
                    <p className="text-xl font-light">Pojďme naplánovat tvou expedici</p>
                </div>
             </header>

             <div className="max-w-6xl mx-auto px-4 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Info */}
                    <div>
                        <h3 className="text-3xl font-bold font-montserrat mb-8">KDE NÁS NAJDETE</h3>
                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="bg-red-100 p-3 rounded-full text-red-600">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Basecamp Praha</h4>
                                    <p className="text-gray-600">Adrenalinová 666<br/>150 00 Praha 5 - Smíchov</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-red-100 p-3 rounded-full text-red-600">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Email</h4>
                                    <p className="text-gray-600">info@adrenalinjunkies.cz<br/>sos@adrenalinjunkies.cz (pouze urgentní)</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-red-100 p-3 rounded-full text-red-600">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Telefon</h4>
                                    <p className="text-gray-600">+420 123 456 789<br/>(Po-Pá: 8:00 - 18:00)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-red-600">
                        <h3 className="text-2xl font-bold font-montserrat mb-6">NAPIŠTE NÁM</h3>
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Jméno</label>
                                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition" placeholder="Jan Novák" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition" placeholder="jan@example.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Zpráva</label>
                                <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition" placeholder="Chci skočit z letadla, ale bojím se výšek..."></textarea>
                            </div>
                            <button className="w-full bg-black text-white py-3 rounded-lg font-bold uppercase tracking-wide hover:bg-red-600 transition-colors duration-300">
                                Odeslat zprávu
                            </button>
                        </form>
                    </div>
                </div>
             </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-roboto selection:bg-red-200">
      
      {/* Navigation */}
      <nav className="bg-black text-white py-4 px-6 sticky top-0 z-40 shadow-xl">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div 
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => setCurrentView(ViewState.HOME)}
            >
                <div className="text-red-600">
                   <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L2 22h20L12 2zm0 3.8L18.5 20H5.5L12 5.8zM11 16h2v2h-2v-2zm0-6h2v4h-2v-4z"/>
                   </svg>
                </div>
                <h1 className="text-2xl font-black tracking-tighter italic font-montserrat">
                    ADRENALIN <span className="text-red-600">JUNKIES</span>
                </h1>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 font-bold text-sm uppercase tracking-widest">
                <button 
                    onClick={() => setCurrentView(ViewState.HOME)}
                    className={`hover:text-red-500 transition relative group ${currentView === ViewState.HOME ? 'text-red-500' : ''}`}
                >
                    Destinace
                    <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-red-500 transform origin-left transition-transform duration-300 ${currentView === ViewState.HOME ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                </button>
                <button 
                    onClick={() => setCurrentView(ViewState.ABOUT)}
                    className={`hover:text-red-500 transition relative group ${currentView === ViewState.ABOUT ? 'text-red-500' : ''}`}
                >
                    O nás
                    <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-red-500 transform origin-left transition-transform duration-300 ${currentView === ViewState.ABOUT ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                </button>
                <button 
                    onClick={() => setCurrentView(ViewState.CONTACT)}
                    className={`hover:text-red-500 transition relative group ${currentView === ViewState.CONTACT ? 'text-red-500' : ''}`}
                >
                    Kontakt
                    <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-red-500 transform origin-left transition-transform duration-300 ${currentView === ViewState.CONTACT ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                </button>
            </div>
            
            {/* Mobile Menu Icon (Placeholder functionality for now) */}
            <div className="md:hidden">
                <button className="text-white hover:text-red-500">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </div>
      </nav>

      {/* Dynamic Content */}
      {renderContent()}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="mb-6 cursor-pointer" onClick={() => setCurrentView(ViewState.HOME)}>
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

      {/* Modals */}
      <AIConsultant isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      <AdventureDetailModal adventure={selectedAdventure} onClose={() => setSelectedAdventure(null)} />
      
    </div>
  );
};

export default App;
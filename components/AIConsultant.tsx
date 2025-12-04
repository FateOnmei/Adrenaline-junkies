import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { ChatMessage } from '../types';
import { adventures } from '../data';

interface AIConsultantProps {
  isOpen: boolean;
  onClose: () => void;
}

const AIConsultant: React.FC<AIConsultantProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chatSession, setChatSession] = useState<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize Chat Session
  useEffect(() => {
    if (isOpen && !chatSession) {
        // Prepare context
        const adventuresContext = adventures.map(a => 
            `- ID: ${a.title}\n  Popis: ${a.description}\n  Cena: ${a.priceLevel}\n  Náročnost: ${a.difficulty}`
        ).join('\n\n');

        const systemInstruction = `
            Jsi "Adrenalin Bot", virtuální konzultant pro cestovní kancelář Adrenalin Junkies.
            
            Tvým úkolem je pomoci zákazníkovi vybrat jednu z našich 10 dovolených.
            Buď přátelský, energický a profesionální.
            
            Zde je seznam našich produktů:
            ${adventuresContext}
            
            Postupuj takto:
            1. Přivítej uživatele a zeptej se ho na jeho preference.
            2. Polož postupně nebo najednou otázky týkající se:
               - Rozpočtu (Finanční situace)
               - Fyzické zdatnosti
               - Odolnosti vůči strachu (Adrenalinový level)
            3. Na základě odpovědí doporuč 1 až 3 konkrétní zájezdy z nabídky. Vysvětli proč.
            
            Odpovídej stručně a výstižně. Používej češtinu.
            Pokud se uživatel zeptá na něco jiného, zdvořile ho vrať k výběru dovolené.
        `;

        try {
            const apiKey = process.env.API_KEY;
            if (!apiKey) {
                console.error("API Key is missing. Please set API_KEY environment variable.");
                setMessages([{ role: 'model', text: "Omlouvám se, ale nemám nastavený API klíč. Kontaktujte prosím správce webu." }]);
                return;
            }

            const ai = new GoogleGenAI({ apiKey: apiKey });
            const newChat = ai.chats.create({
                model: 'gemini-2.5-flash',
                config: {
                    systemInstruction: systemInstruction,
                    temperature: 0.7,
                }
            });
            setChatSession(newChat);
            
            // Initial greeting
            const startChat = async () => {
                setIsLoading(true);
                try {
                   const response: GenerateContentResponse = await newChat.sendMessage({ message: "Začni konverzaci přivítáním." });
                   setMessages([{ role: 'model', text: response.text || "Ahoj! Jsem tu, abych ti pomohl vybrat tu nejšílenější dovolenou." }]);
                } catch (e) {
                    console.error("Failed to start chat", e);
                    setMessages([{ role: 'model', text: "Omlouvám se, momentálně mám výpadek spojení. Zkus to prosím později." }]);
                } finally {
                    setIsLoading(false);
                }
            };
            startChat();
        } catch (error) {
            console.error("Error initializing AI", error);
            setMessages([{ role: 'model', text: "Došlo k chybě při inicializaci AI asistenta." }]);
        }
    }
  }, [isOpen, chatSession]);

  // Scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || !chatSession) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
        const response: GenerateContentResponse = await chatSession.sendMessage({ message: userMessage });
        const text = response.text || "Nerozuměl jsem, můžeš to zopakovat?";
        setMessages(prev => [...prev, { role: 'model', text }]);
    } catch (error) {
        console.error("Error sending message", error);
        setMessages(prev => [...prev, { role: 'model', text: "Došlo k chybě při komunikaci se serverem." }]);
    } finally {
        setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSend();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white w-full max-w-lg h-[600px] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fade-in-up">
        {/* Header */}
        <div className="bg-red-600 p-4 flex justify-between items-center text-white">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
             </div>
             <div>
                <h3 className="font-bold text-lg font-montserrat">AI Průvodce</h3>
                <p className="text-xs text-red-100 opacity-90">Najdu ti zážitek na míru</p>
             </div>
          </div>
          <button onClick={onClose} className="hover:bg-red-700 p-1 rounded transition">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div 
                className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-black text-white rounded-tr-none' 
                    : 'bg-white text-gray-800 border border-gray-200 rounded-tl-none'
                }`}
              >
                {/* Simple Markdown-like bold rendering */}
                {msg.text.split('**').map((part, i) => 
                    i % 2 === 1 ? <strong key={i}>{part}</strong> : part
                )}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
               <div className="bg-white border border-gray-200 p-3 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
               </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 bg-white border-t border-gray-100">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Napiš zprávu..."
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
              disabled={isLoading}
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <svg className="w-5 h-5 transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIConsultant;
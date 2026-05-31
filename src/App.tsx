import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HeartHandshake, Phone, Mail, MapPin } from 'lucide-react';
import { animals } from './data';
import { AnimalCard } from './components/AnimalCard';
import { AdoptionModal } from './components/AdoptionModal';
import { Animal } from './types';

export default function App() {
  const [filter, setFilter] = useState<'All' | 'Dog' | 'Cat'>('All');
  const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null);

  const filteredAnimals = animals.filter(
    (animal) => filter === 'All' || animal.species === filter
  );

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-brand-yellow/30">
      {/* Header */}
      <header className="bg-white py-6 sticky top-0 z-40 border-b border-brand-light shadow-sm">
        <div className="max-w-6xl mx-auto px-4 md:px-6 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="bg-brand-orange p-2 rounded-xl text-white shadow-sm">
              <HeartHandshake size={28} />
            </div>
            <h1 className="text-2xl font-heading font-extrabold tracking-tight text-gray-800">
              Paws <span className="text-brand-orange">&</span> Hearts
            </h1>
          </motion.div>
          
          <nav className="hidden md:flex gap-6 font-semibold text-gray-600">
            <a href="#" className="hover:text-brand-teal transition-colors">首頁</a>
            <a href="#adopt" className="text-brand-teal">認養專區</a>
            <a href="#contact" className="hover:text-brand-teal transition-colors">聯絡我們</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-brand-light/40 py-16 md:py-24 overflow-hidden relative">
        <div className="max-w-6xl mx-auto px-4 md:px-6 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-gray-800 mb-6"
          >
            遇見你生命中的 <span className="text-brand-teal relative inline-block">
              完美伴侶
              <motion.span 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute bottom-1 left-0 right-0 h-3 bg-brand-yellow/50 -z-10 rounded-full"
                style={{ transformOrigin: 'left' }}
              />
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-medium"
          >
            在這裡尋找等待愛的新成員，每一雙亮晶晶的眼睛，都渴望一個溫暖的家。
          </motion.p>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 text-brand-yellow/40 rotate-12 blur-[1px]">
          <span className="text-6xl">🐾</span>
        </div>
        <div className="absolute bottom-10 right-20 text-brand-teal/30 -rotate-12 blur-[1px] scale-150">
          <span className="text-6xl">🧶</span>
        </div>
      </section>

      {/* Main Content */}
      <main id="adopt" className="flex-1 max-w-6xl mx-auto px-4 md:px-6 py-16 w-full">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
          <h2 className="text-3xl font-heading font-bold text-gray-800 flex items-center gap-2">
            毛孩尋家中
            <span className="text-2xl">✨</span>
          </h2>
          
          {/* Filter */}
          <div className="flex bg-white rounded-full p-1 border border-brand-light shadow-sm">
            {(['All', 'Dog', 'Cat'] as const).map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  filter === type 
                    ? 'bg-brand-orange text-white shadow-md' 
                    : 'text-gray-500 hover:text-gray-800 hover:bg-orange-50'
                }`}
              >
                {type === 'All' ? '全部' : type === 'Dog' ? '狗狗' : '貓咪'}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredAnimals.map((animal) => (
              <AnimalCard 
                key={animal.id} 
                animal={animal} 
                onAdoptClick={setSelectedAnimal} 
              />
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredAnimals.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            <span className="text-4xl mb-4 block">🔍</span>
            <p className="text-lg font-medium">目前沒有符合條件的毛孩喔！</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white pt-16 pb-8 rounded-t-[3rem] mt-12">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <HeartHandshake size={24} className="text-brand-orange" />
                <h3 className="text-xl font-heading font-bold">Paws & Hearts</h3>
              </div>
              <p className="text-gray-400 leading-relaxed font-medium">
                我們致力於為每一隻流浪動物找到溫暖的家。<br/>領養代替購買，讓愛延續。
              </p>
            </div>
            
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold mb-6 text-brand-yellow">聯絡資訊</h4>
                <ul className="space-y-4 text-gray-400 font-medium">
                  <li className="flex items-start gap-3">
                    <MapPin size={20} className="text-brand-teal shrink-0 mt-0.5" />
                    <span>台北市溫馨區狗狗大道123號<br/>(請先預約參觀)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone size={20} className="text-brand-teal shrink-0" />
                    <span>02-2345-6789</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail size={20} className="text-brand-teal shrink-0" />
                    <span>hello@pawsandhearts.org</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-6 text-brand-yellow">開放時間</h4>
                <ul className="space-y-3 text-gray-400 font-medium">
                  <li className="flex justify-between border-b border-gray-800 pb-2">
                    <span>週一至週五</span>
                    <span>11:00 - 19:00</span>
                  </li>
                  <li className="flex justify-between border-b border-gray-800 pb-2">
                    <span>週六至週日</span>
                    <span>10:00 - 20:00</span>
                  </li>
                  <li className="flex justify-between text-brand-orange mt-2">
                    <span>國定假日依粉專公告為主</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 font-medium text-sm">
            <p>&copy; {new Date().getFullYear()} Paws & Hearts Adoption Center. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Modal Render */}
      <AnimatePresence>
        {selectedAnimal && (
          <AdoptionModal 
            animal={selectedAnimal} 
            onClose={() => setSelectedAnimal(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}


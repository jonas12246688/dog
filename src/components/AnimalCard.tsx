import { motion } from 'motion/react';
import { Animal } from '../types';
import { ImageCarousel } from './ImageCarousel';
import { Heart, Info, History, User, PawPrint } from 'lucide-react';

interface AnimalCardProps {
  animal: Animal;
  onAdoptClick: (animal: Animal) => void;
}

export function AnimalCard({ animal, onAdoptClick }: AnimalCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-orange-50 overflow-hidden flex flex-col h-full"
    >
      <ImageCarousel images={animal.images} />
      
      <div className="p-6 flex-1 flex flex-col relative">
        <div className="absolute top-0 right-6 -translate-y-1/2 bg-brand-yellow text-white w-12 h-12 flex items-center justify-center rounded-full border-4 border-white shadow-sm">
          {animal.species === 'Dog' ? <PawPrint size={20} /> : <span className="text-xl">🐱</span>}
        </div>

        <h3 className="text-2xl font-heading font-extrabold text-gray-800 mb-1">{animal.name}</h3>
        <p className="text-brand-orange font-semibold mb-4 text-sm">{animal.breed}</p>
        
        <div className="space-y-3 mb-6 flex-1 text-sm text-gray-600">
          <div className="flex items-start gap-2">
            <User size={16} className="text-brand-teal mt-0.5 shrink-0" />
            <span><span className="font-semibold">年齡 / 性別:</span> {animal.age} • {animal.gender === 'Male' ? '公' : '母'}</span>
          </div>
          <div className="flex items-start gap-2">
            <Info size={16} className="text-brand-teal mt-0.5 shrink-0" />
            <span><span className="font-semibold">個性:</span> {animal.personality}</span>
          </div>
          <div className="flex items-start gap-2">
            <History size={16} className="text-brand-teal mt-0.5 shrink-0" />
            <span><span className="font-semibold">是否被棄養過:</span> {animal.abandonedHistory}</span>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onAdoptClick(animal)}
          className="w-full py-3.5 bg-brand-teal hover:bg-[#25a99d] text-white rounded-2xl font-bold flex items-center justify-center gap-2 transition-colors shadow-sm"
        >
          <Heart size={18} fill="currentColor" />
          我想認養
        </motion.button>
      </div>
    </motion.div>
  );
}

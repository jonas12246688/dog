import { motion } from 'motion/react';
import { X } from 'lucide-react';
import { Animal } from '../types';

interface AdoptionModalProps {
  animal: Animal;
  onClose: () => void;
}

export function AdoptionModal({ animal, onClose }: AdoptionModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-white rounded-3xl p-6 md:p-8 w-full max-w-md relative z-10 shadow-2xl border-2 border-brand-light"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors"
        >
          <X size={20} />
        </button>
        
        <div className="text-center mb-6">
          <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 border-4 border-brand-yellow shadow-md">
            <img src={animal.images[0]} alt={animal.name} className="w-full h-full object-cover" />
          </div>
          <h2 className="text-2xl font-heading font-extrabold text-gray-800">認養 {animal.name}</h2>
          <p className="text-brand-orange mt-1 font-medium">給他一個溫暖的家吧！</p>
        </div>

        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('感謝您的申請！我們會盡快與您聯繫。'); onClose(); }}>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">您的姓名</label>
            <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all" placeholder="例如: 王小明" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">聯絡電話</label>
            <input required type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all" placeholder="例如: 0912-345-678" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
            <input required type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all" placeholder="example@email.com" />
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-3.5 bg-brand-orange hover:bg-[#e88f17] text-white rounded-xl font-bold mt-2 shadow-sm transition-colors"
          >
            送出申請表
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}

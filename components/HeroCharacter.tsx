import React from 'react';
import { motion } from 'framer-motion';

export const HeroCharacter: React.FC = () => {
  return (
    <motion.div 
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        type: "spring",
        stiffness: 120,
        damping: 20,
        delay: 0.2 
      }}
      className="relative flex flex-col items-center justify-center"
    >
        {/* Sun Aura Behind */}
        <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -z-10 w-[120%] h-[120%] bg-gradient-to-br from-yellow-300/30 to-orange-500/10 rounded-full blur-3xl"
        />

        {/* Character Illustration Representation using CSS/SVG */}
        {/* Since we can't use the exact image, we build a stylized 'student' avatar using shapes/Tailwind */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 bg-white rounded-full shadow-2xl border-8 border-white/20 overflow-hidden flex items-end justify-center bg-gradient-to-b from-blue-200 to-blue-50">
            
            {/* Background elements inside circle */}
            <div className="absolute top-10 right-10 w-16 h-16 bg-yellow-400 rounded-full opacity-80 blur-sm" />
            <div className="absolute top-20 left-10 w-8 h-8 bg-white/50 rounded-full" />

            {/* Stylized Student SVG */}
            <svg viewBox="0 0 200 200" className="w-full h-full transform translate-y-4">
                <defs>
                    <linearGradient id="uniform" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#fff" />
                        <stop offset="100%" stopColor="#f0f0f0" />
                    </linearGradient>
                </defs>
                
                {/* Hair Back */}
                <path d="M60,100 Q50,150 40,180 L160,180 Q150,150 140,100 Z" fill="#3e2723" />
                
                {/* Body/Shirt */}
                <path d="M50,180 L150,180 L150,220 L50,220 Z" fill="url(#uniform)" />
                <path d="M50,180 Q100,200 150,180" fill="none" stroke="#ddd" strokeWidth="2" />
                
                {/* Tie */}
                <path d="M100,180 L90,210 L100,220 L110,210 Z" fill="#ef4444" />
                
                {/* Neck */}
                <rect x="85" y="150" width="30" height="40" fill="#ffccbc" />
                
                {/* Face */}
                <ellipse cx="100" cy="120" rx="45" ry="50" fill="#ffccbc" />
                
                {/* Hair Front */}
                <path d="M55,120 Q50,70 100,60 Q150,70 145,120 Q145,90 100,90 Q55,90 55,120" fill="#3e2723" />
                
                {/* Eyes */}
                <circle cx="85" cy="120" r="4" fill="#1f2937" />
                <circle cx="115" cy="120" r="4" fill="#1f2937" />
                
                {/* Smile */}
                <path d="M85,140 Q100,150 115,140" fill="none" stroke="#be123c" strokeWidth="3" strokeLinecap="round" />
                
                {/* Cheeks */}
                <circle cx="75" cy="130" r="5" fill="#f43f5e" opacity="0.3" />
                <circle cx="125" cy="130" r="5" fill="#f43f5e" opacity="0.3" />
            </svg>
        </div>

        {/* Floating Badge */}
        <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 bg-white text-blue-900 px-6 py-2 rounded-full font-bold shadow-lg border-b-4 border-blue-200"
        >
            Anak Hebat!
        </motion.div>
    </motion.div>
  );
};
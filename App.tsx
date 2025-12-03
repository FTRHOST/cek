import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { HABITS } from './constants';
import { HabitCard } from './components/HabitCard';
import { HeroCharacter } from './components/HeroCharacter';
import { BackgroundParticles } from './components/BackgroundParticles';

const App: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-indigo-900 text-white font-sans overflow-hidden relative selection:bg-yellow-400 selection:text-blue-900">
      
      {/* Animated Background Elements */}
      <BackgroundParticles />

      {/* Main Content Container */}
      <main className="relative z-10 container mx-auto px-4 py-8 md:py-12 flex flex-col items-center min-h-screen">
        
        {/* Header / Title Section */}
        <motion.header 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-12 relative"
        >
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-full h-32 bg-yellow-400/20 blur-[60px] rounded-full pointer-events-none" />
          
          <motion.div 
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 mb-4 shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span className="text-sm font-bold tracking-wider uppercase text-yellow-100">Generasi Emas</span>
          </motion.div>

          <h1 className="font-display text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-white to-yellow-300 drop-shadow-sm mb-2 leading-tight">
            7 KEBIASAAN
          </h1>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-blue-200 tracking-wide drop-shadow-md">
            ANAK INDONESIA HEBAT
          </h2>
        </motion.header>

        {/* Central Visual Composition */}
        <div className="w-full max-w-6xl relative flex flex-col xl:flex-row items-center justify-center gap-12 xl:gap-0 mt-4">
          
          {/* Left Column Habits (1-3) */}
          <div className="flex-1 flex flex-col gap-6 w-full max-w-md xl:items-end z-20 order-2 xl:order-1">
            {HABITS.slice(0, 3).map((habit, index) => (
              <HabitCard 
                key={habit.id} 
                habit={habit} 
                index={index} 
                isActive={activeId === habit.id}
                onHover={setActiveId}
                alignment="right"
              />
            ))}
          </div>

          {/* Center Character (The "Visual Anchor") */}
          <div className="flex-none z-10 order-1 xl:order-2 mb-8 xl:mb-0 w-full max-w-sm md:max-w-md xl:mx-8">
            <HeroCharacter />
             {/* Center Top Habit (4) - Often depicted centrally in the poster */}
             <div className="mt-8 flex justify-center">
               <HabitCard 
                 habit={HABITS[3]} 
                 index={3} 
                 isActive={activeId === HABITS[3].id}
                 onHover={setActiveId}
                 alignment="center"
               />
             </div>
          </div>

          {/* Right Column Habits (5-7) */}
          <div className="flex-1 flex flex-col gap-6 w-full max-w-md xl:items-start z-20 order-3">
             {HABITS.slice(4, 7).map((habit, index) => (
              <HabitCard 
                key={habit.id} 
                habit={habit} 
                index={index + 4} 
                isActive={activeId === habit.id}
                onHover={setActiveId}
                alignment="left"
              />
            ))}
          </div>

        </div>

        {/* Footer */}
        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-20 text-center text-blue-200/60 text-sm max-w-lg mx-auto"
        >
          <p>"Kebiasaan anak Indonesia hebat adalah sebuah perilaku yang berfokus pada tujuan-tujuan utama yang diharapkan dapat diinternalisasi oleh anak-anak sejak dini."</p>
        </motion.footer>

      </main>
    </div>
  );
};

export default App;
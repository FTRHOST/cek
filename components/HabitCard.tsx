import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Habit } from '../types';

interface HabitCardProps {
  habit: Habit;
  index: number;
  isActive: boolean;
  onHover: (id: number | null) => void;
  alignment: 'left' | 'right' | 'center';
}

export const HabitCard: React.FC<HabitCardProps> = ({ habit, index, isActive, onHover, alignment }) => {
  const Icon = habit.icon;

  // Animation variants
  const cardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      x: alignment === 'left' ? 50 : alignment === 'right' ? -50 : 0,
      y: alignment === 'center' ? 50 : 0,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      x: 0, 
      y: 0,
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 12, 
        delay: index * 0.15 
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.05, rotate: alignment === 'left' ? 2 : -2 }}
      onMouseEnter={() => onHover(habit.id)}
      onMouseLeave={() => onHover(null)}
      className={`relative w-full cursor-pointer group`}
    >
      {/* Background Glow Effect */}
      <div 
        className={`absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 bg-gradient-to-r ${habit.gradient}`} 
        style={{ transform: 'translateY(10px)' }}
      />

      <div className={`
        relative overflow-hidden
        bg-white/90 backdrop-blur-xl border border-white/40
        rounded-2xl shadow-xl p-4 flex items-center gap-4
        transform transition-all duration-300
        ${alignment === 'right' ? 'xl:flex-row-reverse xl:text-right' : 'flex-row text-left'}
        ${isActive ? 'ring-4 ring-white/50 z-20 scale-105' : 'z-10'}
      `}>
        
        {/* Number Badge */}
        <div className={`
            absolute -top-2 -left-2 w-8 h-8 rounded-full 
            flex items-center justify-center font-bold text-white shadow-lg
            bg-gradient-to-br ${habit.gradient}
            ${alignment === 'right' ? 'xl:left-auto xl:-right-2' : ''}
        `}>
            {habit.id}
        </div>

        {/* Icon Container */}
        <div className={`
            flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center shadow-inner
            bg-gradient-to-br ${habit.gradient} text-white
            group-hover:rotate-12 transition-transform duration-300
        `}>
            <Icon size={32} strokeWidth={2.5} />
        </div>

        {/* Text Content */}
        <div className="flex-1 min-w-0">
            <h3 className={`font-display text-xl font-bold mb-1 leading-tight text-slate-800`}>
                {habit.title}
            </h3>
            <p className="text-sm font-sans text-slate-600 leading-snug">
                {habit.description}
            </p>
        </div>
      </div>
    </motion.div>
  );
};
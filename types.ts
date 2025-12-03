import { LucideIcon } from 'lucide-react';

export interface Habit {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  accentColor: string;
  gradient: string;
}
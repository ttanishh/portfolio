
import React from 'react';
import { Calendar } from 'lucide-react';

const MonthlyGoalBanner: React.FC = () => {
  // Get current month name
  const currentMonth = new Date().toLocaleString('default', { month: 'long' });
  
  return (
    <div className="fixed bottom-4 left-0 right-0 z-40 mx-auto w-5/6 md:w-3/4 lg:w-2/3 xl:w-1/2">
      <div className="glass-card shadow-lg flex items-center gap-3 py-3 px-5 text-white/90 light-mode:text-gray-800">
        <Calendar className="text-electric flex-shrink-0" />
        <div className="flex-grow">
          <span className="font-semibold mr-2">📌 {currentMonth} Goal:</span>
          Finish Web3 Login + Collaborator UI – 
          <a 
            href="#contact" 
            className="ml-1 text-electric hover:underline transition-all"
          >
            Wanna join?
          </a>
        </div>
      </div>
    </div>
  );
};

export default MonthlyGoalBanner;

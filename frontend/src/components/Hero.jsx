import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div id='hero' className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 bg-[#0a0a0a]">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-100 bg-yellow-500/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-3xl">
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Share Your <span className="bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Thoughts</span> <br />
          With The World
        </h2>
        
        <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          A minimalist dark-themed platform for writers, thinkers, and creators. 
          Connect with others through the power of words.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition">
            Start Reading <ArrowRight size={18} />
          </button>
          <button className="bg-zinc-900 text-white border border-zinc-800 px-8 py-3 rounded-full font-bold hover:bg-zinc-800 transition">
            Join Community
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
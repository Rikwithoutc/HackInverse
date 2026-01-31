import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger fade-in on mount
    setIsVisible(true);
  }, []);

  return (
    <div className={`min-h-screen bg-[#0a0a0a] transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Visual Divider (Optional) */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
        
        <About />
      </main>

      {/* Simple Footer to close the page */}
      <footer className="py-10 text-center text-zinc-600 text-sm border-t border-zinc-900">
        &copy; {new Date().getFullYear()} DarkBlog. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
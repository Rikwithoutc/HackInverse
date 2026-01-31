import { LogIn } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="flex items-center justify-between px-8 py-6 bg-transparent fixed top-0 w-full z-50 backdrop-blur-sm">
      <div className="flex items-center gap-8">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent cursor-pointer">
          DarkBlog
        </h1>

        {/* Menu bar */}
        <div className="hidden md:flex gap-6 text-gray-400 text-sm font-medium">
          <button
            onClick={() => scrollToSection("hero")}
            className="hover:text-white transition focus:text-white focus:bg-zinc-800 px-3 py-1 rounded-md"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="hover:text-white transition focus:text-white focus:bg-zinc-800 px-3 py-1 rounded-md"
          >
            About
          </button>
          <a href="#" className="hover:text-white transition">
            All Posts
          </a>
        </div>
      </div>

      {/* Updated Login and Sign Up Buttons */}
      <div className="flex items-center gap-6">
        <button className="flex items-center gap-2 text-white hover:text-cyan-400 transition-colors font-semibold">
          <LogIn size={20} strokeWidth={2.5} />
          <span>Log In</span>
        </button>

        <Link
          to="/sign-in"
          className="text-white hover:text-cyan-400 transition-colors font-semibold"
        >
          <button className="bg-[#22d3ee] hover:bg-[#06b6d4] text-zinc-900 px-6 py-2.5 rounded-2xl font-bold transition-all shadow-lg shadow-cyan-500/20">
            Sign Up
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

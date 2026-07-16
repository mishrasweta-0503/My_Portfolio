'use client';
import React from 'react';

export default function Home() {
  return (
    // 1. The main container needs to be relative and hidden overflow so the glowing orbs don't stretch the page.
    <div className="min-h-screen w-full relative bg-bgDark text-textMain overflow-hidden selection:bg-glowPurple/30">
      
      {/* 2. THE GLOWING BACKGROUND ORBS */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Top Left Violet Glow */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-glowPurple/30 blur-[130px]" />
        
        {/* Mid-Right Warm Crimson Glow */}
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-glowPink/25 blur-[150px]" />
        
        {/* Bottom Left Violet Glow */}
        <div className="absolute bottom-[10%] left-[-20%] w-[600px] h-[600px] rounded-full bg-glowPurple/20 blur-[150px]" />
      </div>

      {/* 3. CONTENT LAYER (Keep z-10 so it sits on top of the glows) */}
      <div className="relative z-10 w-full">
        
        {/* Centered Mobile-Friendly Header */}
        <header className="w-full py-6 px-4 flex justify-center border-b border-textMuted/10 sticky top-0 bg-bgDark/60 backdrop-blur-md">
          <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 font-mono text-[11px] sm:text-xs tracking-widest text-textMuted">
            <a href="#about" className="hover:text-textMain transition-colors">ABOUT</a>
            <a href="#experience" className="hover:text-textMain transition-colors">EXPERIENCE</a>
            <a href="#projects" className="hover:text-textMain transition-colors">PROJECTS</a>
            <a href="#contact" className="hover:text-textMain transition-colors">CONTACT</a>
            <a 
              href="/resume.pdf" 
              target="_blank" 
              className="border border-textMuted/30 hover:border-textMain px-3 py-1 rounded transition-all text-textMain"
            >
              RESUME
            </a>
          </nav>
        </header>

        {/* This is where your sections will render */}
        <main className="max-w-4xl mx-auto px-6 py-20">
          {/* We will build the intro layout right here next! */}
        </main>

      </div>
    </div>
  );
}
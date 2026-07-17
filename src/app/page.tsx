'use client';
import React from 'react';
import Header from '../components/layout/Header';
import About from '../components/sections/About';
import Experience from '../components/sections/Experience';

export default function Home() {
  return (
    <div className="min-h-screen w-full relative bg-bgDark text-textMain overflow-hidden">
      
      {/* 
        FIXED BACKGROUND LAYER:
        Using pointer-events-none ensures these decorative gradients are completely invisible to mouse events,
        allowing clicks to pass straight through to your buttons underneath.
      */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        {/* Your gradient divs here, e.g. */}
        <div className="absolute top-[-10%] left-[-20%] w-[50vw] h-[50vw] bg-accentColor/10 rounded-full blur-[120px]" />
        <div className="absolute top-[30%] right-[-20%] w-[40vw] h-[40vw] bg-accentColor/5 rounded-full blur-[140px]" />
      </div>
      
      {/* CONTENT LAYER */}
      <div className="relative z-10 w-full pointer-events-auto">
        <Header /> {/* Renders the sticky navigation */}
        
        <main className="max-w-5xl mx-auto px-6 py-12 md:py-24 flex flex-col gap-32">
          <About />
          <Experience />
        </main>
      </div>

    </div>
  );
}
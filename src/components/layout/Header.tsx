'use client'
import React from 'react';

export default function Header(){
    return(
        <div className="w-full py-6 px-4 flex justify-center border-b border-textMuted/10 sticky top-0 bg-bgDark/60 backdrop-blur-md z-50">
            <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 font-mono text-[11px] sm:text-sm tracking-widest text-textMuted">
                <a href="#about" className="hover:text-textMain transition-colors">About</a>
                <a href="#experience" className="hover:text-textMain transition-colors">Experience</a>
                <a href="#projects" className="hover:text-textMain transition-colors">Projects</a>
                <a href="#contact" className="hover:text-textMain transition-colors">Contact</a>
                <a href="/SwetaMishraResumeUAE.pdf" target="_blank" rel="noopener noreferrer" className="border border-textMuted/30 hover:border-textMain px-3 py-1 rounded transition-all text-textMain">Resume</a>
            </nav>       
        </div>
    )
}
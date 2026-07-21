'use client';
import React from 'react';

export default function About() {
  return (
    <section id="about" className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-6 items-center py-6 text-lg sm:text-xl">
      
      {/* Left side: Profile image & Orbiting tech stack */}
      <div className="lg:col-span-5 flex justify-center items-center relative h-[350px] w-full">
        <div className="absolute w-64 h-64 rounded-full border border-textMuted/10 pointer-events-none" />
        
        <div className="relative w-48 h-48 rounded-full overflow-hidden border-2 border-accentColor/40 p-1 bg-bgDark z-10 shadow-2xl">
          <img 
            src="/sweta.jpeg" 
            alt="Sweta Mishra" 
            className="w-full h-full object-cover rounded-full"
            onError={(e) => {
              // Fallback placeholder image if local profile.jpg is missing
              e.currentTarget.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400";
            }}
          />
        </div>

        {/* Floating Stack Icons */}
        {/* 1. React */}
        <div className="absolute top-[5%] left-[20%] z-20 animate-float-slow bg-bgDark/90 p-2.5 rounded-xl border border-textMuted/20 shadow-lg hover:border-accentColor/60 transition-all group">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-7 h-7 group-hover:scale-110 transition-transform" alt="React" />
        </div>

        {/* 2. Node.js */}
        <div className="absolute top-[5%] right-[20%] z-20 animate-float-delayed bg-bgDark/90 p-2.5 rounded-xl border border-textMuted/20 shadow-lg hover:border-accentColor/60 transition-all group">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="w-7 h-7 group-hover:scale-110 transition-transform" alt="Node.js" />
        </div>

        {/* 3. Python/Flask */}
        <div className="absolute bottom-[5%] left-[20%] z-20 animate-float-delayed bg-bgDark/90 p-2.5 rounded-xl border border-textMuted/20 shadow-lg hover:border-accentColor/60 transition-all group">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="w-7 h-7 group-hover:scale-110 transition-transform" alt="Python" />
        </div>

        {/* 4. PostgreSQL */}
        <div className="absolute bottom-[5%] right-[20%] z-20 animate-float-slow bg-bgDark/90 p-2.5 rounded-xl border border-textMuted/20 shadow-lg hover:border-accentColor/60 transition-all group">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" className="w-7 h-7 group-hover:scale-110 transition-transform" alt="PostgreSQL" />
        </div>

        {/* 5. TypeScript */}
        <div className="absolute top-[38%] left-[-10%] z-20 animate-float-slow bg-bgDark/90 p-2.5 rounded-xl border border-textMuted/20 shadow-lg hover:border-accentColor/60 transition-all group">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" className="w-7 h-7 group-hover:scale-110 transition-transform" alt="TypeScript" />
        </div>

        {/* 7. Tailwind CSS */}
        <div className="absolute top-[20%] left-[2%] z-20 animate-float-delayed bg-bgDark/90 p-2.5 rounded-xl border border-textMuted/20 shadow-lg hover:border-accentColor/60 transition-all group">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" className="w-7 h-7 group-hover:scale-110 transition-transform" alt="Tailwind CSS" />
        </div>

        {/* 8. MongoDB */}
        <div className="absolute top-[20%] right-[2%] z-20 animate-float-slow bg-bgDark/90 p-2.5 rounded-xl border border-textMuted/20 shadow-lg hover:border-accentColor/60 transition-all group">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" className="w-7 h-7 group-hover:scale-110 transition-transform" alt="MongoDB" />
        </div>

        {/* 9. Postman */}
        <div className="absolute bottom-[20%] left-[2%] z-20 animate-float-slow bg-bgDark/90 p-2.5 rounded-xl border border-textMuted/20 shadow-lg hover:border-accentColor/60 transition-all group">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" className="w-7 h-7 group-hover:scale-110 transition-transform" alt="Postman" />
        </div>

        {/* 10. Docker */}
        <div className="absolute bottom-[20%] right-[2%] z-20 animate-float-delayed bg-bgDark/90 p-2.5 rounded-xl border border-textMuted/20 shadow-lg hover:border-accentColor/60 transition-all group">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" className="w-7 h-7 group-hover:scale-110 transition-transform" alt="Docker" />
        </div>

        {/* 11. HTML5 */}
        <div className="absolute bottom-[38%] left-[-10%] z-20 animate-float-delayed bg-bgDark/90 p-2.5 rounded-xl border border-textMuted/20 shadow-lg hover:border-accentColor/60 transition-all group">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="w-7 h-7 group-hover:scale-110 transition-transform" alt="HTML5" />
        </div>
      </div>

      {/* Right side: Bio */}
      <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
        <span className="font-mono text-accentColor text-sm sm:text-base tracking-wider mb-3 block">
          👋 Hello there! I am
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-textMain tracking-tight mb-4">
          Sweta Mishra
        </h1>
        <h2 className="text-2xl sm:text-4xl font-bold text-textMuted tracking-tight mb-6">
          Full-Stack & Mobile App Developer
        </h2>
        <p className="text-textMuted text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
          I design and construct clean, high-performance web applications and fluid cross-platform mobile experiences. Specializing in modern JavaScript architectures, backend databases, and robust APIs.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
          <a 
            href="#projects" 
            className="bg-accentColor text-bgDark px-6 py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-all shadow-lg shadow-accentColor/20"
          >
            Explore Projects
          </a>
          <a 
            href="#contact" 
            className="border border-textMuted/30 hover:border-textMain px-6 py-3 rounded-lg font-semibold text-sm transition-all"
          >
            Get In Touch
          </a>
        </div>
      </div>

    </section>
  );
}
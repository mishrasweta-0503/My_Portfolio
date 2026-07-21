'use client';
import React, { useState } from 'react';

interface Job {
  company: string;
  role: string;
  duration: string;
  bullets: string[];
  skills: string[];
}

export default function Experience() {
  const jobs: Job[] = [
    {
      company: "Freelance(Remote)",
      role: "Full Stack Developer",
      duration: "2024 - Present",
      bullets: [
        "Architected and deployed ExpiryGuard, a React Native mobile application integrated with Supabase for user authentication and backend services, implementing automated push notifications to handle real-time user alerts targeted for publication on the App Store and Google Play Store.",
        "Developed a full-stack, Reddit-integrated search and detail application using React, leveraging external APIs to handle real-time data retrieval and responsive UI states.",
        "Created FixIt, a web application utilizing Python and Django, implementing secure workflows, authentication, and relational data models, while successfully managing environment configurations and automated deployment pipelines via Render.",
        "Engineered DevStack, a robust Python/Flask web application featuring secure user authentication, registration forms, and relational database connectivity."
      ],
      skills: ["React Native", "Expo", "React", "TypeScript", "Python", "Flask", "Django", "Tailwind CSS","Node.js", "PostgreSQL", "Supabase",]
    },
    {
      company: "Tetsuyu HealthCare Holdings",
      role: "React Native Developer",
      duration: "April 2023 - October 2023",
      bullets: [
        "Architected and implemented a high-performance messaging/chat feature from scratch with robust support for rich media and file attachments.",
        "Optimized mobile app bundle sizes and streamlined build configurations using Expo, improving runtime performance across iOS and Android.",
        "Collaborated closely with designers and product managers to rapidly translate Figma frames into responsive React Native layouts."
      ],
      skills: ["React Native", "Expo", "TypeScript", "WebSocket", "Tailwind CSS", "PostgreSQL"]
    },
    {
        company: "National University of Singapore",
        role: "Masters Student",
        duration: "2022 - 2024",
        bullets: [
          "Engineered scalable full-stack software systems and data pipelines to support intensive academic research applications and university-wide digital workflows.",
          "Optimized relational and non-relational database architectures, drastically reducing API query latencies for highly concurrent user environments.",
          "Refactored legacy codebases into modular, maintainable micro-frontend elements, improving overall component reusability and platform load times."
        ],
        skills: ["Next.js", "React", "Python", "PostgreSQL", "REST APIs", "MongoDB", "MLOps", "DevOps", "Docker", "Data Structures", "REST APIs"]
    },
    {
        company: "Tech Mahindra",
        role: "Software Engineer",
        duration: "2016 - 2019",
        bullets: [
          "Developed and optimized enterprise-scale web applications, ensuring high availability, strict security protocol adherence, and cross-browser responsiveness.",
          "Designed robust backend APIs and integrated multiple third-party services, expanding core application features and workflow automations.",
          "Participated actively in agile sprints, code reviews, and comprehensive unit/integration testing cycles to guarantee stable production deployments."
        ],
        skills: ["Node.js", "Express", "MongoDB", "Docker", "JavaScript"]
    },
    {
        company: "IntelliTrain",
        role: "Web Developer",
        duration: "2020",
        bullets: [
          "Designed and maintained responsive web applications, learning management components, and landing pages optimizing the overall student enrollment pipeline.",
          "Integrated interactive user interfaces with modern client-side layout frameworks, maintaining consistent responsive behaviors across mobile and desktop devices.",
          "Managed database schemas and handled minor server configurations to support smooth content delivery networks and seamless user workflows."
        ],
        skills: ["HTML5", "CSS3", "JavaScript", "SQL", "Git"]
    },
    {
        company: "Wipro",
        role: "Project Engineer",
        duration: "2016",
        bullets: [
          "Delivered production-ready modules for large-scale corporate enterprise systems, applying strict software engineering design patterns and principles.",
          "Collaborated with QA engineers to automate critical regression testing scripts, drastically reducing pre-release cycle times and bugs.",
          "Analyzed technical specifications, wrote extensive system documentation, and troubleshot complex database issues under tight sprint deadlines."
        ],
        skills: ["SQL", "Agile", "Postman"]
    }
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="py-12 max-w-4xl mx-auto px-4 sm:px-6 relative z-20">
      
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-textMain tracking-tight">
          Where I've Worked
        </h2>
        <div className="h-[1px] flex-grow bg-textMuted/20" />
      </div>

      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
        
        {/* SIDEBAR TABS */}
        <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible border-b md:border-b-0 md:border-l border-textMuted/10 pb-4 md:pb-0 w-full md:w-[220px] shrink-0">
          {jobs.map((job, idx) => (
            <button
              key={`tab-link-${idx}`}
              onClick={() => {
                console.log("Clicked:", idx);
                console.log(activeTab);
                setActiveTab(idx)
                }}
              type="button"
              className={`w-full text-left px-4 py-3 font-mono text-xs tracking-wider transition-all whitespace-nowrap cursor-pointer md:border-l-2 block ${
                activeTab === idx
                  ? "border-accentColor text-accentColor bg-accentColor/10 font-bold"
                  : "border-transparent text-textMuted hover:text-textMain hover:bg-white/5"
              }`}
            >
              {job.company}
            </button>
          ))}
        </div>

        {/* REFACTORED MUTED/ACTIVE WRAPPERS */}
        <div className="flex-1 min-w-0">
          {jobs.map((job, idx) => (
            <div 
              key={`panel-content-${idx}`} 
              className={activeTab === idx ? "block animate-fadeIn" : "hidden"}
            >
              <h3 className="text-lg sm:text-xl font-bold text-textMain">
                {job.role} <span className="text-accentColor">@ {job.company}</span>
              </h3>
              <p className="font-mono text-xs text-textMuted mt-1 mb-6">
                {job.duration}
              </p>

              <ul className="space-y-4 mb-6">
                {job.bullets.map((bullet, bIdx) => (
                  <li key={`b-${idx}-${bIdx}`} className="flex items-start gap-4 text-md text-textMuted leading-relaxed">
                    <span className="text-accentColor mt-1.5 text-xs flex-shrink-0">◆</span>
                    <span className="flex-1">{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-4">
                {job.skills.map((skill, sIdx) => (
                  <span
                    key={`s-${idx}-${sIdx}`}
                    className="bg-accentColor/10 border border-accentColor/20 text-accentColor px-2.5 py-1 rounded-md text-sm font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
'use client';
import React from 'react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  links: {
    github: string;
    live?: string;
  };
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "ExpiryGuard",
      description: "A cross-platform mobile application designed to manage and track item expiration dates seamlessly. Features local state management, real-time data synchronization via Supabase, and automated background push notifications to alert users before critical dates.",
      tags: ["React Native", "Expo", "Supabase", "Zustand", "TypeScript"],
      image: "/movie_discovery.png",
      links: {
        github: "https://github.com/mishrasweta-0503/ExpiryGuard.git",
        live: "https://expiryyguard.netlify.app/"
      }
    },
    {
      title: "FixIt1",
      description: "A full-featured web application engineered to manage service workflows, relational data models, and user profiles. Implements secure client authentication and is completely optimized with automated build pipelines for live production deployment.",
      tags: ["Python", "Django", "PostgreSQL", "Tailwind CSS", "Render"],
      image: "/movie_discovery.png",
      links: {
        github: "https://github.com/mishrasweta-0503/FixIt.git",
        live: "https://fixit-lqc3.onrender.com"
      }
    },
    {
      title: "MiniReddit",
      description: "An interactive search and detail web application that aggregates real-time forum content. Leverages external platform APIs to deliver fluid data retrieval, dynamic search indexing, and a fully responsive client UI layout.",
      tags: ["React", "TypeScript", "REST APIs", "Tailwind CSS", "CSS Modules"],
      image: "/movie_discovery.png",
      links: {
        github: "https://github.com/mishrasweta-0503/RedditMini.git",
        live: "https://miniaturereddit.netlify.app/"
      }
    },
    {
      title: "DevStack",
      description: "A full-stack web application designed for developer collaboration. Built with a secure backend relational database schema, user registration forms, route protection middleware, and dynamic server-rendered UI layers.",
      tags: ["Python", "Flask", "PostgreSQL", "SQLAlchemy", "HTML5", "CSS3"],
      image: "/devstack.png",
      links: {
        github: "https://github.com/mishrasweta-0503/DevStack.git",
        live: "https://devstack-rjwn.onrender.com"
      }
    },
    {
      title: "Movie Discovery App",
      description: "A fast, visually rich application that hooks into media databases to let users browse, query, and filter trending films. Handles asynchronous API concurrency, image placeholder caching, and mobile-friendly layout grids.",
      tags: ["JavaScript", "TMDB API", "CSS", "HTML"],
      image: "/movie_discovery.png",
      links: {
        github: "https://github.com/mishrasweta-0503/Movie-Discovery-App.git",
        live: "https://discoveryourmovie.netlify.app/"
      }
    },
    {
      title: "Job Application Tracker",
      description: "A productivity dashboard focused on streamlining the job hunt. Users can track applications, update interview pipelines, manage target dates, and view quick analytics metrics on their overall submission success rate.",
      tags: ["Next.js", "React", "Node.js", "PostgreSQL", "Tailwind CSS"],
      image: "/movie_discovery.png",
      links: {
        github: "https://github.com/mishrasweta-0503/Job_Application_Tracker.git",
        live: "https://jobapplicationtracking.netlify.app/"
      }
    },
    {
      title: "ShopHaven",
      description: "A modern e-commerce storefront currently under active development. Implementing scalable backend product inventory APIs, client-side global shopping cart management, and seamless secure checkout workflows.",
      tags: ["React Native", "Expo", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
      image: "/movie_discovery.png",
      links: {
        github: "https://github.com/mishrasweta-0503/ShopHaven.git",
        live: "https://render.com"
      }
    }
  ];

  return (
    <section id="projects" className="pt-6 pb-2 max-w-5xl mx-auto px-4 sm:px-6">
      
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-textMain tracking-tight">
          Things I've Built
        </h2>
        <div className="h-[1px] flex-grow bg-textMuted/20" />
      </div>

      {/* Projects Display Stack (Brittany Chiang Overlay Style) */}
      <div className="space-y-24">
        {projects.map((project, idx) => {
          const isUnderBuild = project.title === "ShopHaven";
          const isEven = idx % 2 === 0;

          return (
            <div
              key={`project-card-${idx}`}
              className="relative grid grid-cols-12 items-center gap-2 group"
            >
              
              {/* SCREENSHOT PREVIEW (Spans 7 out of 12 columns for maximum visual width) */}
              <div
                className={`col-span-12 md:col-span-7 ${
                  isEven ? 'md:col-start-1' : 'md:col-start-6'
                } row-start-1 z-10 relative rounded-lg overflow-hidden border border-textMuted/10 bg-slate-900 shadow-xl`}
              >
                <a 
                  href={project.links.live || project.links.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="block relative aspect-[16/10] overflow-hidden group"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                  {/* Subtle dark tint over image that disappears on hover */}
                  <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-transparent transition-colors duration-300" />
                </a>
              </div>

              {/* FLOATING TEXT CARD (Spans 7 out of 12 columns, overlapping the image) */}
              <div
                className={`col-span-12 md:col-span-7 ${
                  isEven ? 'md:col-start-6 md:text-right' : 'md:col-start-1 md:text-left'
                } row-start-1 z-20 flex flex-col justify-center pointer-events-none mt-4 md:mt-0`}
              >
                <div className="pointer-events-auto">
                  {/* Category / Sub-label */}
                  <div className="flex items-center gap-2 mb-2 justify-start md:justify-end">
                    {isUnderBuild && (
                      <span className="font-mono text-[10px] uppercase tracking-widest text-accentColor bg-accentColor/10 px-2 py-0.5 rounded border border-accentColor/20 animate-pulse">
                        Under Construction
                      </span>
                    )}
                    <span className="font-mono text-xs text-accentColor tracking-wider">
                      Featured Project
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-textMain hover:text-accentColor transition-colors mb-4">
                    <a href={project.links.live || project.links.github} target="_blank" rel="noreferrer">
                      {project.title}
                    </a>
                  </h3>

                  {/* OVERLAY DESCRIPTION BOX */}
                  <div className="bg-slate-900/90 backdrop-blur-md p-6 rounded-xl border border-textMuted/15 shadow-2xl text-textMuted text-sm leading-relaxed mb-4">
                    {project.description}
                  </div>

                  {/* Tech Tags */}
                  <ul className={`flex flex-wrap gap-x-4 gap-y-1 mb-4 font-mono text-xs text-textMuted ${
                    isEven ? 'md:justify-end' : 'md:justify-start'
                  }`}>
                    {project.tags.map((tag, tIdx) => (
                      <li key={tIdx} className="text-accentColor/80">
                        #{tag}
                      </li>
                    ))}
                  </ul>

                  {/* Action Links */}
                  <div className={`flex gap-4 items-center ${
                    isEven ? 'md:justify-end' : 'md:justify-start'
                  }`}>
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} GitHub Repository`}
                      className="text-textMuted hover:text-accentColor transition-colors p-1"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                    </a>
                    
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} Live Website Demo`}
                        className="text-textMuted hover:text-accentColor transition-colors p-1"
                      >
                        <svg className="w-5 h-5 stroke-current fill-none stroke-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
}
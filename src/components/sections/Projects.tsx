'use client';
import React from 'react';

interface Project {
  title: string;
  description: string;
  tags: string[];
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
      links: {
        github: "https://github.com/mishrasweta-0503/ExpiryGuard.git",
        live: "https://expiryyguard.netlify.app/"
      }
    },
    {
      title: "FixIt",
      description: "A full-featured web application engineered to manage service workflows, relational data models, and user profiles. Implements secure client authentication and is completely optimized with automated build pipelines for live production deployment.",
      tags: ["Python", "Django", "PostgreSQL", "Tailwind CSS", "Render"],
      links: {
        github: "https://github.com/mishrasweta-0503/FixIt.git",
        live: "https://fixit-lqc3.onrender.com"
      }
    },
    {
      title: "MiniReddit",
      description: "An interactive search and detail web application that aggregates real-time forum content. Leverages external platform APIs to deliver fluid data retrieval, dynamic search indexing, and a fully responsive client UI layout.",
      tags: ["React", "TypeScript", "REST APIs", "Tailwind CSS", "CSS Modules"],
      links: {
        github: "https://github.com/mishrasweta-0503/RedditMini.git",
        live: "https://miniaturereddit.netlify.app/"
      }
    },
    {
      title: "DevStack",
      description: "A full-stack web application designed for developer collaboration. Built with a secure backend relational database schema, user registration forms, route protection middleware, and dynamic server-rendered UI layers.",
      tags: ["Python", "Flask", "PostgreSQL", "SQLAlchemy", "HTML5", "CSS3"],
      links: {
        github: "https://github.com/mishrasweta-0503/DevStack.git",
        live: "https://devstack-rjwn.onrender.com"
      }
    },
    {
      title: "Movie Discovery App",
      description: "A fast, visually rich application that hooks into media databases to let users browse, query, and filter trending films. Handles asynchronous API concurrency, image placeholder caching, and mobile-friendly layout grids.",
      tags: ["React", "JavaScript", "TMDB API", "Tailwind CSS", "Context API"],
      links: {
        github: "https://github.com/mishrasweta-0503/Movie-Discovery-App.git",
        live: "https://discoveryourmovie.netlify.app/"
      }
    },
    {
      title: "Job Application Tracker",
      description: "A productivity dashboard focused on streamlining the job hunt. Users can track applications, update interview pipelines, manage target dates, and view quick analytics metrics on their overall submission success rate.",
      tags: ["Next.js", "React", "Node.js", "PostgreSQL", "Tailwind CSS"],
      links: {
        github: "https://github.com/mishrasweta-0503/Job_Application_Tracker.git",
        live: "https://jobapplicationtracking.netlify.app/"
      }
    },
    {
      title: "ShopHaven",
      description: "A modern e-commerce storefront currently under active development. Implementing scalable backend product inventory APIs, client-side global shopping cart management, and seamless secure checkout workflows.",
      tags: ["React Native", "Expo", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
      links: {
        github: "https://github.com/mishrasweta-0503/ShopHaven.git",
        live: "https://render.com"
      }
    }
  ];

  return (
    <section id="projects" className="py-12 max-w-4xl mx-auto px-4 sm:px-6">
      
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-textMain tracking-tight">
          Things I've Built
        </h2>
        <div className="h-[1px] flex-grow bg-textMuted/20" />
      </div>

      {/* Projects Display Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, idx) => {
          const isUnderBuild = project.title === "ShopHaven";
          
          return (
            <div
              key={`project-card-${idx}`}
              className="bg-bgDark/40 border border-textMuted/10 rounded-xl p-6 flex flex-col justify-between hover:border-accentColor/40 transition-all duration-300 group hover:-translate-y-1 shadow-md relative"
            >
              <div>
                {/* Top Row Decorators */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xl text-accentColor font-light">📁</span>
                  {isUnderBuild && (
                    <span className="font-mono text-[10px] uppercase tracking-widest text-accentColor bg-accentColor/10 px-2 py-0.5 rounded border border-accentColor/20 animate-pulse">
                      Under Construction
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-textMain group-hover:text-accentColor transition-colors mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-textMuted leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Bottom Metadata & Links */}
              <div>
                {/* Tech Tags Stack */}
                <div className="flex flex-wrap gap-x-3 gap-y-1 mb-6 font-mono text-[11px] text-textMuted">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="hover:text-textMain transition-colors">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Action Links Container (Icons-Driven Layout) */}
                <div className="flex gap-4 items-center pt-4 border-t border-textMuted/5">
                  
                  {/* GitHub Logo Link */}
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} GitHub Repository`}
                    className="text-textMuted hover:text-accentColor transition-colors p-1"
                  >
                    <svg
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  </a>
                  
                  {/* Live Demo Icon Link */}
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} Live Website Demo`}
                      className="text-textMuted hover:text-accentColor transition-colors p-1"
                    >
                      <svg
                        className="w-5 h-5 stroke-current fill-none stroke-2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
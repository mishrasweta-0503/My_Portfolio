'use client';
import React from 'react';

export default function Contact() {
  const email = "m.swetab14@gmail.com";
  const linkedinUser = "linkedin.com/in/sweta-mishra-a26222193/";
  const githubUser = "github.com/mishrasweta-0503";
  const instaUser = "instagram.com/mishrasweta140";
  const phoneNo = "+971 566364235 / +91 8280240496";

  const contactItems = [
    {
      label: "Gmail",
      value: email,
      href: `mailto:${email}`,
      // Raw SVG for Gmail
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 5.457v13.086c0 .85-.685 1.457-1.543 1.457h-3.086V9.657L12 14.171 4.63 9.657v10.343H1.543C.685 20 0 19.393 0 18.543V5.457c0-.85.685-1.457 1.543-1.457h2.314L12 9.429l8.143-5.429h2.314c.858 0 1.543.607 1.543 1.457z"/>
        </svg>
      )
    },
    {
      label: "LinkedIn",
      value: linkedinUser,
      href: `https://${linkedinUser}`,
      // Raw SVG for LinkedIn
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.12 20.45H3.56V9H7.12v11.45zM5.34 7.43c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.06-2.06 2.06zm15.11 13.02h-3.56v-5.6c0-1.34-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.7h-3.56V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29z"/>
        </svg>
      )
    },
    {
      label: "GitHub",
      value: githubUser,
      href: `https://${githubUser}`,
      // Raw SVG for GitHub
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
      )
    },
    {
      label: "Instagram",
      value: instaUser,
      href: `https://${instaUser}`,
      // Raw SVG for Instagram
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
      )
    },
    {
      label: "Phone",
      value: phoneNo,
      href: `tel:${phoneNo.replace(/[^+\d]/g, '')}`, // Clean string numbers for telephone triggers
      // Raw SVG for Phone
      icon: (
        <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <section id="contact" className="pt-2 pb-8 max-w-4xl mx-auto px-4 sm:px-6">
      
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-textMain tracking-tight">
          Get In Touch
        </h2>
        <div className="h-[1px] flex-grow bg-textMuted/20" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
        
        {/* Left Side CTA */}
        <div className="md:col-span-2 space-y-6">
          <p className="text-md text-textMuted leading-relaxed">
            I am currently looking for new opportunities as a Full-Stack or React Native Developer! Drop a line and let's build something beautiful together.
          </p>
          <div>
            <a
              href={`mailto:${email}`}
              className="inline-block font-mono text-md text-accentColor border border-accentColor bg-transparent px-5 py-3.5 rounded-md font-semibold tracking-wider hover:bg-accentColor/10 transition-all duration-300 cursor-pointer hover:-translate-y-0.5 active:translate-y-0 shadow-sm"
            >
              Say Hello 👋
            </a>
          </div>
        </div>

        {/* Right Side Addresses List */}
        <div className="md:col-span-3 space-y-4 w-full">
          {contactItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              target={item.label !== "Gmail" && item.label !== "Phone" ? "_blank" : undefined}
              rel="noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl border border-textMuted/5 bg-bgDark/20 hover:border-accentColor/30 hover:bg-white/5 transition-all duration-300 group"
            >
              {/* Icon Frame */}
              <div className="text-textMuted group-hover:text-accentColor transition-colors shrink-0">
                {item.icon}
              </div>
              
              {/* Label & Value Text */}
              <div className="min-w-0">
                <p className="font-mono text-[10px] tracking-widest text-textMuted uppercase">
                  {item.label}
                </p>
                <p className="text-md text-textMain truncate font-medium group-hover:text-accentColor transition-colors mt-0.5">
                  {item.value}
                </p>
              </div>
            </a>
          ))}
        </div>

      </div>

    </section>
  );
}
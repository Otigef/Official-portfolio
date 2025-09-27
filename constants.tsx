import React from 'react';
import type { Project, Skill } from './types';

export const PERSONAL_INFO = {
  name: "Geoffrey Nehemiah O Otieno",
  title: "Software Engineer & Web Developer",
  tagline: "Building functional and visually appealing digital solutions.",
  email: "otigef@yahoo.com",
  profileImage: 'https://scontent.fnbo2-1.fna.fbcdn.net/v/t39.30808-6/481770649_630927166337028_4599393354229782662_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHqRZf-3JM1TbxQCRMfgD-YJ73bg8VzQ6YnvduDxXNDpo1vloB5X3c6tC-ra4PUtK52viPfaUdK4q6yDQXzfD9C&_nc_ohc=FGfM9dRIuFUQ7kNvwEyjbo6&_nc_oc=Adl4EgNv5Iav5B0Ts9av8W9F3AmOZYxfPJ3a6iZ2X7yg2lgEP5v3rS4isfcm_Y5QEjo&_nc_zt=23&_nc_ht=scontent.fnbo2-1.fna&_nc_gid=46EwYXWxhlYOqNVaCExdjg&oh=00_AfZA7mzeHY4ymB9tYFFniZpQiaTbBZS_BVzAeqa3sUNe8w&oe=68DB21EC',
  about: "A passionate and detail-oriented Software Engineer with a unique background in operations and logistics. This experience honed my problem-solving skills and ability to manage complex systems, which I now apply to the world of technology. I thrive on creating efficient, scalable, and user-friendly digital experiences, turning complex challenges into elegant web solutions. I'm adept at building modern, responsive applications from front to back.",
  resumeUrl: '/Geoffrey_Otieno_Resume.pdf', // Path to the resume PDF
  phone: '+254 723 570 446',
  github: 'https://github.com/Otigef',
  linkedin: 'https://www.linkedin.com/in/geoffrey-nehemiah-otieno-a79a296b/',
  facebook: '#',
  twitter: '#',
};

export const PROJECTS: Project[] = [
  {
    title: 'E-commerce Platform',
    image: 'https://picsum.photos/seed/p1/800/600',
    category: 'Full Stack',
    description: 'A full-featured e-commerce site built with React, Node.js, and a PostgreSQL database. Includes user authentication, product catalog, and payment integration.',
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'Task Management App',
    image: 'https://picsum.photos/seed/p2/800/600',
    category: 'Frontend',
    description: 'A responsive task management application using React and TypeScript. Features drag-and-drop functionality and local storage persistence.',
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'Portfolio Website',
    image: 'https://picsum.photos/seed/p3/800/600',
    category: 'Frontend',
    description: 'A personal portfolio website built with modern web technologies to showcase projects and skills. Designed to be clean, responsive, and fast.',
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'Weather Dashboard',
    image: 'https://picsum.photos/seed/p4/800/600',
    category: 'API',
    description: 'A web app that provides real-time weather data using a third-party API. Built with vanilla JavaScript, HTML, and CSS for a lightweight experience.',
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'Blogging API',
    image: 'https://picsum.photos/seed/p5/800/600',
    category: 'Backend',
    description: 'A RESTful API for a blogging platform, created with Node.js and Express. It handles CRUD operations for posts and users with JWT authentication.',
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'Data Visualization Tool',
    image: 'https://picsum.photos/seed/p6/800/600',
    category: 'Full Stack',
    description: 'An interactive dashboard for visualizing data sets using D3.js and React. The backend is powered by Python Flask serving data via a REST API.',
    githubUrl: '#',
    liveUrl: '#',
  },
];

const JSIcon = () => <svg role="img" className="h-10 w-10" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>JavaScript</title><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.82-2.28-2.204-3.464-1.522-1.31-3.37-2.13-5.216-2.13-1.61 0-2.91.434-3.904 1.3L9.54 12.1c.96-1.12 2.4-2.11 4.29-2.11 1.29 0 2.302.39 3.03 1.154.73.765 1.124 1.77 1.124 3.01 0 .23-.01.46-.04.68-.23 1.52-1.23 2.7-2.92 3.52-1.85.89-4.14.89-6.32.04-1.27-.49-2.28-1.38-2.99-2.62-.7-1.24-.9-2.77-.62-4.57.2-1.34.7-2.53 1.52-3.56.8-1.01 1.8-1.77 2.94-2.28.74-.33 1.5-.5 2.27-.5 1.34 0 2.59.45 3.65 1.35.98.83 1.63 2.02 1.94 3.52.07.3.11.62.11.95 0 1.07-.3 2.03-.9 2.86-.59.84-1.42 1.42-2.5 1.74-.75.22-1.53.22-2.28.02-.75-.2-1.37-.53-1.85-.97l-1.16 1.18c.64.63 1.5 1.1 2.58 1.4 1.08.3 2.26.3 3.44-.02 1.18-.32 2.2-.9 3.02-1.72.83-.82 1.4-1.87 1.7-3.15zM7.78 17.58c.48.98 1.4 1.64 2.76 1.95 1.36.32 2.95.06 4.31-.76 1.36-.83 2.33-2.15 2.8-3.95.33-1.24.4-2.58.15-3.95-.25-1.37-.8-2.6-1.63-3.65-.84-1.05-1.9-1.8-3.13-2.2-.7-.22-1.42-.3-2.14-.3-1.33 0-2.5.4-3.48 1.18-.98.78-1.67 1.8-2.07 3.04-.4 1.25-.4 2.62-.02 4.04.37 1.43 1.13 2.62 2.22 3.55z" fill="currentColor"/></svg>;
const ReactIcon = () => <svg role="img" className="h-10 w-10" viewBox="-11.5 -10.23174 23 20.46348" xmlns="http://www.w3.org/2000/svg"><title>React</title><circle cx="0" cy="0" r="2.05" fill="currentColor"></circle><g stroke="currentColor" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2"></ellipse><ellipse rx="11" ry="4.2" transform="rotate(60)"></ellipse><ellipse rx="11" ry="4.2" transform="rotate(120)"></ellipse></g></svg>;
const NodeIcon = () => <svg role="img" className="h-10 w-10" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Node.js</title><path d="M11.72 24l-3.2-1.84V6.23L12 2.19l9.48 5.44v10.9l-3.52 2.05v-8.8l-5.96-3.42v8.74zM8.52 4.39L2.52 8v8l6-3.46V4.39zM12.28.01L.48 6.8v10.38l11.8 6.82 11.24-6.5V6.81z" fill="currentColor"/></svg>;
const TSIcon = () => <svg role="img" className="h-10 w-10" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>TypeScript</title><path d="M1.5 0h21v22.5H1.5V0zm2.625 3.375h15.75v15.75H4.125V3.375zM12.375 7.125H7.125v2.25h2.25v9.375h2.25v-9.375h2.25V9.375h-1.5zm6 7.125h-4.5v2.25h-2.25V5.25h2.25v9h4.5v2.25z" fill="currentColor"/></svg>;
const HtmlIcon = () => <svg role="img" className="h-10 w-10" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>HTML5</title><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.955-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" fill="currentColor"/></svg>
const CssIcon = () => <svg role="img" className="h-10 w-10" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>CSS3</title><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" fill="currentColor"/></svg>;
const MongoIcon = () => <svg role="img" className="h-10 w-10" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>MongoDB</title><path d="M12.24 18.2c-3.9.44-6.85-2.5-6.4-6.4.44-3.9 4.3-5.85 7.95-4.55 2.15.75 3.3 2.7 3.5 4.85.25 2.15-1.15 4.1-3.15 5.2l-1.95.95zm.51-16.14C11.15 1.66 9.6 2.66 8.5 4.01c-3.35 4.3-1.65 10.3 3.1 12.6C16 18.56 19.76 15.9 20 11.4c.2-4.1-2.6-7.4-6.25-8.24z" fill="currentColor"/></svg>;


export const SKILLS: Skill[] = [
    { name: 'JavaScript', icon: <JSIcon /> },
    { name: 'TypeScript', icon: <TSIcon /> },
    { name: 'React', icon: <ReactIcon /> },
    { name: 'Node.js', icon: <NodeIcon /> },
    { name: 'MongoDB', icon: <MongoIcon /> },
    { name: 'HTML5', icon: <HtmlIcon /> },
    { name: 'CSS3', icon: <CssIcon /> },
];
import React, { useState } from 'react';
import { ArrowUpRight, Clock, ExternalLink, Github } from 'lucide-react';
import ProjectModal from '../components/ProjectModal.jsx';
import recipeImg from '../assets/recipe.png';
import gradtrackImg from "../assets/gradtracking.png";
import letsauImg from "../assets/letsau.png";
import teketeImg from "../assets/tekete.png";
import streamingImg from "../assets/streaming.png";
import mernImg from "../assets/mern.png";
import spaniplugImg from "../assets/spaniplug.png";
import bracesImg from "../assets/braces.png";
import port6Img from "../assets/port6.png";
import cleaneaseImg from "../assets/cleanease.png";
import quotesImg from "../assets/random.png";
import heroImg from "../assets/portfolio.png";

const projectsData = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'A modern e-commerce solution with advanced filtering and seamless checkout experience.',
    image: recipeImg,
    tags: ['React', 'Node.js', 'Stripe', 'MongoDB'],
    link: '#',
    github: '#',
    duration: '3 months',
    about: 'Built a full-featured e-commerce platform from scratch with product management, shopping cart, payment integration, and order tracking. Implemented advanced filtering, search functionality, and a responsive design that works seamlessly across all devices.',
    stack: 'Frontend built with React and Redux for state management. Backend powered by Node.js and Express with MongoDB database. Integrated Stripe for secure payment processing and JWT for authentication.',
    challenges: [
      'Implementing real-time inventory management across multiple users',
      'Optimizing database queries for fast product searches with complex filters',
      'Handling payment processing securely with PCI compliance',
      'Creating a smooth checkout experience with multiple payment methods'
    ],
    learnings: [
      'Advanced state management patterns with Redux Toolkit',
      'Payment gateway integration and security best practices',
      'Database optimization and indexing strategies',
      'Building scalable REST APIs with proper error handling'
    ]
  },
  {
    id: 2,
    title: 'AI Dashboard',
    category: 'UI/UX Design',
    description: 'Intuitive dashboard for AI model management with real-time analytics and insights.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    tags: ['React', 'Three.js', 'D3.js', 'WebSocket'],
    link: '#',
    github: '#',
    duration: '2 months',
    about: 'Created an interactive dashboard for monitoring and managing AI models with real-time performance metrics, 3D data visualizations, and predictive analytics. The interface provides deep insights into model behavior and training progress.',
    stack: 'React with Three.js for 3D visualizations and D3.js for charts. WebSocket integration for real-time updates. Custom hooks for data fetching and state management.',
    challenges: [
      'Rendering complex 3D visualizations without performance degradation',
      'Handling real-time data streams efficiently',
      'Creating intuitive interactions for complex AI metrics',
      'Making technical data accessible to non-technical users'
    ],
    learnings: [
      'Advanced Three.js techniques for data visualization',
      'WebSocket implementation for real-time updates',
      'Performance optimization for heavy computations',
      'UX design principles for data-heavy applications'
    ]
  },
  {
    id: 3,
    title: 'Mobile Banking App',
    category: 'Mobile Design',
    description: 'Secure and elegant banking application with biometric authentication.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
    tags: ['React Native', 'TypeScript', 'Redux', 'Biometrics'],
    link: '#',
    github: '#',
    duration: '4 months',
    about: 'Developed a secure mobile banking application with biometric authentication, real-time transaction tracking, bill payments, and money transfers. Focused on security, accessibility, and seamless user experience.',
    stack: 'React Native with TypeScript for type safety. Redux for state management. Native modules for biometric authentication. Encrypted storage for sensitive data.',
    challenges: [
      'Implementing secure biometric authentication across iOS and Android',
      'Ensuring data encryption and secure communication',
      'Building offline-first functionality for critical features',
      'Meeting strict financial compliance and security standards'
    ],
    learnings: [
      'Mobile security best practices and encryption techniques',
      'Biometric API integration on multiple platforms',
      'Offline-first architecture with data synchronization',
      'Accessibility standards for financial applications'
    ]
  },
  {
    id: 4,
    title: 'SaaS Platform',
    category: 'Full Stack',
    description: 'Complete SaaS solution with subscription management and team collaboration.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    tags: ['Next.js', 'PostgreSQL', 'Stripe', 'AWS'],
    link: '#',
    github: '#',
    duration: '6 months',
    about: 'Built a comprehensive SaaS platform from ground up with multi-tenant architecture, subscription billing, team management, role-based access control, and real-time collaboration features. Scaled to support thousands of users.',
    stack: 'Next.js for SSR and API routes. PostgreSQL with Prisma ORM. Stripe for subscription billing. AWS for hosting and storage. Redis for caching.',
    challenges: [
      'Designing a scalable multi-tenant database architecture',
      'Implementing complex subscription and billing logic',
      'Building real-time collaboration features',
      'Ensuring high availability and performance under load'
    ],
    learnings: [
      'Multi-tenant SaaS architecture patterns',
      'Subscription billing and webhook handling',
      'Database design for scalability',
      'Cloud infrastructure and deployment strategies'
    ]
  },
  {
    id: 5,
    title: 'Portfolio Builder',
    category: 'Web Development',
    description: 'Drag-and-drop portfolio builder for creatives with stunning templates.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80',
    tags: ['React', 'Tailwind', 'Firebase', 'DnD Kit'],
    link: '#',
    github: '#',
    duration: '2.5 months',
    about: 'Created an intuitive drag-and-drop portfolio builder allowing creatives to build beautiful portfolio websites without coding. Features include pre-designed templates, custom styling, image optimization, and one-click publishing.',
    stack: 'React with dnd-kit for drag and drop. Tailwind CSS for styling. Firebase for backend, authentication, and hosting. Cloudinary for image optimization.',
    challenges: [
      'Creating a smooth drag-and-drop experience across devices',
      'Building a flexible template system',
      'Optimizing images automatically for web performance',
      'Generating clean, performant HTML/CSS from builder data'
    ],
    learnings: [
      'Advanced drag-and-drop implementations',
      'Component composition patterns',
      'Image optimization techniques',
      'Firebase real-time database and security rules'
    ]
  },
  {
    id: 6,
    title: 'Fitness Tracker',
    category: 'Mobile App',
    description: 'Comprehensive fitness tracking app with workout plans and nutrition guides.',
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80',
    tags: ["React Native", "Redux", "MongoDB", "HealthKit", "Google Fit", "NativeWind"],
    link: 'https://expo.dev/preview/update?message=Publishing+latest+version&updateRuntimeVersion=1.0.0&createdAt=2026-02-18T10%3A34%3A10.848Z&slug=exp&projectId=665d6d14-6770-4427-86fb-061e34307c26&group=2bd292d9-410f-40c0-ad78-8aca2cb29a58',
    github: 'https://github.com/cecilialetsau25/FitnessTracker',
    duration: '5 months',
    about: 'Built a mobile app to track daily steps, calories burned, and distance traveled. Includes analytics and trends, styled with NativeWind, and state managed with Redux. Designed for iOS and Android.',
    stack: 'React Native for cross-platform development. Redux for state management. MongoDB for data storage. HealthKit and Google Fit APIs for device integration.',
    challenges: [
    "Integrating with native health APIs (HealthKit & Google Fit)",
    "Building complex workout tracking with timers and rest periods",
    "Creating engaging visualizations for progress tracking",
    "Implementing background tracking without draining the battery"
  ],
  learnings: [
    "Native module development for accessing health data",
    "Background task handling in mobile apps",
    "Data visualization for fitness metrics",
    "Battery optimization techniques"
  ]
  },
  {
    id: 7,
    title: 'Real Estate Platform',
    category: 'Web Development',
    description: 'Property listing platform with virtual tours and AI-powered recommendations.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
    tags: ['Next.js', 'Python', 'TensorFlow', 'PostgreSQL'],
    link: '#',
    github: '#',
    duration: '4 months',
    about: 'Created a modern real estate platform featuring property listings with 360° virtual tours, AI-powered property recommendations, mortgage calculators, and advanced search with map integration.',
    stack: 'Next.js frontend with Python backend. TensorFlow for recommendation engine. PostgreSQL with PostGIS for location data. Mapbox for interactive maps.',
    challenges: [
      'Implementing 360° virtual tour viewer',
      'Building ML recommendation system',
      'Optimizing geospatial queries for property search',
      'Handling large image galleries efficiently'
    ],
    learnings: [
      'Machine learning for recommendation systems',
      'Geospatial database queries and optimization',
      '360° image rendering techniques',
      'SEO optimization for property listings'
    ]
  },
  {
    id: 8,
    title: 'Task Management System',
    category: 'Full Stack',
    description: 'Enterprise task management with Gantt charts, time tracking, and reporting.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    tags: ['Vue.js', 'Laravel', 'MySQL', 'Redis'],
    link: '#',
    github: '#',
    duration: '5 months',
    about: 'Built an enterprise-grade task management system with project planning, Gantt charts, time tracking, team collaboration, and comprehensive reporting dashboard.',
    stack: 'Vue.js frontend with Vuex. Laravel backend API. MySQL database with Redis caching. WebSocket for real-time updates.',
    challenges: [
      'Creating performant Gantt chart with thousands of tasks',
      'Implementing complex permission system',
      'Building real-time collaboration features',
      'Generating detailed reports with large datasets'
    ],
    learnings: [
      'Advanced Vue.js patterns and composition API',
      'Laravel API development and optimization',
      'Real-time collaboration with WebSockets',
      'Report generation and data export'
    ]
  },
  
  {
    id: 9,
    title: 'Social Media Analytics',
    category: 'Web Development',
    description: 'Analytics dashboard for tracking social media performance across platforms.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    tags: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
    link: '#',
    github: '#',
    duration: '3 months',
    about: 'Developed a comprehensive social media analytics platform that aggregates data from multiple platforms, providing insights on engagement, reach, and audience demographics.',
    stack: 'React with Chart.js for visualizations. Node.js backend with Express. MongoDB for data storage. OAuth integration for social platforms.',
    challenges: [
      'Integrating with multiple social media APIs',
      'Handling rate limits and API quotas',
      'Processing and normalizing data from different sources',
      'Creating meaningful metrics and visualizations'
    ],
    learnings: [
      'OAuth 2.0 implementation for multiple providers',
      'API rate limiting and queue management',
      'Data aggregation and normalization techniques',
      'Advanced data visualization patterns'
    ]
  },
   {
    id: 10,
    title: "Recipe Finder",
    category: "Web Development",
     description:
      "A dynamic recipe search application developed with React allowing users to browse, search, and save recipes.",
      image: recipeImg,
       tags:  ['JavaScript (ES6+)', 'HTML', 'CSS','React','VS Code'],
       live: ' https://recipe-finder-seven-umber.vercel.app/ ',
        github: "https://github.com/cecilialetsau25/recipe_finder",
        duration: "2 months",
         about: 'Developed a comprehensive social media analytics platform that aggregates data from multiple platforms, providing insights on engagement, reach, and audience demographics.',
    stack: 'React with Chart.js for visualizations. Node.js backend with Express. MongoDB for data storage. OAuth integration for social platforms.',
    challenges: ['Integrated API for real-time recipe data and implemented reusable components.'],
      learnings: [
      'OAuth 2.0 implementation for multiple providers',
      'API rate limiting and queue management',
      'Data aggregation and normalization techniques',
      'Advanced data visualization patterns'
    ]
          
    
    
   
    
  },
  {
  id: 11,
  title: "E-commerce Braces Shop",
  category: "E-commerce",
  description:
    "A full-featured e-commerce application for selling braces with product browsing, cart management, and checkout functionality.",
  image: bracesImg,
  tags: ['JavaScript (ES6+)', 'HTML', 'CSS', 'React', 'Tailwind CSS', 'Firebase'],
  live: "https://ecommerce-app-three-sand.vercel.app/",
  github: "",
  duration: "3 months",
  about:
    "Built a modern online store focused on performance and usability, allowing customers to browse products and complete purchases seamlessly.",
  stack:
    "React frontend with Firebase backend services for product management and hosting. Tailwind CSS used for responsive UI.",
  challenges: [
    "Managing cart state across components",
    "Implementing responsive product layouts"
  ],
  learnings: [
    "State management patterns in React",
    "Firebase data integration",
    "E-commerce UX principles"
  ]
},

{
  id: 12,
  title: "Personal Portfolio Case Study",
  category: "Personal",
  description:
    "An interactive developer portfolio presenting skills, certifications, and professional journey through modern UI experiences.",
  image: heroImg,
  tags: ['React', 'Tailwind CSS', 'Framer Motion', 'JavaScript', 'Vercel'],
  live: "",
  github: "",
  duration: "Ongoing",
  about:
    "Designed to showcase technical growth, achievements, and projects using immersive layouts and animation-driven storytelling.",
  stack:
    "React with Tailwind CSS and Framer Motion animations deployed on Vercel.",
  challenges: [
    "Balancing visual design with performance",
    "Creating reusable UI sections"
  ],
  learnings: [
    "Advanced component composition",
    "Animation-driven UX design",
    "Portfolio storytelling strategy"
  ]
},

{
  id: 13,
  title: "Tekete Management System",
  category: "Client",
  description:
    "A customer service ticketing system enabling users to log, track, and manage support requests efficiently.",
  image: teketeImg,
  tags: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'jQuery'],
  live: "http://training.tekete.co.za",
  github: "",
  duration: "4 months",
  about:
    "Developed within a team environment to streamline customer issue tracking and administrative workflows.",
  stack:
    "Laravel backend with MySQL database and jQuery-powered frontend interactions.",
  challenges: [
    "Handling concurrent users",
    "Designing scalable ticket workflows"
  ],
  learnings: [
    "MVC architecture using Laravel",
    "Team collaboration workflows",
    "Backend validation strategies"
  ]
},

{
  id: 14,
  title: "GradTrack",
  category: "Personal",
  description:
    "A dashboard-style internship progress tracker for managing learning goals and mentor reviews.",
  image: gradtrackImg,
  tags: ['React', 'Tailwind CSS', 'React Router', 'JavaScript'],
  live: "https://react-tailwind-task-tracker.vercel.app/",
  github: "https://github.com/cecilialetsau25/react-tailwind-task-tracker",
  duration: "2 months",
  about:
    "Created to transform a simple task tracker into a professional productivity dashboard.",
  stack:
    "React SPA with Tailwind CSS responsive layouts and component-based architecture.",
  challenges: [
    "Designing dashboard UI structure",
    "Managing dynamic task updates"
  ],
  learnings: [
    "Reusable component design",
    "Dashboard UX patterns",
    "State-driven UI updates"
  ]
},

{
  id: 15,
  title: "React Streaming App",
  category: "Personal",
  description:
    "A movie streaming interface displaying trending and popular films using live API data.",
  image: streamingImg,
  tags: ['React', 'Tailwind CSS', 'Framer Motion', 'API Integration'],
  live: "https://react-streaming-app-delta.vercel.app/",
  github: "https://github.com/cecilialetsau25/react-streaming-app",
  duration: "2 months",
  about:
    "Built a Netflix-style interface focusing on animations and dynamic movie content rendering.",
  stack:
    "React frontend integrated with TMDB API and animated using Framer Motion.",
  challenges: [
    "Handling async API requests",
    "Dynamic UI rendering"
  ],
  learnings: [
    "API consumption patterns",
    "Animation performance optimization",
    "Component-driven layouts"
  ]
},

{
  id: 16,
  title: "Letsau’s Bank",
  category: "Personal",
  description:
    "A banking system managing accounts and transactions with secure data handling.",
  image: letsauImg,
  tags: ['Java', 'MySQL', 'Bootstrap', 'HTML', 'CSS'],
  live: "https://letsau-bank-v2-ijc4.vercel.app/",
  github: "https://github.com/cecilialetsau25/LetsauBankV2",
  duration: "3 months",
  about:
    "Developed as a backend-focused project emphasizing secure financial transaction logic.",
  stack:
    "Java application connected to MySQL database with Bootstrap UI.",
  challenges: [
    "Ensuring transaction consistency",
    "Data validation logic"
  ],
  learnings: [
    "Object-oriented programming",
    "Database relationships",
    "Backend logic structuring"
  ]
},

{
  id: 17,
  title: "Cleanease Laundry System",
  category: "Client",
  description:
    "A full-stack laundry management platform with authentication, order tracking, and admin analytics.",
  image: cleaneaseImg,
  tags: ['Laravel', 'React', 'Supabase', 'MySQL', 'Tailwind CSS'],
  live: "https://cleanease-v2.vercel.app/",
  github: "https://github.com/cecilialetsau25/Cleanease_Laundry_System",
  duration: "4 months",
  about:
    "An end-to-end business system allowing customers to track laundry orders while admins manage operations.",
  stack:
    "Laravel backend, React frontend, Supabase authentication and analytics.",
  challenges: [
    "Role-based authentication",
    "Real-time order updates"
  ],
  learnings: [
    "Full-stack architecture",
    "Authentication workflows",
    "Admin dashboard design"
  ]
},

{
  id: 18,
  title: "MERN TypeScript To-Do",
  category: "Full Stack",
  description:
    "A MERN stack task management application built using TypeScript.",
  image: mernImg,
  tags: ['MongoDB', 'Express', 'React', 'Node.js', 'TypeScript'],
  live: "https://mern-typescript-todo-72oo.vercel.app/",
  github: "https://github.com/cecilialetsau25/mern-typescript-todo",
  duration: "2 months",
  about:
    "Focused on building a strongly typed full-stack application using modern MERN architecture.",
  stack:
    "React TypeScript frontend with Node.js/Express backend and MongoDB database.",
  challenges: [
    "Type safety across frontend and backend",
    "API integration"
  ],
  learnings: [
    "TypeScript in full-stack apps",
    "REST API design",
    "MongoDB schema modeling"
  ]
},

{
  id: 19,
  title: "SpaniPlug",
  category: "Full Stack",
  description:
    "A platform connecting consumers with nearby service providers.",
  image: spaniplugImg,
  tags: ['React', 'Supabase', 'Tailwind CSS', 'JavaScript'],
  live: "https://spaniplug.vercel.app/",
  github: "",
  duration: "3 months",
  about:
    "Designed as a service marketplace emphasizing real-time data updates.",
  stack:
    "React frontend with Supabase backend and real-time database features.",
  challenges: [
    "Real-time data syncing",
    "Reusable UI components"
  ],
  learnings: [
    "Backend-as-a-Service architecture",
    "Realtime database usage",
    "Marketplace UX design"
  ]
},

{
  id: 20,
  title: "Angular Quotes App",
  category: "Frontend",
  description:
    "A motivational quotes application built using Angular standalone components.",
  image: quotesImg,
  tags: ['Angular', 'TypeScript', 'HTML', 'CSS'],
  live: "https://quotes-app-ten-kappa.vercel.app/",
  github: "https://github.com/cecilialetsau25/quotes-app",
  duration: "1 month",
  about:
    "Created to explore Angular’s modern standalone architecture without NgModules.",
  stack:
    "Angular standalone components with TypeScript routing and UI logic.",
  challenges: [
    "Standalone component structure",
    "Routing configuration"
  ],
  learnings: [
    "Angular architecture concepts",
    "Component isolation",
    "Frontend framework comparison"
  ]
},

{
  id: 21,
  title: "Blazor Portfolio App",
  category: "Frontend",
  description:
    "Interactive C# web application demonstrating Blazor WebAssembly capabilities.",
  image: port6Img,
  tags: ['C#', 'Blazor', '.NET', 'WebAssembly'],
  live: "https://cheery-shortbread-e9e183.netlify.app/",
  github: "https://github.com/cecilialetsau25/blazortools",
  duration: "2 months",
  about:
    "Built to demonstrate modern C# frontend development using Blazor.",
  stack:
    "Blazor WebAssembly with .NET runtime running client-side.",
  challenges: [
    "Understanding WebAssembly lifecycle",
    "Component interaction in Blazor"
  ],
  learnings: [
    "C# frontend development",
    "Blazor component lifecycle",
    "Cross-platform web apps"
  ]
}

];

const categories = ['All', 'Web Development', 'UI/UX Design', 'Mobile Design', 'Full Stack', 'Mobile App'];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const filteredProjects = selectedCategory === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === selectedCategory);

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const paginatedProjects = filteredProjects.slice(startIndex, startIndex + projectsPerPage);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-black py-20">
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-20">
          <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-6 animate-fade-in-up">
            Selected
            <br />
            <span className="text-[var(--color-accent)]">Projects</span>
          </h1>
          <p className="text-xl text-white/60 font-light max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            A collection of work showcasing innovation, creativity, and technical excellence.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-6 py-2 rounded-full text-sm font-light tracking-wide uppercase transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-[var(--color-accent)] text-black'
                  : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {paginatedProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative animate-fade-in-up cursor-pointer"
              style={{ 
                animationDelay: `${0.3 + index * 0.1}s`,
                perspective: '1000px'
              }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => setSelectedProject(project)}
            >
              {/* 3D Card Container */}
              <div className="relative transition-all duration-500 transform group-hover:-translate-y-2 group-hover:rotate-y-2" 
                   style={{ transformStyle: 'preserve-3d' }}>
                
                {/* Image Container with 3D effect */}
                <div className="relative overflow-hidden rounded-2xl bg-white/5 aspect-[4/5] mb-6 shadow-2xl group-hover:shadow-[var(--color-accent)]/20 transition-shadow duration-500">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  
                  {/* Duration Badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
                    <Clock size={14} className="text-[var(--color-accent)]" />
                    <span className="text-xs text-white font-light">{project.duration}</span>
                  </div>

                  {/* Hover Overlay with shimmer effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/20 to-transparent transition-opacity duration-300 ${
                    hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" 
                         style={{ 
                           backgroundSize: '200% 100%',
                           animation: hoveredProject === project.id ? 'shimmer 2s infinite' : 'none'
                         }} />
                  </div>

                  {/* Live & GitHub Icons */}
                  <div className={`absolute inset-0 flex items-center justify-center gap-3 transition-opacity duration-300 ${
                    hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center justify-center w-14 h-14 rounded-full bg-[var(--color-accent)] text-black hover:bg-[var(--color-accent)]/90 transition-all transform hover:scale-110 shadow-lg"
                    >
                      <ExternalLink size={22} />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center justify-center w-14 h-14 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all backdrop-blur-md transform hover:scale-110 shadow-lg"
                    >
                      <Github size={22} />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <div className="text-xs text-[var(--color-accent)] font-light uppercase tracking-wider mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-light mb-3 group-hover:text-[var(--color-accent)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/60 font-light mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Tags with Icons */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 text-xs rounded-full bg-white/5 text-white/70 border border-white/10 flex items-center gap-1.5"
                      >
                        <div className="w-2 h-2 rounded-full bg-[var(--color-accent)]" />
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-3 py-1.5 text-xs rounded-full bg-white/5 text-white/70 border border-white/10">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Explore Project Button */}
                  <button className="flex items-center gap-2 text-sm text-white/70 hover:text-[var(--color-accent)] transition-colors group/btn">
                    <span>Explore Project</span>
                    <ArrowUpRight size={16} className="transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-16">
            <button
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg bg-white/5 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 transition-all"
            >
              Previous
            </button>
            
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-10 h-10 rounded-lg transition-all ${
                  currentPage === i + 1
                    ? 'bg-[var(--color-accent)] text-black'
                    : 'bg-white/5 text-white hover:bg-white/10'
                }`}
              >
                {i + 1}
              </button>
            ))}
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg bg-white/5 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 transition-all"
            >
              Next
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        .rotate-y-2:hover {
          transform: translateY(-8px) rotateY(2deg);
        }
      `}</style>
    </div>
  );
}
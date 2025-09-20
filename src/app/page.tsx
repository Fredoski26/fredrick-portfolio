"use client";
import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Menu, X, Code, Briefcase, User, MessageSquare, ChevronDown, Star, Award, Zap } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: { clientX: any; clientY: any; }) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: User },
    { id: 'about', label: 'About', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: ExternalLink },
    { id: 'contact', label: 'Contact', icon: MessageSquare },
  ];

  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description: "Led development of scalable web applications using React, Node.js, and cloud technologies. Managed a team of 5 developers and improved system performance by 40%.",
      icon: Award
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency Co.",
      period: "2020 - 2022",
      description: "Developed responsive web interfaces and mobile applications. Collaborated with UX/UI designers to create engaging user experiences.",
      icon: Code
    },
    {
      title: "Junior Developer",
      company: "StartUp Ventures",
      period: "2018 - 2020",
      description: "Built and maintained web applications using modern JavaScript frameworks. Gained experience in agile development methodologies.",
      icon: Zap
    }
  ];

  const skills = {
    "Frontend": ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "SASS"],
    "Backend": ["Node.js", "Python", "Express.js", "Django", "PostgreSQL", "MongoDB"],
    "Tools & Others": ["Git", "Docker", "AWS", "Jest", "Webpack", "GraphQL"]
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      github: "https://github.com/yourusername/ecommerce",
      live: "https://ecommerce-demo.com",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates and team collaboration features.",
      technologies: ["Vue.js", "Firebase", "Vuex", "Socket.io"],
      github: "https://github.com/yourusername/taskapp",
      live: "https://taskapp-demo.com",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop"
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather dashboard with location-based forecasts and data visualization.",
      technologies: ["React", "Chart.js", "Weather API", "Geolocation"],
      github: "https://github.com/yourusername/weather",
      live: "https://weather-dashboard-demo.com",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop"
    },
    {
      title: "Social Media Analytics",
      description: "Analytics dashboard for social media metrics with data visualization and reporting features.",
      technologies: ["Next.js", "D3.js", "Python", "REST API"],
      github: "https://github.com/yourusername/analytics",
      live: "https://analytics-demo.com",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
    },
    {
      title: "Recipe Finder App",
      description: "Mobile-first recipe application with search functionality and meal planning features.",
      technologies: ["React Native", "Redux", "Recipe API", "AsyncStorage"],
      github: "https://github.com/yourusername/recipes",
      live: "https://recipe-app-demo.com",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=250&fit=crop"
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio website showcasing projects and skills with modern design.",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Netlify"],
      github: "https://github.com/yourusername/portfolio",
      live: "https://yourportfolio.com",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop"
    }
  ];

  const FloatingElements = () => (
    <>
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="fixed pointer-events-none z-10"
          style={{
            left: `${10 + i * 15}%`,
            top: `${20 + i * 10}%`,
            transform: `translate(${mousePosition.x * (0.02 + i * 0.01)}px, ${mousePosition.y * (0.02 + i * 0.01)}px)`,
            transition: 'transform 0.2s ease-out'
          }}
        >
          <div
            className={`w-2 h-2 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 opacity-30`}
            style={{
              animation: `float ${3 + i}s ease-in-out infinite alternate`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        </div>
      ))}
      <style jsx>{`
        @keyframes float {
          from { transform: translateY(0px) rotate(0deg); }
          to { transform: translateY(-20px) rotate(360deg); }
        }
      `}</style>
    </>
  );

  type AnimatedCounterProps = {
    end: number;
    duration?: number;
    suffix?: string;
  };

  const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ end, duration = 2000, suffix = "" }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let startTime: number | undefined;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }, [end, duration]);

    return <span>{count}{suffix}</span>;
  };

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <FloatingElements />
      
      {/* Animated cursor follower */}
      <div
        className="fixed w-4 h-4 pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transition: 'all 0.1s ease-out'
        }}
      >
        <div className="w-full h-full bg-white rounded-full opacity-50 animate-pulse" />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm transition-all duration-500 ${
        isLoaded ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className={`text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent transition-all duration-700 ${
              isLoaded ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
            }`}>
              <span className="inline-block animate-bounce">Portfolio</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map(({ id, label }, index) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`transition-all duration-300 hover:scale-110 transform ${
                    activeSection === id
                      ? 'text-blue-600 font-semibold scale-110'
                      : 'text-gray-700 hover:text-blue-600'
                  } ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className={`md:hidden transition-all duration-500 hover:scale-110 ${
                isLoaded ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="relative">
                {isMenuOpen ? <X size={24} className="animate-spin" /> : <Menu size={24} />}
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden transition-all duration-500 overflow-hidden ${
            isMenuOpen ? 'max-h-96 py-4' : 'max-h-0'
          } border-t`}>
            {navItems.map(({ id, label, icon: Icon }, index) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`flex items-center space-x-3 w-full py-2 text-left text-gray-700 hover:text-blue-600 transition-all duration-300 hover:translate-x-2 ${
                  isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <Icon size={20} className="animate-pulse" />
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-20 relative">
            {/* Animated background shapes */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full"
                  style={{
                    width: `${100 + i * 50}px`,
                    height: `${100 + i * 50}px`,
                    left: `${10 + i * 10}%`,
                    top: `${10 + i * 5}%`,
                    animation: `float ${4 + i}s ease-in-out infinite alternate`,
                    animationDelay: `${i * 0.5}s`
                  }}
                />
              ))}
            </div>

            <div className={`relative z-10 transition-all duration-1000 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}>
              <div className={`w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center transition-all duration-1000 hover:scale-110 hover:rotate-12 ${
                isLoaded ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
              }`} style={{ transitionDelay: '200ms' }}>
                <User size={60} className="text-white animate-pulse" />
              </div>
              
              <h1 className={`text-5xl md:text-7xl font-bold text-gray-900 mb-6 transition-all duration-1000 ${
                isLoaded ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
              }`} style={{ transitionDelay: '400ms' }}>
                <span className="inline-block hover:animate-bounce cursor-default">Your</span>{' '}
                <span className="inline-block hover:animate-bounce cursor-default" style={{ animationDelay: '0.1s' }}>Name</span>
              </h1>
              
              <p className={`text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto transition-all duration-1000 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`} style={{ transitionDelay: '600ms' }}>
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
                  Full Stack Developer & UI/UX Enthusiast
                </span>
              </p>
              
              <p className={`text-lg text-gray-500 mb-12 max-w-2xl mx-auto transition-all duration-1000 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`} style={{ transitionDelay: '800ms' }}>
                Passionate about creating beautiful, functional, and user-centered digital experiences. 
                Let's build something amazing together.
              </p>
              
              <button
                onClick={() => scrollToSection('contact')}
                className={`bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-110 transition-all duration-300 hover:-translate-y-2 ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: '1000ms' }}
              >
                <span className="flex items-center space-x-2">
                  <span>Get In Touch</span>
                  <div className="animate-bounce">
                    <ChevronDown size={20} className="rotate-[-90deg]" />
                  </div>
                </span>
              </button>
            </div>

            {/* Animated scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ChevronDown size={24} className="text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 transform hover:scale-105 transition-transform duration-300">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto animate-pulse"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="group">
              <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center transform hover:scale-105 hover:rotate-2 transition-all duration-500 group-hover:shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 transform translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
                <User size={120} className="text-gray-400 transform group-hover:scale-110 transition-transform duration-300 relative z-10" />
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="transform hover:translate-x-2 transition-transform duration-300">
                <p className="text-lg text-gray-600 leading-relaxed hover:text-gray-800 transition-colors duration-300">
                  I'm a passionate Full Stack Developer with over{' '}
                  <span className="font-bold text-blue-600">
                    <AnimatedCounter end={5} />+
                  </span>{' '}
                  years of experience creating digital solutions that make a difference. I love turning complex problems into simple, beautiful designs that users enjoy interacting with.
                </p>
              </div>
              
              <div className="transform hover:translate-x-2 transition-transform duration-300" style={{ transitionDelay: '100ms' }}>
                <p className="text-lg text-gray-600 leading-relaxed hover:text-gray-800 transition-colors duration-300">
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community. I believe in continuous learning and staying up-to-date with the latest industry trends.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-gray-50 rounded-xl transform hover:scale-105 hover:bg-blue-50 transition-all duration-300 group">
                  <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">Location</h4>
                  <p className="text-gray-600">Lagos, Nigeria</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl transform hover:scale-105 hover:bg-purple-50 transition-all duration-300 group">
                  <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">Experience</h4>
                  <p className="text-gray-600">
                    <AnimatedCounter end={5} />+ Years
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 transform hover:scale-105 transition-transform duration-300">
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto animate-pulse"></div>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group relative overflow-hidden"
                style={{ 
                  animation: `slideIn 0.8s ease-out ${index * 200}ms both`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 transform translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
                      <exp.icon className="text-white" size={20} />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                            {exp.title}
                          </h3>
                          <p className="text-lg text-blue-600 font-semibold group-hover:text-purple-600 transition-colors duration-300">
                            {exp.company}
                          </p>
                        </div>
                        <span className="text-gray-500 font-medium mt-2 md:mt-0 bg-gray-100 px-3 py-1 rounded-full group-hover:bg-blue-100 group-hover:text-blue-600 transition-all duration-300">
                          {exp.period}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed ml-16 group-hover:text-gray-800 transition-colors duration-300">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateX(-50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}</style>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 transform hover:scale-105 transition-transform duration-300">
              Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto animate-pulse"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], categoryIndex) => (
              <div 
                key={category} 
                className="bg-gray-50 rounded-2xl p-8 transform hover:scale-105 hover:-translate-y-4 transition-all duration-500 hover:shadow-2xl group relative overflow-hidden"
                style={{ 
                  animation: `slideUp 0.8s ease-out ${categoryIndex * 200}ms both`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>
                
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 text-center group-hover:text-blue-600 transition-colors duration-300">
                    {category}
                  </h3>
                  <div className="space-y-3">
                    {skillList.map((skill, index) => (
                      <div 
                        key={index} 
                        className="bg-white rounded-lg px-4 py-3 text-center transform hover:scale-105 hover:bg-blue-50 transition-all duration-300 hover:shadow-md group/skill cursor-pointer"
                        style={{ 
                          animation: `slideUp 0.6s ease-out ${(categoryIndex * 200) + (index * 100)}ms both`
                        }}
                      >
                        <span className="text-gray-700 font-medium group-hover/skill:text-blue-600 transition-colors duration-300">
                          {skill}
                        </span>
                        <div className="w-0 h-0.5 bg-blue-600 group-hover/skill:w-full transition-all duration-300 mx-auto mt-1"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(50px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 transform hover:scale-105 transition-transform duration-300">
              Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto animate-pulse"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-4 group relative"
                style={{ 
                  animation: `projectSlide 0.8s ease-out ${index * 150}ms both`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 transform scale-0 group-hover:scale-100 transition-transform duration-700 rounded-2xl"></div>
                
                <div className="relative z-10">
                  <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center relative overflow-hidden group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300">
                    <Code size={60} className="text-gray-400 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium transform hover:scale-110 transition-all duration-300 hover:bg-blue-100 cursor-pointer"
                          style={{ 
                            animation: `techPop 0.4s ease-out ${techIndex * 100}ms both`
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-110 transform group/link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={16} className="group-hover/link:rotate-12 transition-transform duration-300" />
                        <span className="text-sm">Code</span>
                      </a>
                      <a
                        href={project.live}
                        className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-110 transform group/link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={16} className="group-hover/link:rotate-12 transition-transform duration-300" />
                        <span className="text-sm">Live</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes projectSlide {
            from {
              opacity: 0;
              transform: translateY(30px) rotate(-2deg);
            }
            to {
              opacity: 1;
              transform: translateY(0) rotate(0deg);
            }
          }
          @keyframes techPop {
            from {
              opacity: 0;
              transform: scale(0.5);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}</style>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 transform hover:scale-105 transition-transform duration-300">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto animate-pulse"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8" style={{ animation: 'slideInLeft 1s ease-out' }}>
              <div className="transform hover:translate-x-2 transition-transform duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's Work Together</h3>
                <p className="text-gray-600 mb-8 leading-relaxed hover:text-gray-800 transition-colors duration-300">
                  I'm always interested in new opportunities and exciting projects. 
                  Whether you have a project in mind or just want to chat about technology, 
                  feel free to reach out!
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { icon: Mail, label: "Email", value: "your.email@example.com", color: "blue" },
                  { icon: Phone, label: "Phone", value: "+234 123 456 7890", color: "green" },
                  { icon: MapPin, label: "Location", value: "Lagos, Nigeria", color: "purple" }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 hover:translate-x-2 group cursor-pointer"
                    style={{ animation: `slideInLeft 0.8s ease-out ${index * 200}ms both` }}
                  >
                    <div className={`w-12 h-12 bg-${item.color}-50 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                      <item.icon className={`text-${item.color}-600 group-hover:animate-bounce`} size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {item.label}
                      </p>
                      <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex space-x-4 mt-8" style={{ animation: 'slideInLeft 1.2s ease-out' }}>
                {[
                  { href: "https://github.com/yourusername", icon: Github, bg: "gray-900", hover: "gray-800" },
                  { href: "https://linkedin.com/in/yourprofile", icon: Linkedin, bg: "blue-600", hover: "blue-700" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-12 h-12 bg-${social.bg} rounded-full flex items-center justify-center text-white hover:bg-${social.hover} transition-all duration-300 transform hover:scale-125 hover:-translate-y-2 hover:rotate-12 hover:shadow-2xl`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ animation: `socialPop 0.6s ease-out ${index * 200}ms both` }}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl group relative overflow-hidden" style={{ animation: 'slideInRight 1s ease-out' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 transform translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
              
              <div className="space-y-6 relative z-10">
                {[
                  { label: "Name", type: "text", placeholder: "Your Name" },
                  { label: "Email", type: "email", placeholder: "your.email@example.com" },
                ].map((field, index) => (
                  <div 
                    key={index}
                    className="transform hover:translate-x-2 transition-transform duration-300"
                    style={{ animation: `fadeInUp 0.8s ease-out ${index * 200}ms both` }}
                  >
                    <label className="block text-sm font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all duration-300 hover:border-blue-400 focus:scale-105"
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}

                <div 
                  className="transform hover:translate-x-2 transition-transform duration-300"
                  style={{ animation: 'fadeInUp 0.8s ease-out 400ms both' }}
                >
                  <label className="block text-sm font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all duration-300 resize-none hover:border-blue-400 focus:scale-105"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="button"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:-translate-y-1 group/button relative overflow-hidden"
                  onClick={() => alert('Contact form submitted! (This is a demo)')}
                  style={{ animation: 'fadeInUp 0.8s ease-out 600ms both' }}
                >
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <span>Send Message</span>
                    <div className="animate-bounce group-hover/button:animate-pulse">
                      <Star size={16} className="group-hover/button:rotate-180 transition-transform duration-300" />
                    </div>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 transform scale-0 group-hover/button:scale-100 transition-transform duration-300 rounded-lg"></div>
                </button>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8" style={{ animation: 'fadeInUp 1s ease-out 800ms both' }}>
            {[
              { number: 50, suffix: "+", label: "Projects Completed" },
              { number: 5, suffix: "+", label: "Years Experience" },
              { number: 100, suffix: "%", label: "Client Satisfaction" },
              { number: 15, suffix: "+", label: "Technologies Mastered" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 group"
                style={{ animation: `statPop 0.6s ease-out ${index * 100}ms both` }}
              >
                <div className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes socialPop {
            from {
              opacity: 0;
              transform: scale(0) rotate(180deg);
            }
            to {
              opacity: 1;
              transform: scale(1) rotate(0deg);
            }
          }
          @keyframes statPop {
            from {
              opacity: 0;
              transform: scale(0.5) rotate(-10deg);
            }
            to {
              opacity: 1;
              transform: scale(1) rotate(0deg);
            }
          }
        `}</style>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/10 rounded-full"
              style={{
                left: `${20 + i * 20}%`,
                top: `${30 + i * 10}%`,
                animation: `twinkle ${2 + i}s ease-in-out infinite alternate`,
                animationDelay: `${i * 0.5}s`
              }}
            />
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-105">
            © 2024 Your Name. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <div className="w-8 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse"></div>
            <div className="w-8 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="w-8 h-0.5 bg-gradient-to-r from-pink-400 to-blue-400 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        <style jsx>{`
          @keyframes twinkle {
            from { opacity: 0.3; transform: scale(1); }
            to { opacity: 1; transform: scale(1.5); }
          }
        `}</style>
      </footer>
    </div>
  );
};

export default Portfolio;
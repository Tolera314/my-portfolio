"use client"

import { useState, useEffect } from "react"
import { Github } from "lucide-react"

const ProjectsSection = () => {
  const [filter, setFilter] = useState("all")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [animationKey, setAnimationKey] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const projects = [
    {
      id: 1,
      title: "Ethio Digital Learning",
      description:
        "An educational platform designed for Ethiopian students with videos, downloads, and interactive lessons.",
      image: "/ethio_digital.png",
      tech: ["React", "Node.js", "Supabase", "TypeScript"],
      category: "website",
      github: "https://github.com/Tolera314/ethio-digital-learning",
    },
    {
      id: 2,
      title: "Neural Text Analyzer",
      description: "Chrome extension using Mistral AI to analyze highlighted text instantly.",
      image: "/text_analyzer.png",
      tech: ["TypeScript", "JavaScript", "HTML", "CSS"],
      category: "extension",
      github: "https://github.com/Tolera314/Neural-Text-Analyzer",
    },
    {
      id: 3,
      title: "My Portfolio",
      description: "A creative portfolio site with a project gallery and contact form.",
      image: "/portfolio.png",
      tech: ["React", "Tailwind CSS", "TypeScript", "Vite", "shadcn-ui"],
      category: "website",
      github: "https://github.com/Tolera314/my-portfolio",
    },
    {
      id: 4,
      title: "Weather App",
      description: "Responsive weather app with real-time weather updates using WeatherAPI.",
      image: "/wether_app.png",
      tech: ["React", "Typescript", "OpenWeatherMap API", "Tailwind CSS"],
      category: "website",
      github: "https://github.com/Tolera314/weather-app",
    },
    {
      id: 5,
      title: "Local Event Finder",
      description: "Web app to find/manage events using JSP, Servlets, MySQL backend.",
      image: "/local_event.png",
      tech: ["Jsp", "HTML", "CSS", "Javascript", "Servlet", "MYSQL"],
      category: "website",
      github: "https://github.com/Tolera314/local-event-finder",
    },
  ]

  const categories = [
    { key: "all", label: "All Projects", shape: "cube" },
    { key: "website", label: "Websites", shape: "sphere" },
    { key: "extension", label: "Extensions", shape: "pyramid" },
  ]

  const filteredProjects =
    filter === "all" ? projects : projects.filter((project) => project.category?.toLowerCase() === filter)

  return (
    <section id="projects" className="py-20 px-4 relative scroll-mt-20 overflow-hidden">
   
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4"
            style={{
              transform: `
                perspective(1000px)
                rotateX(${Math.sin(scrollY * 0.01) * 10}deg)
                rotateY(${Math.cos(scrollY * 0.008) * 5}deg)
                translateZ(${Math.sin(scrollY * 0.005) * 20}px)
              `,
              animation: "pulse 3s ease-in-out infinite",
            }}
          >
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            A showcase of my recent work including web applications, Chrome extensions, and full-stack solutions.
          </p>
        </div>

        {/* Crazy 3D Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-6 mb-12" style={{ perspective: "1000px" }}>
          {categories.map((category, index) => {
            const delay = index * 0.2
            return (
              <button
                key={category.key}
                onClick={() => {
                  if (filter !== category.key) {
                    setIsTransitioning(true)
                    setTimeout(() => {
                      setFilter(category.key)
                      setAnimationKey((prev) => prev + 1)
                      setTimeout(() => setIsTransitioning(false), 100)
                    }, 300)
                  }
                }}
                className={`group relative px-8 py-4 rounded-xl transition-all duration-700 transform-gpu
                ${
                  filter === category.key
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-2xl shadow-blue-500/50"
                    : "bg-white/5 text-gray-300 hover:text-blue-400 border border-white/10"
                }
                backdrop-blur-sm overflow-hidden`}
                style={{
                  transform: `
                    perspective(1000px)
                    rotateX(${filter === category.key ? "15deg" : "0deg"})
                    rotateY(${filter === category.key ? "10deg" : "0deg"})
                    translateZ(${filter === category.key ? "20px" : "0px"})
                    scale(${filter === category.key ? "1.1" : "1"})
                  `,
                  animation: `
                    float ${2 + index * 0.3}s ease-in-out ${delay}s infinite alternate${
                      filter === category.key ? `, filterPulse 2s ease-in-out ${delay}s infinite` : ""
                    }
                  `,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = `
                  perspective(1000px)
                  rotateX(20deg)
                  rotateY(15deg)
                  translateZ(30px)
                  scale(1.15)
                `
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = `
                  perspective(1000px)
                  rotateX(${filter === category.key ? "15deg" : "0deg"})
                  rotateY(${filter === category.key ? "10deg" : "0deg"})
                  translateZ(${filter === category.key ? "20px" : "0px"})
                  scale(${filter === category.key ? "1.1" : "1"})
                `
                }}
              >
                <span className="relative z-10 font-semibold tracking-wide">{category.label}</span>
              </button>
            )
          })}
        </div>

        {/* Insane 3D Project Cards */}
        {filteredProjects.length === 0 ? (
          <p className="text-center text-gray-400 text-lg">No projects available in this category.</p>
        ) : (
          <div
            key={animationKey}
            className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 ${
              isTransitioning ? "opacity-0 scale-95 blur-sm" : "opacity-100 scale-100 blur-0"
            }`}
            style={{ perspective: "1000px" }}
          >
            {filteredProjects.map((project, index) => {
              const cardDelay = index * 0.1
              return (
                <div
                  key={project.id}
                  className="group relative bg-white/5 rounded-xl overflow-hidden transform-gpu transition-all duration-1000 backdrop-blur-sm"
                  style={{
                    transform: `
                    perspective(1000px)
                    rotateX(${Math.sin(scrollY * 0.01 + index) * 5}deg)
                    rotateY(${Math.cos(scrollY * 0.008 + index) * 5}deg)
                    translateZ(${Math.sin(Date.now() * 0.002 + index) * 10}px)
                    translateY(${isTransitioning ? "50px" : "0px"})
                  `,
                    animation: `
                    float ${3 + index * 0.2}s ease-in-out ${cardDelay}s infinite alternate,
                    slideInUp 0.8s ease-out ${cardDelay}s both${
                      isTransitioning ? `, slideOutDown 0.5s ease-in ${cardDelay}s both` : ""
                    }
                  `,
                    opacity: isTransitioning ? 0 : 1,
                  }}
                  onMouseEnter={(e) => {
                    if (!isTransitioning) {
                      e.currentTarget.style.transform = `
                      perspective(1000px)
                      rotateX(25deg)
                      rotateY(15deg)
                      translateZ(50px)
                      scale(1.05)
                      translateY(0px)
                    `
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isTransitioning) {
                      e.currentTarget.style.transform = `
                      perspective(1000px)
                      rotateX(${Math.sin(scrollY * 0.01 + index) * 5}deg)
                      rotateY(${Math.cos(scrollY * 0.008 + index) * 5}deg)
                      translateZ(${Math.sin(Date.now() * 0.002 + index) * 10}px)
                      translateY(0px)
                    `
                    }
                  }}
                >
                  {/* Morphing Image Section */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-all duration-1000 group-hover:scale-125"
                      style={{
                        transform: `
                        rotateZ(${Math.sin(Date.now() * 0.001 + index) * 2}deg)
                        scale(${1 + Math.sin(Date.now() * 0.003 + index) * 0.05})
                      `,
                        filter: "hue-rotate(0deg) saturate(1)",
                        transition: "all 1s ease-in-out",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.filter = "hue-rotate(45deg) saturate(1.5) brightness(1.2)"
                        e.currentTarget.style.transform = "rotateZ(5deg) scale(1.3)"
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.filter = "hue-rotate(0deg) saturate(1) brightness(1)"
                        e.currentTarget.style.transform = `
                        rotateZ(${Math.sin(Date.now() * 0.001 + index) * 2}deg)
                        scale(${1 + Math.sin(Date.now() * 0.003 + index) * 0.05})
                      `
                      }}
                    />
                    {/* GitHub Button with Crazy Animation */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                        {project.github && project.github !== "#" && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-all duration-500 transform hover:scale-125 backdrop-blur-sm relative z-50 cursor-pointer"
                            style={{
                              animation: "bounce 2s infinite, rotate-y 4s linear infinite",
                              pointerEvents: "auto",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform = "scale(1.4) rotateY(180deg) rotateZ(15deg)"
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = "scale(1) rotateY(0deg) rotateZ(0deg)"
                            }}
                          >
                            <Github className="w-6 h-6 text-white" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Content Section */}
                  <div className="p-6 relative">
                    {/* Morphing Border Effect */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-b-xl"
                      style={{
                        background: `
                        linear-gradient(135deg, 
                          rgba(59, 130, 246, 0.2) 0%, 
                          rgba(147, 51, 234, 0.2) 50%, 
                          rgba(236, 72, 153, 0.2) 100%
                        )
                      `,
                        filter: "blur(10px)",
                        transform: `scale(${1 + Math.sin(Date.now() * 0.004) * 0.1})`,
                      }}
                    />

                    <h3
                      className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-all duration-500 relative z-10"
                      style={{
                        transform: `translateZ(10px) rotateX(${Math.sin(Date.now() * 0.003) * 5}deg)`,
                      }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3 relative z-10 group-hover:text-gray-300 transition-colors duration-300">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 relative z-10">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20 transition-all duration-500 hover:bg-blue-500/20 cursor-pointer"
                          style={{
                            transform: `
                            translateZ(5px) 
                            rotateZ(${Math.sin(Date.now() * 0.002 + techIndex) * 3}deg)
                            scale(${1 + Math.sin(Date.now() * 0.004 + techIndex) * 0.05})
                          `,
                            animation: `float ${1.5 + techIndex * 0.2}s ease-in-out infinite alternate`,
                            animationDelay: `${techIndex * 0.1}s`,
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "translateZ(15px) rotateZ(10deg) scale(1.2)"
                            e.currentTarget.style.backgroundColor = "rgba(59, 130, 246, 0.3)"
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = `
                            translateZ(5px) 
                            rotateZ(${Math.sin(Date.now() * 0.002 + techIndex) * 3}deg)
                            scale(${1 + Math.sin(Date.now() * 0.004 + techIndex) * 0.05})
                          `
                            e.currentTarget.style.backgroundColor = "rgba(59, 130, 246, 0.1)"
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 3D Shadow Effect */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      transform: "translateZ(-20px) scale(1.1)",
                      filter: "blur(20px)",
                    }}
                  />
                </div>
              )
            })}
          </div>
        )}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotateZ(0deg); }
          50% { transform: translateY(-20px) rotateZ(5deg); }
        }
        
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes rotate-y {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(360deg); }
        }
        
        @keyframes slideInUp {
          0% { 
            opacity: 0; 
            transform: perspective(1000px) translateY(100px) rotateX(-30deg) scale(0.8);
          }
          100% { 
            opacity: 1; 
            transform: perspective(1000px) translateY(0px) rotateX(0deg) scale(1);
          }
        }
        
        @keyframes slideOutDown {
          0% { 
            opacity: 1; 
            transform: perspective(1000px) translateY(0px) rotateX(0deg) scale(1);
          }
          100% { 
            opacity: 0; 
            transform: perspective(1000px) translateY(-100px) rotateX(30deg) scale(0.8);
          }
        }
        
        @keyframes cardMorph {
          0% { 
            transform: perspective(1000px) rotateY(0deg) scale(1);
          }
          50% { 
            transform: perspective(1000px) rotateY(180deg) scale(0.8);
          }
          100% { 
            transform: perspective(1000px) rotateY(360deg) scale(1);
          }
        }
        
        @keyframes filterPulse {
          0% { 
            transform: perspective(1000px) scale(1) rotateX(0deg);
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          }
          50% { 
            transform: perspective(1000px) scale(1.05) rotateX(10deg);
            box-shadow: 0 0 40px rgba(59, 130, 246, 0.6);
          }
          100% { 
            transform: perspective(1000px) scale(1) rotateX(0deg);
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          }
        }
      `}</style>
    </section>
  )
}

export default ProjectsSection

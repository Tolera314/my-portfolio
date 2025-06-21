"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronDown } from "lucide-react"

const HeroSection = () => {
  const [text, setText] = useState("")
  const fullText = "Tolera Fayisa"
  const [showSubtext, setShowSubtext] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLElement>(null)

  // Enhanced typewriter effect
  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
        setTimeout(() => setShowSubtext(true), 500)
      }
    }, 150)

    return () => clearInterval(timer)
  }, [])

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const handleViewWork = () => {
    const projectsSection = document.getElementById("projects")
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleDownloadCV = () => {
    const link = document.createElement("a")
    link.href = "/Tolera_Fayisa_CV.pdf"
    link.download = "Tolera_Fayisa_CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Enhanced animated text for main title only
  const renderAnimatedMainTitle = (text: string) => {
    return text.split("").map((letter, index) => (
      <span
        key={index}
        style={{
          display: "inline-block",
          animation: `letterFloat 3s ease-in-out infinite, letterGlow 4s ease-in-out infinite, letterScale 2s ease-in-out infinite`,
          animationDelay: `${index * 0.1}s, ${index * 0.15}s, ${index * 0.2}s`,
          textShadow:
            "0 0 30px rgba(255, 255, 255, 0.8), 0 0 60px rgba(0, 217, 255, 0.6), 0 0 90px rgba(255, 0, 128, 0.4)",
        }}
      >
        {letter === " " ? "\u00A0" : letter}
      </span>
    ))
  }

  return (
    <>
      <style>{`
        @keyframes letterFloat {
          0%, 100% { 
            transform: translateY(0px) rotateZ(0deg) scale(1); 
          }
          25% { 
            transform: translateY(-15px) rotateZ(3deg) scale(1.05); 
          }
          50% { 
            transform: translateY(-25px) rotateZ(0deg) scale(1.1); 
          }
          75% { 
            transform: translateY(-15px) rotateZ(-3deg) scale(1.05); 
          }
        }

        @keyframes letterGlow {
          0% { 
            color: #ffffff;
            text-shadow: 0 0 20px rgba(255, 255, 255, 1), 0 0 40px rgba(0, 217, 255, 0.8), 0 0 60px rgba(0, 217, 255, 0.6);
          }
          20% { 
            color: #00d9ff;
            text-shadow: 0 0 25px rgba(0, 217, 255, 1), 0 0 50px rgba(0, 217, 255, 0.8), 0 0 75px rgba(255, 255, 255, 0.4);
          }
          40% { 
            color: #8000ff;
            text-shadow: 0 0 25px rgba(128, 0, 255, 1), 0 0 50px rgba(128, 0, 255, 0.8), 0 0 75px rgba(0, 217, 255, 0.4);
          }
          60% { 
            color: #ff0080;
            text-shadow: 0 0 25px rgba(255, 0, 128, 1), 0 0 50px rgba(255, 0, 128, 0.8), 0 0 75px rgba(128, 0, 255, 0.4);
          }
          80% { 
            color: #00ff80;
            text-shadow: 0 0 25px rgba(0, 255, 128, 1), 0 0 50px rgba(0, 255, 128, 0.8), 0 0 75px rgba(255, 0, 128, 0.4);
          }
          100% { 
            color: #ffffff;
            text-shadow: 0 0 20px rgba(255, 255, 255, 1), 0 0 40px rgba(0, 217, 255, 0.8), 0 0 60px rgba(0, 217, 255, 0.6);
          }
        }

        @keyframes letterScale {
          0%, 100% { 
            transform: scale(1); 
          }
          50% { 
            transform: scale(1.08); 
          }
        }

        @keyframes cursorCrazy {
          0%, 100% { 
            opacity: 1; 
            transform: scale(1) rotateZ(0deg);
            color: #ffffff;
            text-shadow: 0 0 20px rgba(255, 255, 255, 1);
          }
          25% { 
            opacity: 0.7; 
            transform: scale(1.3) rotateZ(90deg);
            color: #00d9ff;
            text-shadow: 0 0 30px rgba(0, 217, 255, 1);
          }
          50% { 
            opacity: 0; 
            transform: scale(1.6) rotateZ(180deg);
            color: #ff0080;
            text-shadow: 0 0 40px rgba(255, 0, 128, 1);
          }
          75% { 
            opacity: 0.7; 
            transform: scale(1.3) rotateZ(270deg);
            color: #8000ff;
            text-shadow: 0 0 30px rgba(128, 0, 255, 1);
          }
        }

        @keyframes titlePulse {
          0%, 100% { 
            filter: brightness(1) contrast(1);
            transform: scale(1);
          }
          50% { 
            filter: brightness(1.2) contrast(1.1);
            transform: scale(1.02);
          }
        }

        @keyframes dimLight {
          0%, 100% { 
            box-shadow: 0 0 10px rgba(0, 217, 255, 0.2), inset 0 0 10px rgba(0, 217, 255, 0.1);
            border-color: rgba(0, 217, 255, 0.3);
          }
          50% { 
            box-shadow: 0 0 20px rgba(0, 217, 255, 0.4), inset 0 0 15px rgba(0, 217, 255, 0.2);
            border-color: rgba(0, 217, 255, 0.5);
          }
        }

        @keyframes dimLightPurple {
          0%, 100% { 
            box-shadow: 0 0 10px rgba(128, 0, 255, 0.2), inset 0 0 10px rgba(128, 0, 255, 0.1);
            border-color: rgba(128, 0, 255, 0.3);
          }
          50% { 
            box-shadow: 0 0 20px rgba(128, 0, 255, 0.4), inset 0 0 15px rgba(128, 0, 255, 0.2);
            border-color: rgba(128, 0, 255, 0.5);
          }
        }

        @keyframes dimLightPink {
          0%, 100% { 
            box-shadow: 0 0 10px rgba(255, 0, 128, 0.2), inset 0 0 10px rgba(255, 0, 128, 0.1);
            border-color: rgba(255, 0, 128, 0.3);
          }
          50% { 
            box-shadow: 0 0 20px rgba(255, 0, 128, 0.4), inset 0 0 15px rgba(255, 0, 128, 0.2);
            border-color: rgba(255, 0, 128, 0.5);
          }
        }

        /* Background animations from AboutSection */
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotateX(0deg); }
          50% { transform: translateY(-20px) rotateX(10deg); }
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes morph {
          0%, 100% { border-radius: 50%; }
          25% { border-radius: 0%; }
          50% { border-radius: 50% 0%; }
          75% { border-radius: 0% 50%; }
        }

        @keyframes rotateY {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }

        @keyframes skew {
          0%, 100% { transform: skewX(0deg) skewY(0deg); }
          25% { transform: skewX(15deg) skewY(5deg); }
          50% { transform: skewX(-10deg) skewY(-5deg); }
          75% { transform: skewX(5deg) skewY(10deg); }
        }

        @keyframes spin-crazy {
          0% { transform: rotate(0deg) scale(1); }
          25% { transform: rotate(90deg) scale(1.1); }
          50% { transform: rotate(180deg) scale(0.9); }
          75% { transform: rotate(270deg) scale(1.1); }
          100% { transform: rotate(360deg) scale(1); }
        }

        @keyframes spin-reverse {
          0% { transform: rotate(360deg) scale(1); }
          25% { transform: rotate(270deg) scale(0.9); }
          50% { transform: rotate(180deg) scale(1.1); }
          75% { transform: rotate(90deg) scale(0.9); }
          100% { transform: rotate(0deg) scale(1); }
        }

        @keyframes pulse-ring-crazy {
          0% { transform: scale(0.8); opacity: 1; }
          50% { transform: scale(1.4); opacity: 0.3; }
          100% { transform: scale(2); opacity: 0; }
        }

        @keyframes levitate {
          0%, 100% { transform: translateY(0px) rotateZ(0deg); }
          50% { transform: translateY(-20px) rotateZ(2deg); }
        }

        @keyframes subtle-rotate {
          0%, 100% { transform: rotateZ(0deg); }
          50% { transform: rotateZ(5deg); }
        }

        @keyframes image-float {
          0%, 100% { transform: scale(1) rotateZ(0deg); }
          50% { transform: scale(1.05) rotateZ(1deg); }
        }

        @keyframes hologram {
          0%, 100% { opacity: 0; transform: translateX(0px); }
          50% { opacity: 0.7; transform: translateX(5px); }
        }

        @keyframes hologram-reverse {
          0%, 100% { opacity: 0; transform: translateX(0px); }
          50% { opacity: 0.5; transform: translateX(-5px); }
        }

        @keyframes orbit-1 {
          0% { transform: rotate(0deg) translateX(100px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(100px) rotate(-360deg); }
        }

        @keyframes orbit-2 {
          0% { transform: rotate(0deg) translateX(80px) rotate(0deg); }
          100% { transform: rotate(-360deg) translateX(80px) rotate(360deg); }
        }

        @keyframes orbit-3 {
          0% { transform: rotate(0deg) translateX(120px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(120px) rotate(-360deg); }
        }

        @keyframes orbit-4 {
          0% { transform: rotate(0deg) translateX(60px) rotate(0deg); }
          100% { transform: rotate(-360deg) translateX(60px) rotate(360deg); }
        }

        .glass-card {
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
      `}</style>

      <section
        ref={heroRef}
        className="py-20 px-4 relative min-h-screen flex items-center justify-center overflow-hidden pt-24"
      >
        {/* Crazy 3D Floating Shapes - Same as AboutSection */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-10 left-10 w-20 h-20 rounded-full"
            style={{
              background: "rgba(0, 217, 255, 0.2)",
              animation: "float 8s ease-in-out infinite, spin 6s linear infinite",
              transform: "rotateX(45deg) rotateY(45deg)",
            }}
          />
          <div
            className="absolute top-32 right-20 w-16 h-16"
            style={{
              background: "rgba(128, 0, 255, 0.2)",
              animation: "float 6s ease-in-out infinite reverse, morph 4s ease-in-out infinite",
              clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            }}
          />
          <div
            className="absolute bottom-20 left-32 w-24 h-24 rounded-lg"
            style={{
              background: "rgba(255, 0, 128, 0.2)",
              animation: "float 10s ease-in-out infinite, rotateY 8s linear infinite",
              transform: "rotateZ(45deg)",
            }}
          />
          <div
            className="absolute top-1/2 right-10 w-12 h-32"
            style={{
              background: "rgba(0, 217, 255, 0.2)",
              animation: "float 7s ease-in-out infinite, skew 5s ease-in-out infinite",
              borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
            }}
          />
          <div
            className="absolute top-1/4 left-1/4 w-14 h-14 rounded-full"
            style={{
              background: "rgba(255, 0, 128, 0.15)",
              animation: "float 9s ease-in-out infinite, spin 7s linear infinite",
              transform: "rotateX(30deg) rotateY(30deg)",
            }}
          />
          <div
            className="absolute bottom-1/3 right-1/3 w-18 h-18"
            style={{
              background: "rgba(128, 0, 255, 0.15)",
              animation: "float 11s ease-in-out infinite reverse, morph 6s ease-in-out infinite",
              clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
            }}
          />
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 z-10 px-4 max-w-7xl mx-auto">
          {/* Enhanced Profile Image */}
          <div className="relative group">
            <div
              className="relative w-64 h-64 lg:w-80 lg:h-80"
              style={{
                animation: "levitate 6s ease-in-out infinite",
              }}
            >
        
              
              <div
                className="absolute -inset-2 rounded-full p-1 opacity-70"
                style={{
                  background: "linear-gradient(45deg, #ff0080, #00d9ff, #8000ff)",
                  animation: "spin-reverse 4s linear infinite",
                }}
              >
                <div className="w-full h-full bg-transparent rounded-full"></div>
              </div>
              {/* Profile Image */}
              <div
                className="relative w-full h-full rounded-full overflow-hidden transform transition-all duration-700 group-hover:scale-110 group-hover:rotate-12"
                style={{
                  transform: `perspective(1000px) rotateX(${mousePosition.y * 20 - 10}deg) rotateY(${mousePosition.x * 20 - 10}deg)`,
                  animation: "subtle-rotate 8s ease-in-out infinite",
                }}
              >
                <img
                  src="/toliImage.png?height=320&width=320"
                  alt="Tolera Fayisa"
                  className="w-full h-full object-cover transform transition-all duration-1000 group-hover:scale-125"
                  style={{
                    animation: "image-float 4s ease-in-out infinite",
                  }}
                />

                
              </div>
              <div
                className="absolute bottom-20 -left-6 w-3 h-3 rounded-full"
                style={{
                  backgroundColor: "#8000ff",
                  boxShadow: "0 0 15px rgba(128,0,255,0.8)",
                  animation: "orbit-2 6s linear infinite",
                }}
              ></div>
              <div
                className="absolute top-1/2 -right-8 w-5 h-5 rounded-full"
                style={{
                  backgroundColor: "#ff0080",
                  boxShadow: "0 0 25px rgba(255,0,128,0.8)",
                  animation: "orbit-3 10s linear infinite",
                }}
              ></div>
              <div
                className="absolute bottom-10 left-10 w-2 h-2 rounded-full"
                style={{
                  backgroundColor: "#00ffff",
                  boxShadow: "0 0 10px rgba(0,255,255,0.8)",
                  animation: "orbit-4 4s linear infinite",
                }}
              ></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="mb-8">
              <h1
                className="text-5xl md:text-7xl lg:text-8xl font-bold relative z-10"
                style={{
                  animation: "titlePulse 3s ease-in-out infinite",
                  filter: "drop-shadow(0 0 20px rgba(0, 0, 0, 0.8))",
                }}
              >
                <span className="inline-block relative">
                  {renderAnimatedMainTitle(text)}
                  <div
                    className="absolute inset-0 -z-10"
                    style={{
                      background: "linear-gradient(45deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6))",
                      filter: "blur(20px)",
                      transform: "scale(1.2)",
                    }}
                  ></div>
                </span>
                <span
                  style={{
                    animation: "cursorCrazy 1.5s infinite",
                    display: "inline-block",
                    marginLeft: "5px",
                  }}
                >
                  |
                </span>
              </h1>
            </div>

            <div
              className={`transition-all duration-1000 ${showSubtext ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <p className="text-xl md:text-2xl mb-4 text-cyan-400 font-semibold">Full Stack Developer</p>

              <p className="text-lg mb-8 max-w-2xl text-gray-300">
                4th-year Software Engineering student passionate about creating innovative web applications and Chrome
                extensions
              </p>

              {/* Skill tags with slow dim light */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12">
                <span
                  className="px-4 py-2 glass-card rounded-full text-cyan-400 border cursor-default"
                  style={{
                    animation: "dimLight 4s ease-in-out infinite",
                  }}
                >
                  Creative Thinker
                </span>
                <span
                  className="px-4 py-2 glass-card rounded-full text-purple-400 border cursor-default"
                  style={{
                    animation: "dimLightPurple 4s ease-in-out infinite",
                    animationDelay: "1.3s",
                  }}
                >
                  Problem Solver
                </span>
                <span
                  className="px-4 py-2 glass-card rounded-full text-pink-400 border cursor-default"
                  style={{
                    animation: "dimLightPink 4s ease-in-out infinite",
                    animationDelay: "2.6s",
                  }}
                >
                  Innovation Driven
                </span>
              </div>

              {/* Buttons with light gradients */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={handleViewWork}
                  className="px-8 py-4 rounded-full text-white font-semibold hover:scale-105 transition-all duration-300 cursor-pointer"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(0, 217, 255, 0.8), rgba(128, 0, 255, 0.6), rgba(255, 0, 128, 0.4))",
                    boxShadow: "0 4px 20px rgba(0, 217, 255, 0.3)",
                  }}
                >
                  View My Work
                </button>
                <button
                  onClick={handleDownloadCV}
                  className="px-8 py-4 glass-card rounded-full hover:scale-105 transition-all duration-300 cursor-pointer"
                  style={{
                    background: "linear-gradient(135deg, rgba(0, 217, 255, 0.1), rgba(128, 0, 255, 0.1))",
                    color: "#00d9ff",
                    border: "1px solid rgba(0, 217, 255, 0.3)",
                    boxShadow: "0 4px 15px rgba(0, 217, 255, 0.2)",
                  }}
                >
                  Download CV
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Down arrow positioned at bottom right */}
        <div className="absolute bottom-8 center-8 animate-bounce">
          <ChevronDown
            className="w-8 h-8 text-cyan-400"
            style={{
              filter: "drop-shadow(0 0 10px rgba(0, 217, 255, 0.6))",
            }}
          />
        </div>
      </section>
    </>
  )
}

export default HeroSection

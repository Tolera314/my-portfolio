"use client"

const AboutSection = () => {
  const frontend = ["React.js", "TypeScript", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"]
  const backend = ["Node.js", "Java", "Python", "PHP"]
  const databases = ["MongoDB", "MySQL", "SQL"]
  const tools = ["Git", "GitHub", "Figma", "Framer"]

  const SkillCategory = ({ title, skills, color }: { title: string; skills: string[]; color: string }) => (
    <div
      className="glass-card p-6 rounded-xl hover:scale-110 hover:rotate-3 hover:-translate-y-4 transition-all duration-500 transform-gpu perspective-1000 hover:shadow-2xl hover:shadow-neon-blue/50 animate-pulse"
      style={{
        animation: "float 6s ease-in-out infinite, wiggle 4s ease-in-out infinite",
        transformStyle: "preserve-3d",
      }}
    >
      <h4
        className={`text-lg font-semibold mb-4 text-${color} transform hover:rotateX-12 hover:rotateY-12 transition-all duration-300`}
        style={{
          textShadow: "0 0 20px currentColor, 0 0 40px currentColor",
          animation: "textGlow 2s ease-in-out infinite alternate",
        }}
      >
        {title}
      </h4>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={skill}
            className={`px-3 py-1 bg-${color}/10 text-${color} rounded-full text-sm border border-${color}/20 hover:bg-${color}/20 transition-all duration-300 hover:scale-125 transform-gpu cursor-pointer`}
            style={{
              animationDelay: `${index * 0.2}s`,
              animation: "bounce 2s infinite, waveMotion 3s ease-in-out infinite",
              textShadow: "0 0 10px currentColor",
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Crazy 3D Floating Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-10 left-10 w-20 h-20 bg-neon-blue/20 rounded-full"
          style={{
            animation: "float 8s ease-in-out infinite, spin 6s linear infinite",
            transform: "rotateX(45deg) rotateY(45deg)",
          }}
        />
        <div
          className="absolute top-32 right-20 w-16 h-16 bg-neon-purple/20"
          style={{
            animation: "float 6s ease-in-out infinite reverse, morph 4s ease-in-out infinite",
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          }}
        />
        <div
          className="absolute bottom-20 left-32 w-24 h-24 bg-neon-pink/20 rounded-lg"
          style={{
            animation: "float 10s ease-in-out infinite, rotateY 8s linear infinite",
            transform: "rotateZ(45deg)",
          }}
        />
        <div
          className="absolute top-1/2 right-10 w-12 h-32 bg-neon-blue/20"
          style={{
            animation: "float 7s ease-in-out infinite, skew 5s ease-in-out infinite",
            borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 fade-in-up">
   <h2
  className="text-4xl md:text-5xl font-bold text-center mb-12 text-neon-blue hover:text-neon-purple transition-all duration-500"
  style={{
    animation: "titleFloat 4s ease-in-out infinite, titleGlow 3s ease-in-out infinite alternate",
    textShadow: "0 0 30px rgba(59,130,246,0.5), 0 0 60px rgba(147,51,234,0.5)",
    transformStyle: "preserve-3d"
  }}
>
  {"About Me".split("").map((char, i) => (
    <span
      key={i}
      className="inline-block hover:animate-bounce"
      style={{
        animation: "letterDance 2s ease-in-out infinite",
        animationDelay: `${i * 0.1}s`,
        display: char === " " ? "inline-block" : undefined
      }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ))}
</h2>

          <p
            className="text-gray-400 text-lg max-w-3xl mx-auto transform hover:scale-105 hover:rotateX-6 transition-all duration-300"
            style={{
              animation: "textWave 3s ease-in-out infinite",
              textShadow: "0 0 15px rgba(156, 163, 175, 0.3)",
            }}
          >
            I'm a passionate 4th-year Software Engineering student with a strong focus on full-stack development. I love
            solving complex problems and creating innovative solutions that make a difference.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div
            className="fade-in-left transform hover:scale-105 hover:rotateY-12 transition-all duration-500"
            style={{ animation: "slideInLeft 1s ease-out, float 8s ease-in-out infinite" }}
          >
            <div
              className="glass-card p-8 rounded-xl hover:shadow-2xl hover:shadow-neon-blue/30 transform hover:-translate-y-6 hover:rotateX-6 transition-all duration-500"
              style={{
                animation: "cardFloat 6s ease-in-out infinite",
                transformStyle: "preserve-3d",
              }}
            >
              <h3
                className="text-2xl font-bold text-neon-blue mb-6 transform hover:scale-110 hover:rotateZ-3 transition-all duration-300"
                style={{
                  animation: "textPulse 2s ease-in-out infinite",
                  textShadow: "0 0 20px currentColor, 0 0 40px currentColor",
                }}
              >
                My Journey
              </h3>
              <div className="space-y-4 text-gray-300">
                {[
                  "🎓 Currently pursuing Software Engineering with a passion for both frontend and backend development",
                  "💡 Problem-solving driven developer who enjoys tackling complex challenges",
                  "🏆 Certified developer with credentials from FreeCodeCamp and other platforms",
                  "�� Building innovative web applications and Chrome extensions",
                  "📈 Constantly learning and adapting to new technologies and frameworks",
                ].map((text, index) => (
                  <p
                    key={index}
                    className="hover:text-neon-blue hover:scale-105 hover:translate-x-4 transition-all duration-300 cursor-pointer"
                    style={{
                      animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both, textShimmer 4s ease-in-out infinite`,
                      animationDelay: `${index * 0.2}s`,
                    }}
                  >
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div
            className="fade-in-right transform hover:scale-105 hover:rotateY-12 transition-all duration-500"
            style={{ animation: "slideInRight 1s ease-out, float 8s ease-in-out infinite reverse" }}
          >
            <div
              className="glass-card p-8 rounded-xl hover:shadow-2xl hover:shadow-neon-purple/30 transform hover:-translate-y-6 hover:rotateX-6 transition-all duration-500"
              style={{
                animation: "cardFloat 6s ease-in-out infinite",
                animationDelay: "1s",
                transformStyle: "preserve-3d",
              }}
            >
              <h3
                className="text-2xl font-bold text-neon-purple mb-6 transform hover:scale-110 hover:rotateZ-3 transition-all duration-300"
                style={{
                  animation: "textPulse 2s ease-in-out infinite",
                  animationDelay: "0.5s",
                  textShadow: "0 0 20px currentColor, 0 0 40px currentColor",
                }}
              >
                Personality Traits
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Creative Thinker",
                  "Problem Solver",
                  "Team Player",
                  "Quick Learner",
                  "Detail Oriented",
                  "Innovation Focused",
                  "Goal Driven",
                  "Collaborative",
                ].map((trait, index) => (
                  <div
                    key={trait}
                    className="p-3 bg-neon-purple/10 rounded-lg text-center text-neon-purple border border-neon-purple/20 hover:scale-110 hover:rotate-6 hover:skew-y-3 transition-all duration-300 cursor-pointer transform-gpu"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      animation: "traitFloat 3s ease-in-out infinite, traitGlow 2s ease-in-out infinite alternate",
                      textShadow: "0 0 10px currentColor",
                    }}
                  >
                    {trait}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="fade-in-up">
          <h3
            className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent transform hover:scale-110 hover:rotateX-12 transition-all duration-500"
            style={{
              animation: "titleFloat 4s ease-in-out infinite, titleGlow 3s ease-in-out infinite alternate",
              textShadow: "0 0 30px rgba(59, 130, 246, 0.5), 0 0 60px rgba(147, 51, 234, 0.5)",
            }}
          >
            Technical Skills
          </h3>

          <div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            style={{ animation: "gridFloat 8s ease-in-out infinite" }}
          >
            <SkillCategory title="Frontend" skills={frontend} color="neon-blue" />
            <SkillCategory title="Backend" skills={backend} color="neon-purple" />
            <SkillCategory title="Databases" skills={databases} color="neon-pink" />
            <SkillCategory title="Tools & Version Control" skills={tools} color="neon-blue" />
          </div>
        </div>
      </div>

      {/* Custom CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotateX(0deg); }
          50% { transform: translateY(-20px) rotateX(10deg); }
        }
        
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(3deg); }
          75% { transform: rotate(-3deg); }
        }
        
        @keyframes textGlow {
          0% { text-shadow: 0 0 20px currentColor; }
          100% { text-shadow: 0 0 40px currentColor, 0 0 60px currentColor; }
        }
        
        @keyframes letterDance {
          0%, 100% { transform: translateY(0px) rotateZ(0deg); }
          25% { transform: translateY(-10px) rotateZ(5deg); }
          50% { transform: translateY(-5px) rotateZ(-5deg); }
          75% { transform: translateY(-15px) rotateZ(3deg); }
        }
        
        @keyframes textFloat {
          0%, 100% { transform: translateY(0px) rotateX(0deg); }
          50% { transform: translateY(-10px) rotateX(5deg); }
        }
        
        @keyframes textWave {
          0%, 100% { transform: translateY(0px) skewX(0deg); }
          25% { transform: translateY(-5px) skewX(2deg); }
          75% { transform: translateY(-3px) skewX(-2deg); }
        }
        
        @keyframes cardFloat {
          0%, 100% { transform: translateY(0px) rotateY(0deg); }
          33% { transform: translateY(-15px) rotateY(5deg); }
          66% { transform: translateY(-5px) rotateY(-5deg); }
        }
        
        @keyframes textPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes textShimmer {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        
        @keyframes traitFloat {
          0%, 100% { transform: translateY(0px) rotateZ(0deg); }
          50% { transform: translateY(-8px) rotateZ(2deg); }
        }
        
        @keyframes traitGlow {
          0% { box-shadow: 0 0 10px currentColor; }
          100% { box-shadow: 0 0 20px currentColor, 0 0 30px currentColor; }
        }
        
        @keyframes titleFloat {
          0%, 100% { transform: translateY(0px) rotateX(0deg); }
          50% { transform: translateY(-12px) rotateX(8deg); }
        }
        
        @keyframes titleGlow {
          0% { filter: drop-shadow(0 0 20px rgba(59, 130, 246, 0.5)); }
          100% { filter: drop-shadow(0 0 40px rgba(147, 51, 234, 0.8)); }
        }
        
        @keyframes gridFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes slideInLeft {
          from { transform: translateX(-100px) rotateY(-90deg); opacity: 0; }
          to { transform: translateX(0) rotateY(0deg); opacity: 1; }
        }
        
        @keyframes slideInRight {
          from { transform: translateX(100px) rotateY(90deg); opacity: 0; }
          to { transform: translateX(0) rotateY(0deg); opacity: 1; }
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
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes waveMotion {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-8px) translateX(4px); }
          50% { transform: translateY(0px) translateX(8px); }
          75% { transform: translateY(8px) translateX(4px); }
        }
      `}</style>
    </section>
  )
}

export default AboutSection

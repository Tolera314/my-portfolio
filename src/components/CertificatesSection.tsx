"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, ExternalLink, Award, Calendar, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { easeOut } from "framer-motion"
export function Certificates() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const certificates = [
    {
      id: 1,
      title: "Responsive Web Design",
      issuer: "FreeCodeCamp",
      description:
        "Comprehensive certification covering HTML5, CSS3, Flexbox, CSS Grid, responsive design principles, and accessibility best practices.",
      logo: "/placeholder.png", 
      credentialUrl:
        "https://www.freecodecamp.org/certification/fcc6905939c-0993-47f6-b397-0c000a91b56f/responsive-web-design",
      skills: ["HTML5", "CSS3", "Responsive Design", "Flexbox", "CSS Grid", "Accessibility"],
      color: "from-blue-400 to-cyan-400",
    },
    {
      id: 2,
      title: "JavaScript Algorithms and Data Structures",
      issuer: "FreeCodeCamp",
      description:
        "Advanced JavaScript certification covering ES6+, algorithms, data structures, functional programming, and problem-solving techniques.",
      logo: "/placeholder.png",
      credentialUrl:
        "https://www.freecodecamp.org/certification/fcc6905939c-0993-47f6-b397-0c000a91b56f/javascript-algorithms-and-data-structures-v8",
      skills: ["JavaScript", "ES6+", "Algorithms", "Data Structures", "Functional Programming", "Problem Solving"],
      color: "from-yellow-400 to-orange-400",
    },
    {
      id: 3,
      title: "Front End Development Libraries",
      issuer: "FreeCodeCamp",
      description:
        "Modern frontend development certification focusing on React, Redux, Sass, Bootstrap, and jQuery for building interactive user interfaces.",
      logo: "/placeholder.png",
      credentialUrl:
        "https://www.freecodecamp.org/certification/fcc6905939c-0993-47f6-b397-0c000a91b56f/front-end-development-libraries",
      skills: ["React", "Redux", "Sass", "Bootstrap", "jQuery", "State Management"],
      color: "from-green-400 to-emerald-400",
    },
  ]

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % certificates.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, certificates.length])

  const nextSlide = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % certificates.length)
  }

  const prevSlide = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length)
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 20,
        duration: 0.8,
      },
    },
  }



  const gradientBarVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.8,
        ease: easeOut,
      },
    },
  }

  return (
    <section id="certificates" className="py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 opacity-5"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, #8b5cf6 0%, transparent 50%)",
            "radial-gradient(circle at 80% 20%, #06b6d4 0%, transparent 50%)",
            "radial-gradient(circle at 40% 80%, #ec4899 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, #8b5cf6 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            My{" "}
            <motion.span
              className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
            >
              Certificates
            </motion.span>
          </motion.h2>

          <motion.div
            variants={gradientBarVariants}
            className="w-32 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 mx-auto mb-8 rounded-full origin-left"
          />

          <motion.p
            className="text-xl text-foreground/70 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Professional certifications that validate my commitment to continuous learning and technical excellence.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative max-w-6xl mx-auto"
        >
          <div className="relative h-96 overflow-visible">
            <div className="flex items-center justify-center h-full">
              <AnimatePresence mode="wait">
                {certificates.map((cert, index) => {
                  const offset = index - currentIndex
                  const absOffset = Math.abs(offset)
                  const isActive = offset === 0

                  return (
                    <motion.div
                      key={cert.id}
                      className="absolute cursor-pointer"
                      style={{
                        zIndex: certificates.length - absOffset,
                      }}
                      initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
                      animate={{
                        x: offset * 220,
                        scale: isActive ? 1 : 0.8 - absOffset * 0.1,
                        rotateY: offset * -25,
                        opacity: absOffset > 2 ? 0 : 1 - absOffset * 0.3,
                      }}
                      exit={{ opacity: 0, scale: 0.5, rotateY: -90 }}
                      transition={{
                        duration: 0.6,
                        ease: "easeOut",
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                      }}
                      onClick={() => goToSlide(index)}
                      whileHover={
                        isActive
                          ? {
                              scale: 1.05,
                              rotateY: 0,
                              transition: { duration: 0.3 },
                            }
                          : {}
                      }
                      whileTap={{ scale: 0.95 }}
                    >
                      <Card
                        className={`w-80 h-80 ${
                          isActive ? "border-purple-400/50 shadow-2xl shadow-purple-400/20" : "border-border/30"
                        } bg-card/80 backdrop-blur-sm hover:bg-card/90 transition-all duration-300 relative overflow-hidden`}
                      >
                        {/* Animated border gradient */}
                        {isActive && (
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 opacity-20 blur-sm"
                            animate={{
                              rotate: 360,
                            }}
                            transition={{
                              duration: 8,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "linear",
                            }}
                          />
                        )}

                        <CardContent className="p-6 h-full flex flex-col relative z-10">
                          <motion.div
                            className="flex items-center gap-4 mb-4"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                          >
                            <motion.div
                              className={`w-16 h-16 bg-gradient-to-br ${cert.color} rounded-full flex items-center justify-center flex-shrink-0 relative overflow-hidden`}
                              whileHover={{
                                scale: 1.1,
                                rotate: 360,
                                transition: { duration: 0.6 },
                              }}
                            >
                              <motion.div
                                className="absolute inset-0 bg-white/20"
                                animate={{
                                  scale: [1, 1.2, 1],
                                  opacity: [0.2, 0.5, 0.2],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Number.POSITIVE_INFINITY,
                                  ease: "easeInOut",
                                }}
                              />
                              <img
                                src={cert.logo}
                                alt={`${cert.title} logo`}
                                className="h-8 w-8 object-contain relative z-10"
/>

                            </motion.div>
                            <div className="flex-1 min-w-0">
                              <motion.h3
                                className="text-lg font-bold mb-1 line-clamp-2"
                                whileHover={{ x: 5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                              >
                                {cert.title}
                              </motion.h3>
                              <motion.p
                                className="text-purple-400 font-semibold text-sm"
                                whileHover={{ x: 5 }}
                                transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                              >
                                {cert.issuer}
                              </motion.p>
                            </div>
                          </motion.div>

                          <motion.div
                            className="flex items-center gap-4 mb-4 text-sm text-foreground/70"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                          >
                          </motion.div>

                          <motion.p
                            className="text-foreground/70 mb-4 text-sm leading-relaxed line-clamp-3 flex-1"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                          >
                            {cert.description}
                          </motion.p>

                          <motion.div
                            className="space-y-3"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                          >
                            <div className="flex flex-wrap gap-1">
                              {cert.skills.slice(0, 4).map((skill, skillIndex) => (
                                <motion.span
                                  key={skill}
                                  className="px-2 py-1 bg-purple-400/20 text-purple-400 rounded-full text-xs"
                                  initial={{ opacity: 0, scale: 0 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{
                                    delay: 0.6 + skillIndex * 0.1,
                                    type: "spring",
                                    stiffness: 200,
                                  }}
                                  whileHover={{
                                    scale: 1.1,
                                    backgroundColor: "rgba(168, 85, 247, 0.3)",
                                  }}
                                >
                                  {skill}
                                </motion.span>
                              ))}
                              {cert.skills.length > 4 && (
                                <motion.span
                                  className="px-2 py-1 bg-foreground/10 text-foreground/70 rounded-full text-xs"
                                  initial={{ opacity: 0, scale: 0 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{
                                    delay: 1,
                                    type: "spring",
                                    stiffness: 200,
                                  }}
                                  whileHover={{ scale: 1.1 }}
                                >
                                  +{cert.skills.length - 4}
                                </motion.span>
                              )}
                            </div>

                            <AnimatePresence>
                              {isActive && (
                                <motion.div
                                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                                  animate={{ opacity: 1, y: 0, scale: 1 }}
                                  exit={{ opacity: 0, y: -20, scale: 0.8 }}
                                  transition={{
                                    delay: 0.2,
                                    type: "spring",
                                    stiffness: 200,
                                    damping: 20,
                                  }}
                                >
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    className="w-full border-purple-400/50 hover:border-purple-400 hover:bg-purple-400/10 relative overflow-hidden group"
                                    asChild
                                  >
                                    <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                                      <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/20 to-transparent"
                                        initial={{ x: "-100%" }}
                                        whileHover={{ x: "100%" }}
                                        transition={{ duration: 0.6 }}
                                      />
                                      <ExternalLink className="h-4 w-4 mr-2 relative z-10" />
                                      <span className="relative z-10">View Credential</span>
                                    </a>
                                  </Button>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </motion.div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )
                })}
              </AnimatePresence>
            </div>
          </div>

          {/* Enhanced Navigation */}
          <motion.div
            className="flex justify-center items-center gap-6 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="rounded-full border-purple-400/50 hover:border-purple-400 hover:bg-purple-400/10 relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <ChevronLeft className="h-4 w-4 relative z-10" />
              </Button>
            </motion.div>

            <div className="flex gap-2">
              {certificates.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 relative overflow-hidden ${
                    index === currentIndex
                      ? "bg-gradient-to-r from-purple-400 to-cyan-400 scale-125"
                      : "bg-foreground/30 hover:bg-foreground/50"
                  }`}
                  whileHover={{ scale: index === currentIndex ? 1.4 : 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: index === currentIndex ? 1.25 : 1 }}
                  transition={{
                    delay: 1.2 + index * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                >
                  {index === currentIndex && (
                    <motion.div
                      className="absolute inset-0 bg-white/30 rounded-full"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="rounded-full border-purple-400/50 hover:border-purple-400 hover:bg-purple-400/10 relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-l from-purple-400/20 to-transparent"
                  initial={{ x: "100%" }}
                  whileHover={{ x: "-100%" }}
                  transition={{ duration: 0.6 }}
                />
                <ChevronRight className="h-4 w-4 relative z-10" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Auto-play indicator */}
          <motion.div
            className="flex justify-center mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <motion.button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`text-xs px-3 py-1 rounded-full transition-all duration-300 ${
                isAutoPlaying ? "bg-purple-400/20 text-purple-400" : "bg-foreground/10 text-foreground/50"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isAutoPlaying ? "Auto-playing" : "Paused"}
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certificates

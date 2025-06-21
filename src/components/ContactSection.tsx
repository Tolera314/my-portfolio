"use client"

import { useState, useEffect, useRef } from "react"
import { Github, Linkedin, MessageCircle, Mail, Phone, MapPin } from "lucide-react"
import emailjs from "@emailjs/browser"
import { motion, useInView, AnimatePresence, easeOut } from "framer-motion"
import { useToast } from "@/hooks/use-toast"
import { Card, CardContent } from "@/components/ui/card"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "tolefayiss@gmail.com",
    href: "mailto:tolefayiss@gmail.com",
    color: "from-red-400 to-pink-400",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+251 93 040 5193",
    href: "tel:+251930405193",
    color: "from-green-400 to-emerald-400",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Addis Ababa, Ethiopia",
    href: "https://maps.app.goo.gl/PHHu3g9TSVE4pYhD9",
    color: "from-blue-400 to-cyan-400",
  },
]

const socialLinks = [
  {
    icon: Github,
    name: "GitHub",
    href: "https://github.com/Tolera314",
    color: "hover:text-gray-400",
    gradient: "from-gray-400 to-gray-600",
  },
  {
    icon: Linkedin,
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/tolera-fayisa-590387344/",
    color: "hover:text-blue-400",
    gradient: "from-blue-400 to-blue-600",
  },
  {
    icon: MessageCircle,
    name: "Telegram",
    href: "https://web.telegram.org/k/",
    color: "hover:text-cyan-400",
    gradient: "from-cyan-400 to-cyan-600",
  },
]

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [focusedField, setFocusedField] = useState("")
  const { toast } = useToast()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    emailjs.init("X1GW-TllRkn5GKxHG")
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await emailjs.send("service_zutt6j4", "template_8tv4ajm", {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      })

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll respond soon.",
      })

      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      toast({
        title: "Sending Failed",
        description: "There was an issue sending your message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
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
    <section id="contact" className="py-20 relative overflow-hidden">
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
          duration: 8,
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
            Get In{" "}
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
              Touch
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
            Ready to bring your ideas to life? Let's collaborate and create something amazing together!
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                variants={itemVariants}
                className="group relative z-10 overflow-visible"
                whileHover={{
                  x: 15,
                  scale: 1.03,
                  transition: { type: "spring", stiffness: 400, damping: 25 },
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-r ${info.color} rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300 z-0`}
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.25, 0.4, 0.25],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
                <Card className="relative z-10 bg-card/80 backdrop-blur-sm border-0 hover:bg-card/90 transition-all duration-300">
                  <CardContent className="p-4">
                    <a
                       href={info.href}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex items-center gap-4 group/link"
>

                      <motion.div
                        className={`p-3 rounded-full bg-gradient-to-r ${info.color} text-white`}
                        whileHover={{
                          scale: 1.2,
                          rotate: 360,
                          transition: { duration: 0.5 },
                        }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <info.icon className="h-5 w-5" />
                      </motion.div>
                      <div>
                        <motion.h4
                          className="font-semibold group-hover/link:text-purple-400 transition-colors"
                          whileHover={{ x: 5 }}
                        >
                          {info.title}
                        </motion.h4>
                        <motion.p className="text-foreground/70" whileHover={{ x: 5 }} transition={{ delay: 0.1 }}>
                          {info.value}
                        </motion.p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            <motion.div variants={itemVariants} className="pt-4">
              <motion.h4 className="text-xl font-semibold mb-6 text-center" whileHover={{ scale: 1.05 }}>
                Follow My Journey
              </motion.h4>
              <div className="flex justify-center gap-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative z-10 overflow-visible"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      delay: 1.2 + index * 0.1,
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                    }}
                    whileHover={{
                      scale: 1.3,
                      rotate: [0, -10, 10, 0],
                      transition: {
                        scale: { duration: 0.2 },
                        rotate: { duration: 0.5 },
                      },
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <motion.div
                      className={`absolute -inset-2 bg-gradient-to-r ${social.gradient} rounded-full blur opacity-25 group-hover:opacity-75 transition duration-300 z-0`}
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        duration: 8,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                    />
                    <div className="relative z-10 p-4 rounded-full bg-foreground/10 backdrop-blur-sm hover:bg-foreground/20 transition-all duration-300">
                      <social.icon className={`h-6 w-6 transition-colors duration-300 ${social.color}`} />
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: 15 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.3,
              type: "spring",
              stiffness: 100,
            }}
            className="perspective-1000"
          >
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {[
                { name: "name", type: "text", placeholder: "Your Name" },
                { name: "email", type: "email", placeholder: "Your Email" },
              ].map((field, index) => (
                <motion.div key={field.name} variants={itemVariants} className="relative">
                  <motion.input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    onFocus={() => setFocusedField(field.name)}
                    onBlur={() => setFocusedField("")}
                    placeholder={field.placeholder}
                    required
                    className="w-full p-4 glass-card rounded-lg border border-neon-blue/20 bg-transparent text-white placeholder-gray-400 focus:border-neon-blue focus:outline-none transition-all duration-300"
                    whileFocus={{
                      scale: 1.02,
                      boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
                    }}
                  />
                  <AnimatePresence>
                    {focusedField === field.name && (
                      <motion.div
                        className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg blur opacity-30 -z-10"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 0.3, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}

              <motion.div variants={itemVariants} className="relative">
                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField("")}
                  placeholder="Your Message"
                  rows={5}
                  required
                  className="w-full p-4 glass-card rounded-lg border border-neon-blue/20 bg-transparent text-white placeholder-gray-400 focus:border-neon-blue focus:outline-none transition-all duration-300 resize-none"
                  whileFocus={{
                    scale: 1.02,
                    boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
                  }}
                />
                <AnimatePresence>
                  {focusedField === "message" && (
                    <motion.div
                      className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg blur opacity-30 -z-10"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 0.3, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.button
                variants={itemVariants}
                type="submit"
                disabled={isSubmitting}
                className={`w-full p-4 rounded-lg font-semibold transition-all duration-300 ${
                  isSubmitting
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-gradient-to-r from-neon-blue to-neon-purple hover:scale-105"
                } text-white relative overflow-hidden`}
                whileHover={
                  !isSubmitting
                    ? {
                        scale: 1.05,
                        boxShadow: "0 10px 30px rgba(139, 92, 246, 0.3)",
                      }
                    : {}
                }
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                <AnimatePresence mode="wait">
                  {isSubmitting ? (
                    <motion.div
                      key="submitting"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="flex items-center justify-center gap-2"
                    >
                      <motion.div
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      />
                      Sending...
                    </motion.div>
                  ) : (
                    <motion.span
                      key="send"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                    >
                      Send Message
                    </motion.span>
                  )}
                </AnimatePresence>

                {!isSubmitting && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                )}
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection

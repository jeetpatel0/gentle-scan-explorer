import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import logoFull from "@/assets/logo-full.png";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft gradient orbs */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary/[0.07] blur-[100px] animate-float" />
        <div className="absolute bottom-20 -left-20 w-96 h-96 rounded-full bg-accent/[0.06] blur-[80px] animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] rounded-full bg-primary/[0.04] blur-[120px] animate-pulse-slow" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: "40px 40px"
          }} />
        

        {/* Floating particles */}
        {[...Array(8)].map((_, i) =>
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-primary/15"
          style={{
            left: `${10 + i * 11}%`,
            top: `${15 + i % 4 * 20}%`
          }}
          animate={{
            y: [0, -25, 0],
            opacity: [0.15, 0.4, 0.15]
          }}
          transition={{
            duration: 5 + i * 0.7,
            repeat: Infinity,
            delay: i * 0.4
          }} />

        )}

        {/* Animated connection lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <motion.line
            x1="10%" y1="30%" x2="40%" y2="60%"
            stroke="hsl(var(--primary))" strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }} />
          
          <motion.line
            x1="60%" y1="20%" x2="85%" y2="70%"
            stroke="hsl(var(--primary))" strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, delay: 1, repeat: Infinity, repeatType: "reverse" }} />
          
          <motion.circle
            cx="40%" cy="60%" r="3"
            fill="hsl(var(--primary))"
            animate={{ opacity: [0.1, 0.4, 0.1] }}
            transition={{ duration: 3, repeat: Infinity }} />
          
          <motion.circle
            cx="85%" cy="70%" r="3"
            fill="hsl(var(--primary))"
            animate={{ opacity: [0.1, 0.4, 0.1] }}
            transition={{ duration: 4, delay: 1, repeat: Infinity }} />
          
        </svg>
      </div>

      <div className="section-container relative z-10 pt-20 lg:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start">
          
          {/* Full logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-10">
            
            <img

              alt="Lyosha Research Centre"
              className="h-20 md:h-28 w-auto object-fill" src="/lovable-uploads/6c6c316f-5b48-4488-901f-feb2cb83c5f0.png" />
            
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold leading-[1.1] mb-6 max-w-4xl">
            Complex Injectable Formulations, Built for a{" "}
            <span className="gradient-text">Changing Global Market</span>
          </h1>

          <p className="font-mono text-sm md:text-base tracking-[0.15em] text-primary/70 mb-6 uppercase">
            Where Innovation Meets Precision. Precision Creates Impact.
          </p>

          <p className="section-body mb-10 max-w-2xl">
            Lyosha Research Centre (LRC) is a specialist R&D platform focused on complex
            sterile injectables and advanced drug delivery systems. We develop high-barrier
            formulations that few facilities can execute, so manufacturers and global
            partners can enter demanding markets with confidence.
          </p>

          <div className="flex flex-wrap gap-4 mb-16">
            <Button variant="hero" size="lg" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
              Contact Us for a Platform Discussion
            </Button>
            <Button variant="hero-outline" size="lg" onClick={() => document.getElementById("platforms")?.scrollIntoView({ behavior: "smooth" })}>
              What We Work On
            </Button>
          </div>
        </motion.div>
      </div>
    </section>);

}

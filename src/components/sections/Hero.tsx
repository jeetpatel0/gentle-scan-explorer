import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroLabImage from "@/assets/hero-lab.jpg";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroLabImage}
          alt="Pharmaceutical laboratory"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/85 dark:bg-background/90" />
      </div>

      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-float" />
        <div className="absolute bottom-20 -left-20 w-72 h-72 rounded-full bg-accent/5 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.03] blur-[120px] animate-pulse-slow" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/20"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="section-container relative z-10 pt-20 lg:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start"
        >
          {/* Company name */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-2"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold gradient-text">
              Lyosha Research Centre
            </h2>
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="font-mono text-[10px] md:text-xs tracking-[0.25em] text-primary/80 mb-12 uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Where Innovation Meets Precision. Precision Creates Impact.
          </motion.p>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold leading-[1.1] mb-6 max-w-4xl">
            Complex Injectable Formulations, Built for a{" "}
            <span className="gradient-text">Changing Global Market</span>
          </h1>

          <p className="section-body mb-10 max-w-2xl">
            Lyosha Research Centre (LRC) is a specialist R&D platform focused on complex
            sterile injectables and advanced drug delivery systems. We develop high-barrier
            formulations that few facilities can execute, so manufacturers and global
            partners can enter demanding markets with confidence.
          </p>

          <div className="flex flex-wrap gap-4 mb-16">
            <Button variant="hero" size="lg" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
              Contact Us for a Technical Discussion
            </Button>
            <Button variant="hero-outline" size="lg" onClick={() => document.getElementById("platforms")?.scrollIntoView({ behavior: "smooth" })}>
              What We Work On
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { AnimatedSection } from "@/components/AnimatedSection";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="relative border-t border-border overflow-hidden">
      {/* Subtle animated background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-primary/[0.04] blur-[80px] animate-float" />
        <div className="absolute bottom-10 left-20 w-56 h-56 rounded-full bg-accent/[0.03] blur-[60px] animate-float" style={{ animationDelay: "3s" }} />
        {/* DNA helix-inspired dots */}
        {[...Array(5)].map((_, i) =>
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-primary/10"
          style={{ right: `${5 + i * 4}%`, top: `${20 + i * 14}%` }}
          animate={{ x: [0, 15, 0, -15, 0], opacity: [0.1, 0.25, 0.1] }}
          transition={{ duration: 6 + i, repeat: Infinity, delay: i * 0.8 }} />

        )}
      </div>

      <div className="section-container relative z-10">
        <AnimatedSection>
          <span className="section-label">Who We Are</span>
          <h2 className="section-headline">Specialist Formulation Capability for Advanced Markets</h2>
          <p className="section-body mb-6">
            Lyosha Research Centre is an India-based pharmaceutical R&D company dedicated
            to complex formulation development in sterile and high-barrier dosage forms.
            We are not building another generic manufacturing unit; we are building the
            specialised formulation capability that advanced markets increasingly demand
            but only a few players can supply.
          </p>
          <p className="section-body mb-6">
            LRC focuses on injectable and ophthalmic systems that require rare scientific
            talent, stringent process control, and deep regulatory thinking. Our role is
            to design and validate these formulations, document them to global standards,
            and enable manufacturers and partners worldwide to commercialise them.
          </p>
          <p className="section-body">
            Our model is asset-light and IP-heavy. We invest in scientific infrastructure,
            documentation, and platform know-how, and work with manufacturing partners for
            scale-up and commercial production instead of building large plants at the outset.
          </p>
        </AnimatedSection>

        {/* Decorative divider */}
        <AnimatedSection delay={0.3}>
          <div className="w-24 h-px bg-primary/30 mx-auto" />
        </AnimatedSection>
      </div>
    </section>);

}
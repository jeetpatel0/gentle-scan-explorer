import { AnimatedSection } from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { Layers, Stethoscope, FileText } from "lucide-react";

const directions = [
  {
    icon: Layers,
    title: "Formulation Platforms, Not One-Off Products",
    desc: "We aim to develop reusable know-how and platform methodologies in liposomal engineering, nanoemulsions, ophthalmic rheology, and peptide stability — so that each new program benefits from the last.",
  },
  {
    icon: Stethoscope,
    title: "Therapeutic Areas With Sustained Demand",
    desc: "Oncology, metabolic disease, critical care, ophthalmology, and iron deficiency are long-term needs, not short-term trends. Our platform choices align with these areas.",
  },
  {
    icon: FileText,
    title: "Regulatory-Conscious Design",
    desc: "Even at early concept stage, we think in terms of ANDA, 505(b)(2), Para IV, CTD/ACTD structures, and the technical expectations of USFDA, EMA, and other leading agencies.",
  },
];

export function Science() {
  return (
    <section id="science" className="relative border-t border-border bg-muted/20 overflow-hidden">
      {/* Subtle animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/[0.04] blur-[80px] animate-float" />
        <div className="absolute bottom-20 right-10 w-56 h-56 rounded-full bg-accent/[0.03] blur-[60px] animate-pulse-slow" />
        {/* Subtle lab flask pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-14">
          {/* Animated visual replacing photo */}
          <AnimatedSection>
            <div className="relative aspect-[4/3] rounded-2xl border border-border/30 bg-card/50 overflow-hidden">
              <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {/* Concentric rings */}
                {[80, 120, 160, 200].map((r, i) => (
                  <motion.circle
                    key={i}
                    cx="50%"
                    cy="50%"
                    r={r}
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="0.5"
                    initial={{ opacity: 0.05 }}
                    animate={{ opacity: [0.05, 0.15, 0.05], scale: [1, 1.02, 1] }}
                    transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.5 }}
                  />
                ))}
                {/* Orbiting dots */}
                {[0, 1, 2].map((i) => (
                  <motion.circle
                    key={`dot-${i}`}
                    cx="50%"
                    cy="50%"
                    r="3"
                    fill="hsl(var(--primary))"
                    animate={{
                      opacity: [0.1, 0.4, 0.1],
                      cx: [`${45 + i * 8}%`, `${55 - i * 5}%`, `${45 + i * 8}%`],
                      cy: [`${40 + i * 10}%`, `${60 - i * 8}%`, `${40 + i * 10}%`],
                    }}
                    transition={{ duration: 5 + i * 2, repeat: Infinity }}
                  />
                ))}
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-primary/40">
                  Platform · Rigour · Design
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <span className="section-label">Our Scientific Direction</span>
            <h2 className="section-headline">Platform Thinking, Regulatory Rigour</h2>
            <p className="section-body">
              While we do not disclose product-level details at this stage, our scientific
              direction is clear. The lab infrastructure being set up is chosen backwards
              from these needs, not for optics: each instrument must answer a specific
              formulation or stability question in our target platforms.
            </p>
          </AnimatedSection>
        </div>

        <div className="space-y-5">
          {directions.map((d, i) => (
            <AnimatedSection key={d.title} delay={i * 0.12}>
              <motion.div
                className="stat-card flex gap-6 items-start"
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <d.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-2">{d.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

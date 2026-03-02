import { AnimatedSection } from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { Focus, Zap, TrendingUp, Coins } from "lucide-react";

const principles = [
  {
    icon: Focus,
    title: "Deep, Not Broad",
    desc: "We focus on a small number of formulation platforms instead of spreading across all dosage forms. This allows us to build genuine depth in sterile injectables, liposomal systems, ophthalmics, and peptide-based therapies.",
  },
  {
    icon: Zap,
    title: "Execution-First Thinking",
    desc: "From day one, we design formulations with scale-up, validation, and regulatory filing in mind — not only lab-scale proof-of-concept. Process design, documentation, and regulatory pathways are built into our scientific work.",
  },
  {
    icon: TrendingUp,
    title: "Alignment With Complex Generics & Advanced Delivery",
    desc: "The global market is moving toward complex injectables, depot systems, and advanced delivery for well-known APIs. LRC is being built precisely for that space, instead of chasing crowded oral solid dosage markets.",
  },
  {
    icon: Coins,
    title: "Capital-Efficient Infrastructure",
    desc: "Our early focus is on high-value R&D and scientific instrumentation, not manufacturing capex. We intend to work with qualified plants for commercial manufacturing once products and partnerships are ready.",
  },
];

export function WhyLRC() {
  return (
    <section id="whylrc" className="border-t border-border">
      <div className="section-container">
        <AnimatedSection>
          <span className="section-label">Why LRC</span>
          <h2 className="section-headline">Our Approach</h2>
          <p className="section-body mb-14">
            LRC is designed around a few clear principles. We are intentionally building in
            the space where very few companies can operate: complex injectables and advanced
            systems that sit closer to 505(b)(2) and Para IV opportunities than to commodity generics.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-5">
          {principles.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.1}>
              <motion.div
                className="stat-card h-full"
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <p.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold">{p.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

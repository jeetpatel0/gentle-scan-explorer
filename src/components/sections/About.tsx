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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
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
          </div>

          {/* Animated visual replacing photo */}
          <AnimatedSection delay={0.2}>
            <div className="relative aspect-[4/3] rounded-2xl border border-border/30 bg-card/50 overflow-hidden">
              {/* Molecular structure animation */}
              <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {/* Hexagonal molecular grid */}
                {[
                { cx: "30%", cy: "25%", r: 4 },
                { cx: "50%", cy: "20%", r: 5 },
                { cx: "70%", cy: "30%", r: 4 },
                { cx: "25%", cy: "50%", r: 6 },
                { cx: "45%", cy: "45%", r: 5 },
                { cx: "65%", cy: "55%", r: 4 },
                { cx: "80%", cy: "45%", r: 5 },
                { cx: "35%", cy: "75%", r: 4 },
                { cx: "55%", cy: "70%", r: 6 },
                { cx: "75%", cy: "75%", r: 4 }].
                map((node, i) =>
                <motion.circle
                  key={i}
                  cx={node.cx}
                  cy={node.cy}
                  r={node.r}
                  fill="hsl(var(--primary))"
                  initial={{ opacity: 0.1 }}
                  animate={{ opacity: [0.1, 0.35, 0.1], scale: [1, 1.3, 1] }}
                  transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.3 }} />

                )}
                {/* Connection lines */}
                {[
                ["30%", "25%", "50%", "20%"],
                ["50%", "20%", "70%", "30%"],
                ["25%", "50%", "45%", "45%"],
                ["45%", "45%", "65%", "55%"],
                ["65%", "55%", "80%", "45%"],
                ["35%", "75%", "55%", "70%"],
                ["55%", "70%", "75%", "75%"],
                ["30%", "25%", "25%", "50%"],
                ["70%", "30%", "80%", "45%"],
                ["45%", "45%", "55%", "70%"]].
                map((line, i) =>
                <motion.line
                  key={i}
                  x1={line[0]} y1={line[1]} x2={line[2]} y2={line[3]}
                  stroke="hsl(var(--primary))"
                  strokeWidth="1"
                  initial={{ opacity: 0.05 }}
                  animate={{ opacity: [0.05, 0.2, 0.05] }}
                  transition={{ duration: 4, repeat: Infinity, delay: i * 0.4 }} />

                )}
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-primary/40">
                  Formulation · Precision · Impact
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Decorative divider */}
        <AnimatedSection delay={0.3}>
          







          
        </AnimatedSection>
      </div>
    </section>);

}
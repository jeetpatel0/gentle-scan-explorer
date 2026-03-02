import { AnimatedSection } from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { Globe, FileCheck, Rocket } from "lucide-react";

const workstreams = [
  {
    icon: Globe,
    num: "01",
    title: "Global Tech Transfer & Dossier-Ready Development",
    desc: "We design and develop complex formulations with the explicit goal of being ready for global tech transfer — complete with process understanding, critical parameter definition, and dossier-ready documentation for regulated and semi-regulated markets.",
  },
  {
    icon: FileCheck,
    num: "02",
    title: "505(b)(2) and Para IV-Level Complexity",
    desc: "Our long-term focus is on formulations suitable for complex generic and 505(b)(2)-type pathways, where formulation strategy, IP navigation, and pharmacokinetic matching create meaningful competitive advantage.",
  },
  {
    icon: Rocket,
    num: "03",
    title: "In-House Product Platforms for Future Commercialisation",
    desc: "As our infrastructure and team mature, LRC will selectively build its own basket of formulations on these platforms, to be commercialised through partner manufacturing and regional licensing, rather than in-house plants.",
  },
];

export function HowWeWork() {
  return (
    <section id="howwework" className="border-t border-border bg-muted/20">
      <div className="section-container">
        <AnimatedSection>
          <span className="section-label">How We Work</span>
          <h2 className="section-headline">An Integrated Formulation Platform With Three Clear Workstreams</h2>
          <p className="section-body mb-14">
            LRC is being built as an integrated formulation platform. At this early stage,
            our focus is on getting the science and infrastructure right: building an R&D lab
            that can reliably execute on these categories, then selectively engaging with
            global and Indian manufacturers for collaborative development and future tech transfer.
          </p>
        </AnimatedSection>

        <div className="space-y-6">
          {workstreams.map((w, i) => (
            <AnimatedSection key={w.num} delay={i * 0.12}>
              <motion.div
                className="stat-card flex gap-6 items-start"
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
              >
                <div className="flex flex-col items-center gap-2 shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <w.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="font-mono text-xs text-primary/50">{w.num}</span>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-2">{w.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

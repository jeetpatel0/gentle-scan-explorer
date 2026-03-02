import { AnimatedSection } from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { Atom, Droplets, FlaskConical, Syringe, Heart, Eye } from "lucide-react";
import platformsMolecularImage from "@/assets/platforms-molecular.jpg";

const platforms = [
  {
    icon: Atom,
    name: "Liposomal & Nano-Delivery Systems",
    desc: "Injectable liposomal dispersions and nano-encapsulated systems for oncology, anti-infective, and hospital-critical therapies.",
  },
  {
    icon: Droplets,
    name: "Nanoemulsion & Emulsion Injectables",
    desc: "Sterile oil-in-water emulsions and related systems used in anaesthesia, nutritional support, and oncology-supportive care.",
  },
  {
    icon: FlaskConical,
    name: "Injectable Suspensions",
    desc: "Sterile particulate suspensions for corticosteroids, oncology, and perioperative care where particle engineering and rheology are critical.",
  },
  {
    icon: Syringe,
    name: "Peptide Injectables & Pre-Filled Systems",
    desc: "Complex peptide solutions and pre-filled syringe systems for metabolic disease, hormone therapy, and high-value chronic therapies.",
  },
  {
    icon: Heart,
    name: "Colloidal IV & Iron Therapies",
    desc: "Iron–carbohydrate complexes and colloidal IV systems used in renal anaemia, iron deficiency, and critical-care settings.",
  },
  {
    icon: Eye,
    name: "Ophthalmic & Otic Formulations",
    desc: "Sterile solutions, suspensions, and gels for inflammatory eye conditions and post-operative care, where sterility and stability are non-negotiable.",
  },
];

export function Platforms() {
  return (
    <section id="platforms" className="border-t border-border">
      <div className="section-container">
        {/* Header with image */}
        <div className="grid lg:grid-cols-5 gap-10 mb-14">
          <div className="lg:col-span-3">
            <AnimatedSection>
              <span className="section-label">What We Work On</span>
              <h2 className="section-headline">High-Impact Formulation Platforms Where Capability Is Scarce</h2>
              <p className="section-body">
                We focus on a narrow band of high-impact formulation platforms where capability
                is scarce and demand is growing. Across these platforms, our work connects
                therapeutic need with the right delivery system and documentation pathway —
                rather than chasing commodity products.
              </p>
            </AnimatedSection>
          </div>
          <AnimatedSection delay={0.2} className="lg:col-span-2">
            <div className="image-card aspect-square shadow-lg">
              <img
                src={platformsMolecularImage}
                alt="Molecular drug delivery visualization"
                loading="lazy"
              />
            </div>
          </AnimatedSection>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {platforms.map((p, i) => (
            <AnimatedSection key={p.name} delay={i * 0.08}>
              <motion.div
                className="stat-card h-full group"
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                  <p.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold mb-2">{p.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

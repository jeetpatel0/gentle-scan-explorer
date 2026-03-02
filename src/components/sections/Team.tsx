import { AnimatedSection } from "@/components/AnimatedSection";
import { motion } from "framer-motion";

const team = [
  {
    name: "Mr. Manavendra Chauhan",
    role: "Co-Founder",
    education: "MS, Regulatory Affairs — Northeastern University, USA",
    responsibility:
      "Manavendra leads LRC's regulatory and commercial strategy, with a focus on how complex formulations move from lab to dossier to market. His academic background in regulatory affairs and exposure to the US pharmaceutical ecosystem inform LRC's approach to documentation standards, global filings, and partnership structuring for regulated markets.",
  },
  {
    name: "Mr. Rushabh Shah",
    role: "Co-Founder",
    education: "M.Pharm, Pharmaceutical Chemistry — Nirma University, India",
    responsibility:
      "Rushabh drives business development, partnerships, and scaling strategy at LRC. His training in pharmaceutical chemistry and industry exposure shape how LRC thinks about manufacturability, supply chains, and commercial architecture once formulations are ready for scale-up.",
  },
  {
    name: "Technical Leadership",
    role: "Partner",
    education: "M.Pharm, Pharmaceutics",
    responsibility:
      "LRC's technical leadership is anchored by an experienced pharmaceutics professional with end-to-end responsibility for R&D operations, product development, and team building. While this role remains confidential in public-facing materials at this early stage, all formulation programs are designed and executed under dedicated scientific leadership.",
  },
];

export function Team() {
  return (
    <section id="team" className="bg-muted/20">
      <div className="section-container">
        <AnimatedSection>
          <span className="section-label">The Team</span>
          <h2 className="section-headline">Complementary Expertise, Shared Purpose</h2>
          <p className="section-body mb-12">
            Lyosha Research Centre is co-founded and led by professionals with complementary
            expertise in pharmaceutical science, regulatory understanding, and commercial execution.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {team.map((member, i) => (
            <AnimatedSection key={member.name} delay={i * 0.15}>
              <motion.div
                className="stat-card h-full flex flex-col"
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                  <span className="font-serif text-xl font-bold text-primary">
                    {member.name === "Technical Leadership"
                      ? "TD"
                      : member.name.split(" ").slice(-1)[0].charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-serif font-semibold mb-1">{member.name}</h3>
                <span className="font-mono text-[11px] tracking-wider uppercase text-primary mb-2">
                  {member.role}
                </span>
                <p className="text-sm text-muted-foreground mb-4 italic">
                  {member.education}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mt-auto">
                  {member.responsibility}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.5}>
          <p className="text-sm text-muted-foreground italic text-center">
            As the organisation grows, we will add more detail about our broader scientific
            and operational team, including key hires in formulation science, analytical
            development, and regulatory affairs.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

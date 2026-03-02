import { AnimatedSection } from "@/components/AnimatedSection";

export function Government() {
  return (
    <section id="government" className="border-t border-border">
      <div className="section-container">
        <AnimatedSection>
          <span className="section-label">Government & Policy Alignment</span>
          <h2 className="section-headline">Structured With India's Long-Term Policy Direction in Mind</h2>
          <p className="section-body mb-6">
            Lyosha Research Centre has been structured with India's long-term healthcare and
            pharmaceutical policy directions in mind.
          </p>
          <p className="section-body mb-6">
            We operate in formulation categories that currently see high import dependence
            and limited domestic development capability — particularly in oncology injectables,
            ophthalmic formulations, and complex hospital-critical products. Strengthening India's
            capability in these areas aligns with national objectives around drug security and
            reduced reliance on imported complex generics.
          </p>
          <p className="section-body mb-6">
            Our focus sectors and platform choices are consistent with the emphasis on advanced
            formulations and high-value generics seen in national schemes and policy directions.
            As our facility and operations mature, we intend to engage more deeply with appropriate
            government and institutional frameworks that support high-impact R&D in these spaces.
          </p>
          <p className="text-xs font-mono text-primary/60 italic mt-8">
            Operational details on grants, funding schemes, or financial projections are reserved
            for direct discussions and investor materials, not the public website.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

import { AnimatedSection } from "@/components/AnimatedSection";
import aboutLabImage from "@/assets/about-lab.jpg";

export function About() {
  return (
    <section id="about" className="border-t border-border">
      <div className="section-container">
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

          {/* Image */}
          <AnimatedSection delay={0.2}>
            <div className="image-card aspect-[4/3] shadow-xl">
              <img
                src={aboutLabImage}
                alt="Pharmaceutical research laboratory with microscopes and samples"
                loading="lazy"
              />
            </div>
          </AnimatedSection>
        </div>

        {/* Decorative divider */}
        <AnimatedSection delay={0.3}>
          <div className="mt-16 flex items-center gap-6">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            <div className="flex gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
              <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
              <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

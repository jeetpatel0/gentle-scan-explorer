import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Mail, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="border-t border-border">
      <div className="section-container text-center">
        <AnimatedSection>
          <span className="section-label">Contact & Next Steps</span>
          <h2 className="section-headline mx-auto">Open to Focused Conversations</h2>
          <p className="section-body mx-auto mb-10">
            Lyosha Research Centre is in the setup phase of its R&D infrastructure and is
            open to focused conversations with organisations that share an interest in
            complex injectable and advanced delivery systems. We will respond to relevant
            enquiries as we progressively build and operationalise the platform.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mb-10">
            <Button variant="hero" size="lg" asChild>
              <a href="mailto:lyosharesearch@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                lyosharesearch@gmail.com
              </a>
            </Button>
            <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Ahmedabad, Gujarat, India</span>
            </div>
          </div>
        </AnimatedSection>

        <div className="mt-20 pt-8 border-t border-border flex flex-col items-center">
          <img
            src="/lovable-uploads/6c6c316f-5b48-4488-901f-feb2cb83c5f0.png"
            alt="Lyosha Research Centre"
            className="h-16 md:h-20 w-auto mb-4"
          />
          <p className="font-mono text-xs text-primary/70 mb-2 italic">
            Where Innovation Meets Precision. Precision Creates Impact.
          </p>
          <p className="font-mono text-[10px] text-muted-foreground tracking-wider uppercase">
            © 2026 Lyosha Research Centre.
          </p>
        </div>
      </div>
    </section>
  );
}

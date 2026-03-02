import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "Who We Are" },
  { id: "platforms", label: "What We Work On" },
  { id: "howwework", label: "How We Work" },
  { id: "whylrc", label: "Why LRC" },
  { id: "science", label: "Scientific Direction" },
  { id: "government", label: "Policy" },
  { id: "team", label: "Team" },
  { id: "contact", label: "Contact" },
];

export function Sidebar() {
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY + 200;
    setScrolled(window.scrollY > 100);
    for (let i = sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(sections[i].id);
      if (el && el.offsetTop <= scrollY) {
        setActive(sections[i].id);
        break;
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const navContent = (
    <nav className="flex flex-col gap-1">
      {sections.map((s) => (
        <button
          key={s.id}
          onClick={() => scrollTo(s.id)}
          className={`text-left px-3 py-2 rounded-md text-sm font-sans transition-all duration-200 ${
            active === s.id
              ? "bg-primary/10 text-primary font-medium"
              : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
          }`}
        >
          {s.label}
        </button>
      ))}
    </nav>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-60 flex-col border-r border-border bg-sidebar z-40">
        <div className="p-5 border-b border-border">
          <h2 className="text-lg font-serif font-bold text-foreground">Lyosha Research Centre</h2>
          <p className="font-mono text-[9px] tracking-[0.15em] text-primary/70 mt-1 uppercase">Complex Formulation R&D</p>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          {navContent}
        </div>
        <div className="p-4 border-t border-border flex items-center justify-between">
          <span className="font-mono text-[10px] text-muted-foreground tracking-wider">THEME</span>
          <ThemeToggle />
        </div>
      </aside>

      {/* Mobile header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 h-14 bg-background/80 backdrop-blur-md border-b border-border z-50 flex items-center justify-between px-4">
        <h2 className="text-base font-serif font-bold text-foreground">LRC</h2>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button onClick={() => setOpen(!open)} className="p-2 rounded-md hover:bg-muted" aria-label="Menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="lg:hidden fixed inset-y-0 right-0 w-64 bg-background border-l border-border z-50 p-6 pt-20"
          >
            {navContent}
          </motion.div>
        )}
      </AnimatePresence>
      {open && (
        <div className="lg:hidden fixed inset-0 bg-background/50 backdrop-blur-sm z-40" onClick={() => setOpen(false)} />
      )}
    </>
  );
}

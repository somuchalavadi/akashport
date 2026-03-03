import { motion } from "framer-motion";
import { Download, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-portrait.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] -translate-y-1/2" />

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <p className="text-primary font-display font-medium tracking-widest uppercase text-sm">
            Welcome to my portfolio
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
            Hi, I'm{" "}
            <span className="text-gradient">Akash</span>
            <br />
            Prabhulinga Gowda
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-lg font-body">
            Freelance Developer · UI/UX Designer · Video Editor · Marketer
            <br />
            <span className="text-foreground/70">Engineering Graduate · Problem Solver · Startup Builder</span>
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button size="lg" className="bg-gradient-gold font-display font-semibold text-primary-foreground hover:opacity-90 transition-opacity" asChild>
              <a href="/Akash_Resume.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/30 text-foreground hover:bg-primary/10 font-display"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Eye className="mr-2 h-5 w-5" />
              View My Work
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative w-80 h-80 md:w-[420px] md:h-[420px]">
            {/* Subtle glow behind */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/3 bg-primary/10 blur-3xl rounded-full" />
            {/* Image with gradient mask to blend into background */}
            <div className="relative w-full h-full" style={{
              maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%), linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
            }}>
              <img
                src={heroImage}
                alt="Akash Prabhulinga Gowda"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

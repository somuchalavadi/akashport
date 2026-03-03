import { motion } from "framer-motion";
import { ExternalLink, Film } from "lucide-react";
import { Button } from "@/components/ui/button";

const VideoSection = () => {
  return (
    <section id="video" className="section-padding bg-card/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Film className="h-12 w-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Video <span className="text-gradient">Editing</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            I am also a freelance video editor specializing in social media reels, promotional videos, and branding content.
          </p>
          <Button
            size="lg"
            className="bg-gradient-gold font-display font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
            asChild
          >
            <a href="https://drive.google.com/drive/folders/199RrIn7edTKzbdNyS6HkOy3Spg96inVz?usp=drive_link" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-5 w-5" />
              View My Editing Work
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;

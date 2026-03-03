import { motion } from "framer-motion";
import { Download, ExternalLink, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="section-padding bg-card/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <FolderOpen className="h-12 w-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Portfolio <span className="text-gradient">Files</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Access my complete project files and portfolio documents.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-gradient-gold font-display font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
              asChild
            >
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" />
                Download Project Files
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/30 text-foreground hover:bg-primary/10 font-display"
              asChild
            >
              <a href="#" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-5 w-5" />
                View on Google Drive
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;

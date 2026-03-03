import { motion } from "framer-motion";
import { TrendingUp, Target, Palette, Instagram, FileText } from "lucide-react";

const services = [
  { icon: Target, label: "Social Media Strategy" },
  { icon: FileText, label: "Content Planning" },
  { icon: TrendingUp, label: "Startup Growth Strategy" },
  { icon: Instagram, label: "Instagram Branding" },
  { icon: Palette, label: "Poster & Reel Design" },
];

const MarketingSection = () => {
  return (
    <section id="marketing" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-bold mb-12"
        >
          Marketing & <span className="text-gradient">Branding</span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {services.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
              className="bg-gradient-card border border-border rounded-xl p-5 text-center hover:border-primary/30 transition-colors"
            >
              <item.icon className="h-7 w-7 text-primary mx-auto mb-3" />
              <p className="text-sm font-display font-medium text-foreground">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketingSection;

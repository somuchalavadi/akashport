import { motion } from "framer-motion";
import { Footprints, Cloud, Leaf, Building, Salad, Shirt, BarChart3, ExternalLink } from "lucide-react";

const projects = [
  {
    icon: Footprints,
    title: "SafeStep",
    subtitle: "Smart Safety Shoe App",
    tags: ["Flutter", "Real-time Monitoring", "UI Design"],
    description: "Mobile application with real-time safety monitoring, smart alert system, and custom UI design.",
  },
  {
    icon: Cloud,
    title: "Weather Forecasting",
    subtitle: "Real-Time System",
    tags: ["API Integration", "Data Viz", "Live Prediction"],
    description: "Live weather prediction system with real-time API integration and data visualization.",
  },
  {
    icon: Leaf,
    title: "Plant Disease Detection",
    subtitle: "AI-Based System",
    tags: ["AI/ML", "Image Processing", "Agriculture"],
    description: "AI-based plant disease detection with image processing for agricultural support.",
  },
  {
    icon: Building,
    title: "D-Salad Station",
    subtitle: "Healthy Food Provider Startup",
    tags: ["Startup", "Healthy Food", "Branding"],
    description: "A healthy food provider startup focused on delivering fresh, nutritious salads and meals.",
    link: "https://deessalad.shop",
  },
  {
    icon: Salad,
    title: "Greezo",
    subtitle: "Healthy Startup",
    tags: ["Marketing", "Branding", "UI Design"],
    description: "Managed social media marketing, branding, content strategy, and business growth planning.",
    link: "https://greezo.in",
  },
  {
    icon: Shirt,
    title: "Florzy Application",
    subtitle: "IT Support",
    tags: ["Frontend", "Backend", "UI Implementation"],
    description: "IT support application with full frontend development and backend integration.",
  },
  {
    icon: BarChart3,
    title: "Account Management",
    subtitle: "Real-Time System",
    tags: ["Finance", "Dashboard", "Security"],
    description: "Live financial tracking with secure data handling and dashboard UI.",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-bold mb-12"
        >
          My <span className="text-gradient">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-gradient-card border border-border rounded-xl p-6 hover:border-primary/30 hover:shadow-glow transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <project.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-display font-semibold text-foreground">{project.title}</h3>
                  <p className="text-primary text-sm font-medium mb-2">{project.subtitle}</p>
                  <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-secondary text-secondary-foreground px-2.5 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline mt-3 font-medium"
                    >
                      Visit <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

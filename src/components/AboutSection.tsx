import { motion } from "framer-motion";
import { Film, TrendingUp, Brain, GraduationCap } from "lucide-react";

const highlights = [
  { icon: Film, label: "Video Editor" },
  { icon: TrendingUp, label: "Digital Marketer" },
  { icon: Brain, label: "Tech Problem Solver" },
  { icon: GraduationCap, label: "Student Mentor" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-10">
            I am a passionate freelance developer and engineering graduate with experience in building mobile applications, real-time systems, startup solutions, and marketing strategies. I specialize in frontend development, backend integration, UI/UX design, real-time analytics, and digital marketing. I have worked with startups and students to build scalable and practical solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-gradient-card border border-border rounded-xl p-6 text-center hover:border-primary/30 transition-colors"
            >
              <item.icon className="h-8 w-8 text-primary mx-auto mb-3" />
              <p className="font-display font-medium text-foreground">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

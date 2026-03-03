import { motion } from "framer-motion";

const technicalSkills = [
  "HTML, CSS, JavaScript",
  "Flutter",
  "Node.js / Express",
  "Backend Development",
  "Real-time Systems",
  "Database Management",
];

const creativeSkills = [
  "UI/UX Design",
  "Canva / Figma",
  "Video Editing",
  "Social Media Content",
  "Branding & Marketing",
];

const SkillPill = ({ label, delay }: { label: string; delay: number }) => (
  <motion.span
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3, delay }}
    className="inline-block bg-secondary text-secondary-foreground px-4 py-2 rounded-lg text-sm font-body font-medium border border-border hover:border-primary/40 transition-colors"
  >
    {label}
  </motion.span>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-card/30">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-bold mb-12"
        >
          My <span className="text-gradient">Skills</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-display font-semibold text-primary mb-6">💻 Technical Skills</h3>
            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((s, i) => (
                <SkillPill key={s} label={s} delay={i * 0.05} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-display font-semibold text-primary mb-6">🎨 Creative Skills</h3>
            <div className="flex flex-wrap gap-3">
              {creativeSkills.map((s, i) => (
                <SkillPill key={s} label={s} delay={i * 0.05} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

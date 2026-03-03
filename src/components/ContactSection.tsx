import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const contacts = [
  { icon: Mail, label: "Email", value: "akashpg911@gmail.com", href: "mailto:akashpg911@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 78925 25214", href: "tel:+917892525214" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/akash-gowda", href: "https://www.linkedin.com/in/akash-gowda-276078248?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
  { icon: Github, label: "GitHub", value: "github.com/akashh7892", href: "https://github.com/akashh7892" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-bold mb-12 text-center"
        >
          Get In <span className="text-gradient">Touch</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {contacts.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
              className="bg-gradient-card border border-border rounded-xl p-5 flex items-center gap-4 hover:border-primary/30 hover:shadow-glow transition-all duration-300 group"
            >
              <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                <item.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{item.label}</p>
                <p className="font-display font-medium text-foreground text-sm">{item.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-muted-foreground text-sm mt-16"
        >
          © 2026 Akash Prabhulinga Gowda. All rights reserved.
        </motion.p>
      </div>
    </section>
  );
};

export default ContactSection;

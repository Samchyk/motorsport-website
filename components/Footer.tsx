"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: "Navigáció",
      links: [
        { label: "Kezdőlap", href: "/" },
        { label: "Szuperautók", href: "/supercars" },
        { label: "Oktatás", href: "/training" },
        { label: "Élmények", href: "/experiences" },
      ],
    },
    {
      title: "Erőforrások",
      links: [
        { label: "Blog", href: "/blog" },
        { label: "Rólunk", href: "/about" },
        { label: "Adatvédelmi szabályzat", href: "/privacy" },
        { label: "Feltételek és kikötések", href: "/terms" },
      ],
    },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="col-span-1"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded flex items-center justify-center font-bold text-background text-sm">
                H
              </div>
              <span className="font-bold text-foreground">
                Hungarymotorsport
              </span>
            </div>
            <p className="text-sm text-foreground/60">
              Fedezze fel a versenyautózás világát professzionális képzéssel és
              prémium élményekkel.
            </p>
          </motion.div>

          {/* Navigation Sections */}
          {sections.map((section, idx) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (idx + 1) * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-foreground mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/60 hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-xs text-foreground/50">
            © {currentYear} Hungarymotorsport . contacts@hungarymotorsport.com
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

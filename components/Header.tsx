'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Kezdőlap', href: '/' },
    { label: 'Szuperautók', href: '/supercars' },
    { label: 'Oktatás', href: '/training' },
    { label: 'Élmények', href: '/experiences' },
    { label: 'Blog', href: '/blog' },
    { label: 'Rólunk', href: '/about' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="glass border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-accent rounded flex items-center justify-center font-bold text-background text-xl group-hover:glow-accent transition-all">
                H
              </div>
              <span className="text-xl font-bold hidden sm:inline text-foreground">Hungarymotorsport
</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-foreground/70 hover:text-accent transition-colors duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden w-6 h-6 flex flex-col justify-center gap-1.5 cursor-pointer"
            >
              <motion.span
                animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 8 : 0 }}
                className="w-full h-0.5 bg-foreground"
              />
              <motion.span
                animate={{ opacity: isMenuOpen ? 0 : 1 }}
                className="w-full h-0.5 bg-foreground"
              />
              <motion.span
                animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -8 : 0 }}
                className="w-full h-0.5 bg-foreground"
              />
            </button>
          </div>

          {/* Mobile Menu */}
          <motion.nav
            initial={false}
            animate={{ height: isMenuOpen ? 'auto' : 0, opacity: isMenuOpen ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden"
          >
            <div className="pt-4 pb-2 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm text-foreground/70 hover:text-accent transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        </div>
      </motion.div>
    </header>
  );
}

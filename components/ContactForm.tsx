'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const contactSchema = z.object({
  name: z.string().min(2, 'A név legalább 2 karakter legyen'),
  email: z.string().email('Érvényes email cím szükséges'),
  phone: z.string().optional(),
  subject: z.string().min(5, 'A tárgy legalább 5 karakter legyen'),
  message: z.string().min(10, 'Az üzenet legalább 10 karakter legyen'),
  consent: z.boolean().refine(val => val === true, 'Hozzájárulás szükséges'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Simulate email submission
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          to: 'info@hungarymotorsport.com',
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full max-w-md mx-auto"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
            Név
          </label>
          <input
            {...register('name')}
            type="text"
            id="name"
            placeholder="Az Ön neve"
            className="w-full px-4 py-2 bg-background border border-white/20 rounded text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
          />
          {errors.name && <p className="text-sm text-destructive mt-1">{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
            Email
          </label>
          <input
            {...register('email')}
            type="email"
            id="email"
            placeholder="email@example.com"
            className="w-full px-4 py-2 bg-background border border-white/20 rounded text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
          />
          {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
            Telefon (opcionális)
          </label>
          <input
            {...register('phone')}
            type="tel"
            id="phone"
            placeholder="+36 XX XXX XXXX"
            className="w-full px-4 py-2 bg-background border border-white/20 rounded text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
          />
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
            Tárgy
          </label>
          <input
            {...register('subject')}
            type="text"
            id="subject"
            placeholder="Mi az oka az üzenetnek?"
            className="w-full px-4 py-2 bg-background border border-white/20 rounded text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
          />
          {errors.subject && <p className="text-sm text-destructive mt-1">{errors.subject.message}</p>}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
            Üzenet
          </label>
          <textarea
            {...register('message')}
            id="message"
            placeholder="Az Ön üzenete..."
            rows={5}
            className="w-full px-4 py-2 bg-background border border-white/20 rounded text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all resize-none"
          />
          {errors.message && <p className="text-sm text-destructive mt-1">{errors.message.message}</p>}
        </div>

        {/* Consent Checkbox */}
        <div className="flex items-start gap-3">
          <input
            {...register('consent')}
            type="checkbox"
            id="consent"
            className="w-4 h-4 mt-1 accent-accent"
          />
          <label htmlFor="consent" className="text-sm text-foreground/70">
            Elfogadom az adatvédelmi szabályzatot és hozzájárulok az adatok feldolgozásához.
          </label>
        </div>
        {errors.consent && <p className="text-sm text-destructive">{errors.consent.message}</p>}

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full px-6 py-3 bg-accent text-background font-bold rounded hover:shadow-lg hover:shadow-accent/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Küldés...' : 'Küldés'}
        </motion.button>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="p-4 bg-green-500/10 border border-green-500/30 rounded text-green-400 text-sm text-center"
          >
            Köszönjük az üzenetét! Hamarosan visszajelzünk.
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="p-4 bg-red-500/10 border border-red-500/30 rounded text-red-400 text-sm text-center"
          >
            Hiba történt az üzenet küldésekor. Próbálja meg később.
          </motion.div>
        )}
      </form>
    </motion.div>
  );
}

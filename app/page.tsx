'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import SectionReveal from '@/components/SectionReveal'
import GlassCard from '@/components/GlassCard'
import ContactForm from '@/components/ContactForm'
import { FloatingElements } from '@/components/FloatingElements'
import { StatCounter } from '@/components/StatCounter'
import { ParallaxScroll } from '@/components/ParallaxScroll'

export default function Home() {
  const experiences = [
    {
      title: 'Szuperautó vezetés',
      description: 'Érezze meg a felhalmozódott energiát vezetéskor a leggyorsabb autók képes közvetítésére.',
      icon: '🏁',
      image: '/images/supercars-fleet.jpg',
    },
    {
      title: 'Pályaképzés',
      description: 'Szakmai oktatók vezetésével fejlessze versenyautózási készségeit a zárt pályán.',
      icon: '🎓',
      image: '/images/professional-training.jpg',
    },
    {
      title: 'Élmény csomag',
      description: 'Kombinált szuperautó és oktatási élmények a legjobb motorsport kalandért.',
      icon: '⚡',
      image: '/images/track-experience.jpg',
    },
    {
      title: 'VIP programok',
      description: 'Exkluzív, személyre szabott motorsport élmények a legigényesebb vendégek számára.',
      icon: '👑',
      image: '/images/motorsport-culture.jpg',
    },
  ]

  const vehicles = [
    {
      name: 'Ferrari F8 Tributo',
      category: 'Szuperautó',
      performance: '250+ km/h',
      image: '/images/supercars-hero.jpg',
    },
    {
      name: 'Lamborghini Huracán',
      category: 'Szuperautó',
      performance: '260+ km/h',
      image: '/images/supercars-fleet.jpg',
    },
    {
      name: 'McLaren 720S',
      category: 'Szuperautó',
      performance: '240+ km/h',
      image: '/images/hero-racing.jpg',
    },
    {
      name: 'Porsche 911 GT3',
      category: 'Versenyautó',
      performance: '230+ km/h',
      image: '/images/track-experience.jpg',
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <HeroSection
        title="A motorsport világa vár"
        subtitle="Fedezze fel az igazi sebesség és csúcsteljesítmény élményét szuperautók és pályaképzéssel. Ezt Magyarország legpremiumbbb motorsport platformján lehet megtenni."
        ctaText="Fedezzen fel"
        ctaHref="#experiences"
        backgroundImage="/images/hero-racing-premium.jpg"
      />

      {/* Experiences Section */}
      <section id="experiences" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <SectionReveal className="mb-16 text-center">
            <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4 text-balance">
              Prémium motorsport élmények
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Válassza ki az Ön számára tökéletes élményt és tapasztalja meg az adrenalin csúcsát.
            </p>
          </SectionReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {experiences.map((exp, idx) => (
              <SectionReveal key={idx} delay={idx * 0.1}>
                <GlassCard className="overflow-hidden p-0">
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={exp.image}
                      alt={exp.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                    <div className="absolute bottom-3 left-4 text-4xl drop-shadow-lg">{exp.icon}</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-foreground mb-3">{exp.title}</h3>
                    <p className="text-sm text-foreground/70">{exp.description}</p>
                  </div>
                </GlassCard>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicles Section */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background/50 border-t border-white/10 overflow-hidden">
        <FloatingElements />
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionReveal className="mb-16 text-center">
            <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4 text-balance">
              Flóta
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              A világon legújabb és leggyorsabb szuperautók közül választhat az Ön ideális élménye érdekében.
            </p>
          </SectionReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vehicles.map((vehicle, idx) => (
              <SectionReveal key={idx} delay={idx * 0.1} direction="up">
                <GlassCard hover className="overflow-hidden p-0">
                  <div className="relative h-56 w-full overflow-hidden">
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-accent/90 text-background text-xs font-bold">
                      {vehicle.performance}
                    </div>
                  </div>
                  <div className="p-6 space-y-2">
                    <h3 className="text-lg font-bold text-foreground">{vehicle.name}</h3>
                    <p className="text-sm text-accent">{vehicle.category}</p>
                  </div>
                </GlassCard>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <SectionReveal direction="left">
              <div className="space-y-6">
                <h2 className="text-4xl font-black text-foreground text-balance">
                  Miért a Hungarymotorsport
?
                </h2>
                <p className="text-lg text-foreground/60">
                  A legmagasabb szintű biztonság, professzionális oktatók és világszínvonalú szuperautók kombinációja.
                </p>
                <ul className="space-y-4">
                  {[
                    'Tapasztalt versenyvezetők és oktatók',
                    'Legújabb szuperautók és versenyautók',
                    'Biztonság az első helyen',
                    'Személyre szabott élmények',
                    'Prémium ügyfélszolgálat',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent/20 border border-accent flex items-center justify-center text-accent text-sm font-bold">
                        ✓
                      </div>
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>

            <SectionReveal direction="right">
              <div className="relative">
                <div className="relative rounded-lg overflow-hidden border border-white/10">
                  <img
                    src="/images/motorsport-culture.jpg"
                    alt="Motorsport élmény"
                    className="w-full h-[420px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-center space-y-1">
                    <p className="text-accent font-semibold">Garantált élmény</p>
                    <StatCounter value={100} suffix="%" />
                    <p className="text-foreground/70">Ügyfél elégedettség</p>
                  </div>
                </div>
                <div className="absolute inset-0 -z-10 bg-accent/10 rounded-lg blur-2xl" />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background/50 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <SectionReveal className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4 text-balance">
              Lépjen kapcsolatba velünk
            </h2>
            <p className="text-lg text-foreground/60">
              Személyre szabott ajánlatot kaphat az Ön ideális motorsport élményéhez.
            </p>
          </SectionReveal>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </main>
  )
}

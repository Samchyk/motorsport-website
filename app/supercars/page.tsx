import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import SectionReveal from '@/components/SectionReveal';
import GlassCard from '@/components/GlassCard';

const supercars = [
  {
    id: 1,
    name: 'V8 Biturbó Szuperautó',
    specs: {
      power: '720 PS',
      acceleration: '0-100 km/h 2.9s',
      topSpeed: '340 km/h',
      engine: 'V8 3.9L Twin-Turbo',
    },
    description:
      'A csúcs teljesítmény és elegancia kombinációja. Ikonikus V8 biturbó motorja és dinamikus kezelése példátlan vezetési élményt nyújt.',
    highlights: [
      'Aktív magnetoreológiás szuszpenzió',
      'Adaptív kormányzás',
      'Carbon kerékpárok',
      'F1-inspirálta aerodinamika',
    ],
  },
  {
    id: 2,
    name: 'V10 Atmoszférikus Szuperautó',
    specs: {
      power: '657 PS',
      acceleration: '0-100 km/h 2.9s',
      topSpeed: '360 km/h',
      engine: 'V10 5.2L',
    },
    description:
      'A maximális teljesítmény és agresszív design szimbóluma. Lenyűgöző V10 atmoszférikus motorja és könnyű szerkezete történelmi szintű teljesítményt épít.',
    highlights: [
      'Puristikus kabin',
      'Aktív aerodinamika',
      'Dinamikus kormányzás',
      'Versenyautó-szintű tuning',
    ],
  },
  {
    id: 3,
    name: 'V8 Twin-Turbo Szuperautó',
    specs: {
      power: '710 PS',
      acceleration: '0-100 km/h 2.9s',
      topSpeed: '341 km/h',
      engine: 'V8 4.0L Twin-Turbo',
    },
    description:
      'A modern mérnöki innovációt képviseli. Twin-turbo motorja, könnyű carbon keret és prímár váltója a legfejlettebb versenyautós technológiát beépítik.',
    highlights: [
      'Carbon könnyűsúly',
      'Proactive dinamika',
      'Versenyautó-szintű fékek',
      'Nyitható tetőpanel',
    ],
  },
  {
    id: 4,
    name: 'Flat-6 GT Versenyautó',
    specs: {
      power: '525 PS',
      acceleration: '0-100 km/h 3.2s',
      topSpeed: '318 km/h',
      engine: 'Flat-6 4.0L',
    },
    description:
      'A pályaversenyző autó a legjavított közúti formában. Direkt kormányzása, atmoszférikus boxer motor és kézi váltója az autentikus versenyautós élményt nyújt.',
    highlights: [
      'Pálya-optimalizált szuszpenzió',
      'Aktív aerodinamika',
      'Kerámia fékek',
      'Versenyautó-szintű motor',
    ],
  },
];

export default function Supercars() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <HeroSection
        title="Szuperautók flótánk"
        subtitle="A világ legexkluzívabb és legerősebb szuperautóinak kollekcióját mutajuk fel. Válassza ki az Ön favorit járművet az élmény céljára."
        ctaText="Forduljon hozzánk"
        ctaHref="#contact"
        backgroundImage="/images/supercars-hero.jpg"
      />

      {/* Supercars Grid */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {supercars.map((car, idx) => (
              <SectionReveal key={car.id} delay={idx * 0.1}>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  {/* Left: Info */}
                  <div>
                    <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4">
                      {car.name}
                    </h2>
                    <p className="text-lg text-foreground/70 mb-8">{car.description}</p>

                    {/* Specs */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {Object.entries(car.specs).map(([key, value]) => (
                        <div key={key} className="glass p-4 rounded">
                          <p className="text-xs text-foreground/60 mb-1 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </p>
                          <p className="text-lg font-bold text-accent">{value}</p>
                        </div>
                      ))}
                    </div>

                    {/* Highlights */}
                    <div>
                      <h3 className="font-semibold text-foreground mb-4">Jellemzői:</h3>
                      <ul className="space-y-2">
                        {car.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-foreground/80">
                            <div className="w-2 h-2 rounded-full bg-accent" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right: Visual Card */}
                  <div className="relative">
                    <GlassCard className="p-12">
                      <div className="text-center space-y-6">
                        <div className="text-6xl">🏎️</div>
                        <div>
                          <p className="text-accent font-semibold mb-1">Maxima teljesítmény</p>
                          <h4 className="text-2xl font-bold text-foreground">{car.specs.power}</h4>
                        </div>
                        <p className="text-sm text-foreground/60">
                          Tapasztalja meg a csúcs teljesítményt az Ön személyre szabott élménye során.
                        </p>
                      </div>
                    </GlassCard>
                    <div className="absolute inset-0 -z-10 bg-accent/10 rounded-lg blur-2xl" />
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background/50 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <SectionReveal>
            <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-6 text-balance">
              Készen a vezetésre?
            </h2>
            <p className="text-lg text-foreground/60 mb-8">
              Válasszon az egyik szuperautó közül és foglaljon most egy személyre szabott élményt.
            </p>
            <a
              href="/#contact"
              className="inline-block px-8 py-4 bg-accent text-background font-bold rounded hover:shadow-lg hover:shadow-accent/50 transition-all"
            >
              Foglalás
            </a>
          </SectionReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}

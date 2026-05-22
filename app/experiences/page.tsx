import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import SectionReveal from '@/components/SectionReveal';
import GlassCard from '@/components/GlassCard';

const experiences = [
  {
    title: 'Szuperautó élmény',
    description: 'Válasszon az egyik szuperautó közül és élvezze a maximális sebesség és teljesítmény adrenalint.',
    duration: '2 óra',
    price: 'Egyedi árazás',
    highlights: [
      'Szuperautó választása',
      'Körülbelül 20-30 perc vezetési idő',
      'Visszatérés a garázsuhoz',
      'Videó felvétel',
    ],
  },
  {
    title: 'Tandem sügésvezetés',
    description: 'Ülj egy profi versenyvezetővel és tapasztalja meg az igazi versenysebességet az első sorban.',
    duration: '1,5 óra',
    price: 'Egyedi árazás',
    highlights: [
      'Profi versenyvezetővel',
      'Teljes körben maximális sebesség',
      'Versenykamera felvétel',
      'Pilótajelentés',
    ],
  },
  {
    title: 'Kombinált program',
    description: 'Kombináljon szuperautó vezetést a profi tandem sügésvezetéssel az ideális élményért.',
    duration: 'Egész nap',
    price: 'Egyedi árazás',
    highlights: [
      'Szuperautó vezetés',
      'Tandem sügésvezetés',
      'Oktatás szegmentum',
      'Prémium étkezés',
      'Emlékkép csomag',
    ],
  },
  {
    title: 'VIP corporate esemény',
    description: 'Egy teljes csapatot vagy vállalatot szervezzen motorsport élmény csapatépítő eseményre.',
    duration: 'Rugalmas',
    price: 'Csapatonként',
    highlights: [
      'Teljes flóta hozzáférés',
      'Versenyek és versengések',
      'Catering és üdítők',
      'Teljes videó szerkesztés',
      'Dedikált esemény menedzser',
    ],
  },
];

export default function Experiences() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <HeroSection
        title="Motorsport élmények"
        subtitle="Egy életre szóló emlékeket hozunk létre szuperautó vezetéssel, profi versenyzéssel és személyre szabott élményekkel."
        ctaText="Élmény kiválasztása"
        ctaHref="#experiences"
        backgroundImage="/images/experiences-hero.jpg"
      />

      {/* Experiences Grid */}
      <section id="experiences" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <SectionReveal className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4 text-balance">
              Élmények
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Válassza ki az Ön számára ideális élményt és tapasztalja meg az adrenalina csúcsát.
            </p>
          </SectionReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((exp, idx) => (
              <SectionReveal key={idx} delay={idx * 0.1}>
                <GlassCard className="flex flex-col h-full">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{exp.title}</h3>
                  <p className="text-foreground/60 mb-6 flex-1">{exp.description}</p>

                  {/* Meta Info */}
                  <div className="flex justify-between text-sm mb-6 pb-6 border-b border-white/10">
                    <div>
                      <p className="text-foreground/50 text-xs mb-1">Időtartam</p>
                      <p className="text-accent font-semibold">{exp.duration}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-foreground/50 text-xs mb-1">Ár</p>
                      <p className="text-accent font-semibold">{exp.price}</p>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-3 mb-6 flex-1">
                    {exp.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span className="text-sm text-foreground/70">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full px-4 py-3 bg-accent text-background font-semibold rounded hover:shadow-lg hover:shadow-accent/50 transition-all">
                    Foglalás
                  </button>
                </GlassCard>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background/50 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <SectionReveal direction="left">
              <div className="space-y-8">
                <h2 className="text-4xl font-black text-foreground text-balance">
                  Miért mi?
                </h2>

                {[
                  {
                    title: 'Biztonság først',
                    desc: 'Minden élmény teljes biztonsági protokollokkal és szakértő felügyelettel végzett.',
                  },
                  {
                    title: 'Világszínvonalú autók',
                    desc: 'Legújabb szuperautók és versenyautók a legjobb teljesítményre.',
                  },
                  {
                    title: 'Profi oktatók',
                    desc: 'Tapasztalt versenyvezetők és oktatók az ideális élményért.',
                  },
                  {
                    title: 'Személyre szabottság',
                    desc: 'Minden élmény az Ön igényei és vágyai szerint személyre szabott.',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/20 border border-accent flex items-center justify-center flex-shrink-0">
                      <span className="text-accent font-bold">{idx + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-sm text-foreground/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </SectionReveal>

            <SectionReveal direction="right">
              <GlassCard className="p-8 space-y-6">
                <div className="text-center">
                  <div className="text-6xl mb-4">⭐</div>
                  <h4 className="text-3xl font-black text-foreground mb-2">4.9/5</h4>
                  <p className="text-sm text-foreground/60">500+ elégedett ügyfélből</p>
                </div>

                <div className="pt-6 space-y-4">
                  {['Kiváló teljesítmény', 'Profi oktatók', 'Lenyűgöző autók', 'Emlékezetes élmény'].map((review, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="text-accent">✓</span>
                      <span className="text-sm text-foreground">{review}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <SectionReveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-foreground mb-4 text-balance">
              Gyakran ismételt kérdések
            </h2>
          </SectionReveal>

          <div className="space-y-4">
            {[
              {
                q: 'Mi az szükséges jogosítvány?',
                a: 'Szükséges egy érvényes vezetői engedély. Az Ön sebességén Automatikus váltó autók is rendelkezésre állnak.',
              },
              {
                q: 'Mekkora az minimum és maximum korhatár?',
                a: 'Minimum 18 éves kell lenni, maximum korhatár nincs. Az egészségügyi állapot alapján végzünk felmérést.',
              },
              {
                q: 'Betegség vagy félelem esetén mi a teendő?',
                a: 'Teljesen biztonságos a fizikai és mentális egészségügyi megfontolás. Minden jellegű betegség vagy félelem közölhető az oktatóval.',
              },
              {
                q: 'Van-e csapatbiztosítás?',
                a: 'Igen, teljes csapatbiztosítás az összes élményre. Az Ön biztonságát első helyre helyezzük.',
              },
            ].map((faq, idx) => (
              <SectionReveal key={idx} direction="up" delay={idx * 0.05}>
                <GlassCard>
                  <h4 className="font-semibold text-foreground mb-2">{faq.q}</h4>
                  <p className="text-sm text-foreground/60">{faq.a}</p>
                </GlassCard>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import SectionReveal from '@/components/SectionReveal';
import GlassCard from '@/components/GlassCard';

const trainingPrograms = [
  {
    title: 'Alapozó oktatás',
    duration: '1 nap',
    level: 'Kezdő',
    includes: [
      'Pályabiztonsági bevezetés',
      'Alapvető versenyautó kezelés',
      'Fékezési technika',
      'Kanyarodási módszer',
      'Egy teljes nap vezetési gyakorlat',
      'Oktatón kívüli vezetés',
      'Nap vége visszajelzés',
    ],
  },
  {
    title: 'Haladó oktatás',
    duration: '2 nap',
    level: 'Közepeshaladó',
    includes: [
      'Alapozó oktatás teljes tartalom',
      'Gyorsabb kanyarodási technikák',
      'Száraz fékek szimulálása',
      'Mentési eljárások',
      'Két teljes nap vezetési gyakorlat',
      'Egy közösségi szektor versenyautóvezetés',
      'Személyes oktatási terv',
    ],
  },
  {
    title: 'Versenyautó specializáció',
    duration: '3 nap',
    level: 'Haladó',
    includes: [
      'Haladó oktatás teljes tartalom',
      'Versenyautó-specifikus kezelés',
      'Teljesítmény maximálás',
      'Fékbalansz beállítás',
      'Три teljes nap vezetési gyakorlat',
      'Versenyvezetői szimuláció',
      'Versenyzési etika és szabályok',
      'Teljesítmény elemzés és tanácsok',
    ],
  },
  {
    title: 'VIP személyre szabott program',
    duration: 'Rugalmas',
    level: 'Személyre szabott',
    includes: [
      'Teljes személyre szabott oktatási terv',
      'Egy-egy oktatás egy tapasztalt versenyvezetővel',
      'Bármely szuperautó választása',
      'Pályához való teljes hozzáférés',
      'Gourmet étkezés a pályán',
      'Versenyzési teljesítményelemzés',
      'Emlékkép felvetel és szerkesztés',
      'Nemzetközi szállítási lehetőség',
    ],
  },
];

export default function Training() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <HeroSection
        title="Versenyautó oktatás"
        subtitle="Tanuljon a legjobbaktól. Négytagú szakembercsapata versenyautó technikákat fog megtanítani a pálya biztonságos környezetében."
        ctaText="Program kiválasztás"
        ctaHref="#programs"
        backgroundImage="/images/training-hero.jpg"
      />

      {/* Training Programs */}
      <section id="programs" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <SectionReveal className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4 text-balance">
              Oktatási programok
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Válassza ki az Ön szintjének megfelelő oktatási programot és kezdje meg a fejlődést.
            </p>
          </SectionReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainingPrograms.map((program, idx) => (
              <SectionReveal key={idx} delay={idx * 0.1}>
                <GlassCard className="flex flex-col h-full">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">{program.title}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-accent">{program.duration}</span>
                      <span className="text-xs px-2 py-1 bg-accent/20 border border-accent/40 rounded text-accent">
                        {program.level}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3 flex-1">
                    {program.includes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-foreground/70">
                        <span className="text-accent mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="mt-6 w-full px-4 py-2 bg-accent/20 border border-accent/40 text-accent rounded hover:bg-accent/30 transition-all">
                    Tudjon meg többet
                  </button>
                </GlassCard>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Approach */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background/50 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <SectionReveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-foreground mb-4 text-balance">
              Oktatási módszerünk
            </h2>
          </SectionReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Elméleti alapok',
                description:
                  'Kezdjük az alapokkal: pályabiztonsági protokollok, autó kezelés és versenyautó dinamika elméleti alapjai.',
              },
              {
                title: 'Gyakorlati vezetés',
                description:
                  'Három módszert követünk: oktatón kívüli gyakorlat, társautós ülés, majd független vezetés.',
              },
              {
                title: 'Teljesítmény elemzés',
                description:
                  'Minden vezetés után személyre szabott visszajelzést adunk, videó elemzést és fejlesztési tervet.',
              },
            ].map((approach, idx) => (
              <SectionReveal key={idx} direction="up" delay={idx * 0.1}>
                <GlassCard>
                  <h3 className="text-lg font-bold text-foreground mb-3">{approach.title}</h3>
                  <p className="text-sm text-foreground/60">{approach.description}</p>
                </GlassCard>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <SectionReveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-foreground mb-4 text-balance">
              Oktatóink
            </h2>
            <p className="text-lg text-foreground/60">
              Mindannyian profi versenyvezetők legalább 10 év versenyautós tapasztalattal.
            </p>
          </SectionReveal>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: 'Kiss János', title: 'Vezető oktató', experience: '15 év versenyautózás' },
              { name: 'Nagy Péter', title: 'Oktató', experience: '12 év versenyautózás' },
              { name: 'Szabolcs Máté', title: 'Oktató', experience: '10 év versenyautózás' },
              { name: 'Sándor Gergő', title: 'Szakértő', experience: '14 év versenyautózás' },
            ].map((instructor, idx) => (
              <SectionReveal key={idx} direction="up" delay={idx * 0.1}>
                <GlassCard>
                  <div className="text-center space-y-4">
                    <div className="text-5xl">👨‍🏫</div>
                    <div>
                      <h4 className="font-bold text-foreground">{instructor.name}</h4>
                      <p className="text-sm text-accent mb-2">{instructor.title}</p>
                      <p className="text-xs text-foreground/60">{instructor.experience}</p>
                    </div>
                  </div>
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

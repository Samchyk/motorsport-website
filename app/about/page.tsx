import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SectionReveal from "@/components/SectionReveal";
import GlassCard from "@/components/GlassCard";
import ContactForm from "@/components/ContactForm";

export default function About() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <HeroSection
        title="Rólunk"
        subtitle="A Hungarymotorsport a motorsport iránti közös szenvedélyből és az élményvezetés szeretetéből született."
        ctaText="Tudjon meg többet"
        ctaHref="#story"
      />

      {/* Our Story */}
      <section
        id="story"
        className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <SectionReveal direction="left">
              <div className="space-y-6">
                <h2 className="text-4xl sm:text-5xl font-black text-foreground text-balance">
                  A történetünk
                </h2>
                <p className="text-lg text-foreground/70">
                  A Hungarymotorsportot 2015-ben négy profi versenyző
                  alapította, közös vízióval: a motorsport-élmény és a
                  vezetésoktatás elérhetővé tétele mindenki számára.
                </p>
                <p className="text-lg text-foreground/70">
                  Az elmúlt évtizedben a versenyzés és a profi vezetés során
                  szerzett tapasztalatainkat ügyfeleink képzésére és
                  inspirálására fordítottuk.
                </p>
                <p className="text-lg text-foreground/70">
                  Mára Magyarország egyik legmegbízhatóbb
                  motorsport-platformjává váltunk, több ezer elégedett
                  ügyféllel, valamint világszínvonalú szuperautó- és oktatói
                  flottával.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal direction="right">
              <GlassCard className="p-8 space-y-6">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Mérföldkövek
                </h3>
                {[
                  { year: "2015", text: "A Hungarymotorsport alapítása" },
                  { year: "2017", text: "A szuperautó-flotta bővítése" },
                  { year: "2019", text: "2000+ ügyfél elérése" },
                  { year: "2023", text: "5000+ elégedett ügyfél" },
                  { year: "2025", text: "Új pálya és modernizáció" },
                ].map((milestone, idx) => (
                  <div
                    key={idx}
                    className="flex gap-4 pb-4 border-b border-white/10 last:border-0 last:pb-0"
                  >
                    <div className="text-accent font-bold text-lg">
                      {milestone.year}
                    </div>
                    <div className="text-foreground/70">{milestone.text}</div>
                  </div>
                ))}
              </GlassCard>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background/50 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <SectionReveal className="text-center mb-16">
            <h2 className="text-4xl font-black text-foreground mb-4 text-balance">
              Küldetés és értékek
            </h2>
          </SectionReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Küldetés",
                description:
                  "A motorsport élmények és oktatás nyújtása a legmagasabb szintű biztonság és profizmus mellett minden ügyfélnek.",
                icon: "🎯",
              },
              {
                title: "Biztonság",
                description:
                  "Az ügyfél biztonságát az első helyre helyezzük. Összes protokoll és felügyelet a legmagasabb szabvány szerint.",
                icon: "🛡️",
              },
              {
                title: "Innováció",
                description:
                  "Folyamatosan fejlesztjük és modernizáljuk a flottánkat és az oktatási módszereket a legjobb élmény érdekében.",
                icon: "⚡",
              },
            ].map((item, idx) => (
              <SectionReveal key={idx} direction="up" delay={idx * 0.1}>
                <GlassCard>
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-foreground/60">{item.description}</p>
                </GlassCard>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
      {/* Stats */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background/50 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { label: "Évek tapasztalata", value: "60+" },
              { label: "Elégedett ügyfél", value: "5000+" },
              { label: "Szuperautók", value: "12" },
              { label: "Profi oktatók", value: "15+" },
            ].map((stat, idx) => (
              <SectionReveal key={idx} delay={idx * 0.1}>
                <GlassCard className="text-center p-8">
                  <h4 className="text-4xl font-black text-accent mb-2">
                    {stat.value}
                  </h4>
                  <p className="text-foreground/60 text-sm">{stat.label}</p>
                </GlassCard>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <SectionReveal className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4 text-balance">
              Kapcsolatba lépés
            </h2>
            <p className="text-lg text-foreground/60">
              Van kérdése? Szívesen válaszolunk és segítünk az ideális élmény
              kiválasztásában.
            </p>
          </SectionReveal>

          <ContactForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}

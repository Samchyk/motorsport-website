import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionReveal from '@/components/SectionReveal';

export default function Terms() {
  const currentYear = new Date().getFullYear();
  const lastUpdated = new Date().toLocaleDateString('hu-HU');

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Title Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <SectionReveal>
            <div className="space-y-4">
              <h1 className="text-5xl font-black text-foreground">Feltételek és kikötések</h1>
              <p className="text-foreground/60">
                Utolsó frissítés: {lastUpdated}
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto space-y-12">
          <SectionReveal>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">1. Elfogadás</h2>
              <p className="text-foreground/70">
                A Hungarymotorsport
 szolgáltatásainak használatával Ön egyetért ezzel a feltételekkel és kikötésekkel. Ha nem ért egyet, kérjük ne használja a szolgáltatásokat.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">2. Felhasználási feltételek</h2>
              <p className="text-foreground/70 mb-4">
                Az alábbi feltételek betartása kötelező:
              </p>
              <ul className="space-y-2 text-foreground/70">
                <li>• Legalább 18 éves kell lenni</li>
                <li>• Érvényes vezetői engedély szükséges</li>
                <li>• Nem szabad befolyásolt állapotban vezetni</li>
                <li>• Az összes oktatásból tanácsot követni kell</li>
                <li>• Az autókat gondosan kell kezelni</li>
              </ul>
            </div>
          </SectionReveal>

          <SectionReveal>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">3. Foglalások és lemondások</h2>
              <p className="text-foreground/70 mb-4">
                Foglalási szabályok:
              </p>
              <ul className="space-y-2 text-foreground/70">
                <li>• Foglalások megerősítésre szorulnak</li>
                <li>• Lemondás 48 órával korábban fölhasználható</li>
                <li>• A lemondások után 50% díj visszatérítés jár</li>
                <li>• Nem jelenik meg foglalásokra díj vonható</li>
              </ul>
            </div>
          </SectionReveal>

          <SectionReveal>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">4. Felelősséghatárolás</h2>
              <p className="text-foreground/70">
                A Hungarymotorsport
 nem felel az alábbiak közül:
              </p>
              <ul className="space-y-2 text-foreground/70">
                <li>• A vezetési veszélyek okozta sérülések</li>
                <li>• Az autók sérüléseiből eredő költségek</li>
                <li>• Az Ön készülékek vagy holmik elvesztése</li>
                <li>• Közvetett vagy következményes kár</li>
              </ul>
            </div>
          </SectionReveal>

          <SectionReveal>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">5. Biztosítás</h2>
              <p className="text-foreground/70">
                Teljes casco biztosítás az összes élményre. Az Ön személyi baleseti biztosítása is javasolt. A speciális baleseti biztosítás a foglalás során megvásárolható.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">6. Az autók kezelése</h2>
              <p className="text-foreground/70 mb-4">
                Az autókat az alábbi szabályok szerint kell kezelni:
              </p>
              <ul className="space-y-2 text-foreground/70">
                <li>• Nem szabad közúton vezetni</li>
                <li>• Az oktatási utasításokat követni kell</li>
                <li>• A pálya határait be kell tartani</li>
                <li>• Az autót gondosan kell kezelni</li>
              </ul>
            </div>
          </SectionReveal>

          <SectionReveal>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">7. Fizikai követelmények</h2>
              <p className="text-foreground/70">
                Az élmény során megfelelő fizikai és mentális állapot szükséges. A szjn illetve alkalmazottaink jogosultak az Ön alkalmasságát megvizsgálni.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">8. Érkezés</h2>
              <p className="text-foreground/70">
                Az élmények egy óra előtt történik érkezés szükséges. A késés miatt lemondott foglalás díj vonható.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">9. Képek és videók</h2>
              <p className="text-foreground/70">
                Az élmények során készült képek és videók az Ön számára elérhetők. A Hungarymotorsport
 felhasználhatja ezeket a marketing célokra az Ön hozzájárulásával.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">10. Jogi megfelelőség</h2>
              <p className="text-foreground/70">
                Az összes feltétel a magyar jog alapján értelmezendő. Az ezzel kapcsolatos viták magyar bíróság elé tartoznak.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}

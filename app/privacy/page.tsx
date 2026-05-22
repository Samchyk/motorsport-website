import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionReveal from '@/components/SectionReveal';

export default function Privacy() {
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
              <h1 className="text-5xl font-black text-foreground">Adatvédelmi szabályzat</h1>
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
              <h2 className="text-2xl font-bold text-foreground">1. Bevezető</h2>
              <p className="text-foreground/70">
                A Hungarymotorsport
 (a továbbiakban: &quot;Vállalat&quot;) elkötelezett az Ön személyes adatainak védelme mellett. Ez az adatvédelmi szabályzat elmagyarázza, hogyan gyűjtjük, használjuk és védjük az Ön adatait.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">2. Gyűjtött adatok</h2>
              <p className="text-foreground/70 mb-4">
                Az alábbi személyes adatokat gyűjthetjük:
              </p>
              <ul className="space-y-2 text-foreground/70">
                <li>• Név és elérhetőségi adatok (email, telefon)</li>
                <li>• Vezetői engedély szám és adatai</li>
                <li>• Biztosítási információk</li>
                <li>• Egészségügyi adatok (szükség esetén)</li>
                <li>• Foglalási és tranzakciós adatok</li>
                <li>• Website használati adatok (süti, naplók)</li>
              </ul>
            </div>
          </SectionReveal>

          <SectionReveal>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">3. Az adatok felhasználása</h2>
              <p className="text-foreground/70 mb-4">
                Az Ön adatait a következő célokra használjuk:
              </p>
              <ul className="space-y-2 text-foreground/70">
                <li>• Foglalások kezelése és megerősítése</li>
                <li>• Ügyfélszolgálat nyújtása</li>
                <li>• Biztonsági és jogi megfelelőség</li>
                <li>• Marketing és kommunikáció (hozzájárulás után)</li>
                <li>• Platform fejlesztése és javítása</li>
              </ul>
            </div>
          </SectionReveal>

          <SectionReveal>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">4. Adatbiztonság</h2>
              <p className="text-foreground/70">
                Az Ön személyes adatait titkosítás és biztonságos szerveren tároljuk. Szükséges intézkedéseket teszünk az adatok védelme érdekében, azonban nincs garantált biztonság az interneten.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">5. Harmadik felek</h2>
              <p className="text-foreground/70">
                Az Ön adatait nem adjuk el harmadik feleknek. Biztosítási partnerekkel és szükséges szolgáltatókkal megoszthatjuk az adatokat az Ön szolgáltatásai nyújtásához.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">6. Az Ön jogai</h2>
              <p className="text-foreground/70 mb-4">
                Az GDPR szerint az Ön az alábbi jogokkal rendelkezik:
              </p>
              <ul className="space-y-2 text-foreground/70">
                <li>• Hozzáférés az Ön adataihoz</li>
                <li>• Adatok korrigálása vagy törlése</li>
                <li>• Az adatkezelésre vonatkozó bejelentés</li>
                <li>• Adathordozhatóság</li>
              </ul>
            </div>
          </SectionReveal>

          <SectionReveal>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">7. Sütik</h2>
              <p className="text-foreground/70">
                A website sütiket használ a felhasználó élménye javítása érdekében. A sütik beállítása a böngésző beállításaiban módosítható.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">8. Kapcsolatfelvétel</h2>
              <p className="text-foreground/70">
                Ha az adatvédelemmel kapcsolatos kérdése van, kérjük forduljon hozzánk:
              </p>
              <p className="text-foreground/70 mt-4">
                Email: info@hungarymotorsport.com<br />
                Telefon: +36 XX XXX XXXX
              </p>
            </div>
          </SectionReveal>

          <SectionReveal>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">9. A szabályzat módosítása</h2>
              <p className="text-foreground/70">
                Fenntartjuk a jogot az adatvédelmi szabályzat módosítására. Az utolsó frissítés dátuma mindig feltüntetésre kerül.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}

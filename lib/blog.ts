export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'A versenyautó-vezetés alapjai: a helyes fékezési technika',
    excerpt:
      'Fedezze fel a hatékony fékezés titkait a versenypályán. Bemutatjuk a fékbeállításokat és a teljesítményoptimalizálást.',
    category: 'Versenytechnika',
    content: [
      'A fékezés a versenyautó-vezetés egyik legfontosabb eleme — egy jó kanyaron sokat lehet veszíteni, de egy rossz fékpontnál még többet.',
      'A trail braking lényege, hogy a fékerőt fokozatosan engedjük ki a kanyarba való belépéskor. Így a kocsi orra terhelt marad, és a kormánymozdulatra élesebben reagál.',
      'A fékpedál érzékenysége nem lineáris: a maximális lassítást az ABS-küszöb előtti pillanatban érjük el. A célunk, hogy ezt a pontot stabilan, körről körre megtaláljuk.',
      'Gyakorláshoz használjon referenciapontokat a pálya szélén — egy tábla, egy festett vonal —, és minden körben próbálja meg egy autóhosszal később megkezdeni a fékezést.',
    ],
  },
  {
    id: 2,
    title: 'Szuperautók 2026: a legújabb megjelenések',
    excerpt:
      'Bemutatjuk 2026 legújabb szuperautóit és lenyűgöző teljesítményadataikat.',
    category: 'Szuperautók',
    content: [
      'A 2026-os év több ikonikus modell megújulását hozza. A hibrid hajtásláncok mára szinte minden gyártónál alapfelszereltséggé váltak.',
      'A Ferrari 296 GTB utódja 830 lóerős V6-os hibrid egységgel érkezik, miközben a tömeget közel 80 kilogrammal csökkentették.',
      'A Lamborghini bemutatta a Temerario nevű új modelljét, amely a Huracán szellemi örököse, és 10 000-es fordulatszámra képes V8-as motorral szerel.',
      'A McLaren új W1 modellje 1275 lóerős teljesítményével a márka eddigi legerősebb utcai autója — ezzel a 0-100 km/h alig 2,7 másodperc.',
    ],
  },
  {
    id: 3,
    title: 'Pályaversenyzés vs. utcai vezetés: az alapvető különbségek',
    excerpt:
      'Megismerheti a pályaversenyzés és az utcai vezetés közötti különbségeket, valamint az egyes területeken különösen fontos készségeket.',
    category: 'Oktatás',
    content: [
      'Az utcán a védekező vezetés a cél: kiszámíthatatlan szereplőkkel, gyalogosokkal, változó tapadással kell számolnunk. A pályán ezzel szemben ismert, ellenőrzött környezetben dolgozunk.',
      'A pályán a tapadáshatár megismerése és kihasználása a feladat — az utcán épp ennek a határnak a tisztes megtartása.',
      'A nézés technikája is más: utcán messze előre, a pályán pedig konkrét referenciapontokra (apex, kifutó) fókuszálunk.',
      'Aki pályán tanul, az utcán is biztonságosabb sofőrré válik — mert érti, hogy mit csinál az autó határhelyzetben.',
    ],
  },
  {
    id: 4,
    title: 'Az ideális sebesség: hogyan válasszon szuperautót',
    excerpt:
      'Útmutató az ideális szuperautó kiválasztásához az Ön igényei és preferenciái alapján.',
    category: 'Szuperautók',
    content: [
      'Mielőtt szuperautót választana, tisztázza, mire fogja használni: hétvégi élményvezetésre, pályanapokra vagy gyűjteménybe.',
      'A pályaorientált modellek (pl. Porsche 911 GT3, Ferrari 296 GT3) merevebb futóművel és kevesebb komforttal készülnek, de pályán verhetetlenek.',
      'A grand tourer kategória (Aston Martin DB12, Bentley Continental GT) hosszú utakra született: erő van bőven, de a komfort és a hangszigetelés is elsőrangú.',
      'Vegye figyelembe a fenntartási költségeket is: egy szervízóra ára egy szuperautónál többszöröse a megszokottnak, a gumiabroncsok élettartama pedig pályán órákban mérhető.',
    ],
  },
  {
    id: 5,
    title: 'Ferrari F8 Tributo: a V8-as ikon részletes elemzése',
    excerpt:
      'Mélyreható elemzés a Ferrari F8 Tributo teljesítményéről és karakteréről.',
    category: 'Autótesztek',
    content: [
      'Az F8 Tributo a Ferrari háromliteres, biturbó V8-asának talán legkiérleltebb változata: 720 lóerő, 770 Nm nyomaték, és 2,9 másodperces 0-100-as gyorsulás.',
      'Karosszériája a 488 Pista aerodinamikai megoldásait viszi tovább, de szelídebb formavilágban — a hátsó S-Duct és az új diffúzor 15%-kal több leszorítóerőt biztosít.',
      'Vezetési élményben az F8 a klasszikus iskolához tartozik: nincs hibrid rendszer, csak a turbó V8 nyers, lineáris ereje.',
      'Pályán meglepően barátságos: az elektronikus differenciálmű és a Side Slip Control 6.1 még közepes pilóta kezében is biztos megfarolásokat enged.',
    ],
  },
  {
    id: 6,
    title: 'Motorsport-versenyzés: kezdő útmutató',
    excerpt:
      'Kezdje el a motorsport-versenyzést. Megtudhatja, mit kell tudnia, ha profi versenyzővé szeretne válni.',
    category: 'Motorsport',
    content: [
      'Az első lépés szinte mindig a gokart. Itt tanulja meg az alapokat: ívválasztás, fékpontok, versenyhelyzetek olvasása.',
      'Magyarországon a Magyar Nemzeti Autósport Szövetség (MNASZ) ad ki versenyzői licenceket. A C licenc megszerzéséhez orvosi alkalmasság és egy alapszintű tanfolyam szükséges.',
      'A költségek reálisan: egy szezon klubversenyzés 2-4 millió forint körül, országos bajnokság már 8-15 millió. Profi szint ennek többszöröse.',
      'A legjobb befektetés mégis a pályaidő. Aki sok időt tölt a kormány mögött — szimulátorban is —, az gyorsabban fejlődik bármilyen tehetségnél.',
    ],
  },
  {
    id: 7,
    title: 'Az aerodinamika szerepe a szuperautók teljesítményében',
    excerpt:
      'Fedezze fel az aerodinamika szerepét a szuperautók teljesítményében és kezelhetőségében.',
    category: 'Szuperautó-technika',
    content: [
      'Az aerodinamika 200 km/h felett mindennél fontosabbá válik: a leszorítóerő ekkor már annyi tapadást ad, mint a gumi súrlódása alacsony sebességen.',
      'Az aktív elemek — szárnyak, diffúzorok, légterelők — valós időben alkalmazkodnak: egyenesben kis légellenállás, kanyarban nagy leszorítóerő.',
      'A földhatás (ground effect) a kocsi alatti levegő gyorsításán alapul. A Venturi-csatornák szívóhatást hoznak létre, ami az autót szó szerint a pályához rögzíti.',
      'A modern szuperautók akár 800 kg leszorítóerőt is képesek generálni 250 km/h-n — ennyi extra terhelés szinte egy második autót jelent a kerekeken.',
    ],
  },
  {
    id: 8,
    title: 'Kockázatkezelés a motorsportban',
    excerpt:
      'Ismerje meg a motorsport esszenciális kockázatkezelési gyakorlatait és a balesetek elkerülését szolgáló biztonsági protokollokat.',
    category: 'Biztonság',
    content: [
      'A motorsportban a kockázat nem szüntethető meg, csak kezelhető. A felszerelés — bukósisak, HANS, tűzálló öltözet — az utolsó védelmi vonal, de nem helyettesíti a tudatos vezetést.',
      'A pályaszakaszok ismerete életet menthet: tudni kell, hol vannak a kifutók, hol kemény a fal, és melyik kanyar a legbüntetőbb hiba esetén.',
      'A fizikai állapot szintén kritikus. Egy 30 perces stintben a pilóta pulzusa végig 160-180 között lehet — felkészületlen szervezetnél ez baleseti kockázat.',
      'A mentális rutin a legfontosabb védelem: nyugalom, ritmus, és annak elfogadása, hogy néha jobb egy lassabb kör, mint egy törött autó.',
    ],
  },
];

export function getPostById(id: number): BlogPost | undefined {
  return blogPosts.find((p) => p.id === id);
}

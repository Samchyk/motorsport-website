import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import SectionReveal from '@/components/SectionReveal';
import GlassCard from '@/components/GlassCard';
import { blogPosts } from '@/lib/blog';

export default function Blog() {
  const featured = blogPosts[0];

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <HeroSection
        title="Motorsport Blog"
        subtitle="A legfrissebb hírek, oktatási cikkek és szuperautó-tesztek a motorsport világából."
        ctaText="Cikkek böngészése"
        ctaHref="#articles"
        backgroundImage="/images/blog-hero.jpg"
      />

      {/* Featured Article */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <GlassCard className="p-8 md:p-12 mb-16" hover={false}>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="text-sm text-accent font-semibold">Kiemelt cikk</span>
                  <h2 className="text-4xl font-black text-foreground mt-3 mb-4 text-balance">
                    {featured.title}
                  </h2>
                  <p className="text-lg text-foreground/70 mb-6">
                    {featured.excerpt}
                  </p>
                  <Link
                    href={`/blog/${featured.id}`}
                    className="inline-block px-6 py-3 bg-accent text-background font-semibold rounded hover:shadow-lg hover:shadow-accent/50 transition-all"
                  >
                    Olvassa el a teljes cikket
                  </Link>
                </div>
                <div className="text-5xl text-center">📰</div>
              </div>
            </GlassCard>
          </SectionReveal>
        </div>
      </section>

      {/* Articles Grid */}
      <section id="articles" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background/50 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <SectionReveal className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-2 text-balance">
              Összes cikk
            </h2>
            <p className="text-foreground/60">
              Böngésszen a legújabb motorsport-cikkek között.
            </p>
          </SectionReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, idx) => (
              <SectionReveal key={post.id} delay={idx * 0.05}>
                <Link href={`/blog/${post.id}`} className="block h-full">
                  <GlassCard className="flex flex-col h-full">
                    <div className="flex-1">
                      <span className="text-xs text-accent font-semibold">{post.category}</span>
                      <h3 className="text-lg font-bold text-foreground mt-3 mb-3 text-balance leading-tight">
                        {post.title}
                      </h3>
                      <p className="text-sm text-foreground/60">{post.excerpt}</p>
                    </div>
                    <div className="pt-4 mt-4 border-t border-white/10">
                      <span className="text-sm text-accent hover:text-accent/80 font-semibold transition-colors">
                        Olvassa el →
                      </span>
                    </div>
                  </GlassCard>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <SectionReveal className="text-center mb-12">
            <h2 className="text-4xl font-black text-foreground mb-4 text-balance">
              Kategóriák
            </h2>
          </SectionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Versenytechnika', 'Szuperautók', 'Oktatás', 'Autótesztek'].map((cat, idx) => (
              <SectionReveal key={idx} direction="up" delay={idx * 0.05}>
                <GlassCard className="text-center p-8">
                  <div className="text-4xl mb-4">📁</div>
                  <h3 className="font-semibold text-foreground">{cat}</h3>
                  <p className="text-xs text-foreground/50 mt-2">Felfedezés →</p>
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

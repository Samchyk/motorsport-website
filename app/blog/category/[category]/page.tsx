import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionReveal from '@/components/SectionReveal';
import GlassCard from '@/components/GlassCard';
import { blogPosts } from '@/lib/blog';

export function generateStaticParams() {
  const categories = Array.from(new Set(blogPosts.map((p) => p.category)));
  return categories.map((category) => ({ category: encodeURIComponent(category) }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: rawCategory } = await params;
  const category = decodeURIComponent(rawCategory);

  const posts = blogPosts.filter((p) => p.category === category);

  if (posts.length === 0) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-12 sm:pt-40 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-accent transition-colors mb-8"
            >
              ← Vissza a bloghoz
            </Link>

            <span className="text-sm text-accent font-semibold uppercase tracking-wider">
              Kategória
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-foreground mt-3 mb-4 text-balance leading-tight">
              {category}
            </h1>
            <p className="text-foreground/60">
              {posts.length} cikk ebben a kategóriában.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="pb-20 sm:pb-32 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, idx) => (
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

      <Footer />
    </main>
  );
}

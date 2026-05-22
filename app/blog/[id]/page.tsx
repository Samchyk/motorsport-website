import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionReveal from '@/components/SectionReveal';
import GlassCard from '@/components/GlassCard';
import { blogPosts, getPostById } from '@/lib/blog';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ id: String(post.id) }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = getPostById(Number(id));

  if (!post) {
    notFound();
  }

  const related = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <article className="pt-32 pb-20 sm:pt-40 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-3xl mx-auto">
          <SectionReveal>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-accent transition-colors mb-8"
            >
              ← Vissza a bloghoz
            </Link>

            <span className="text-sm text-accent font-semibold uppercase tracking-wider">
              {post.category}
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-foreground mt-3 mb-6 text-balance leading-tight">
              {post.title}
            </h1>
            <p className="text-xl text-foreground/70 mb-12 text-balance">
              {post.excerpt}
            </p>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="space-y-6">
              {post.content.map((paragraph, idx) => (
                <p key={idx} className="text-lg text-foreground/80 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </SectionReveal>
        </div>
      </article>

      {related.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background/50 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <SectionReveal className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-black text-foreground text-balance">
                Kapcsolódó cikkek
              </h2>
            </SectionReveal>

            <div className="grid md:grid-cols-3 gap-6">
              {related.map((p, idx) => (
                <SectionReveal key={p.id} delay={idx * 0.05}>
                  <Link href={`/blog/${p.id}`} className="block h-full">
                    <GlassCard className="flex flex-col h-full">
                      <div className="flex-1">
                        <span className="text-xs text-accent font-semibold">
                          {p.category}
                        </span>
                        <h3 className="text-lg font-bold text-foreground mt-3 mb-3 text-balance leading-tight">
                          {p.title}
                        </h3>
                        <p className="text-sm text-foreground/60">{p.excerpt}</p>
                      </div>
                      <div className="pt-4 mt-4 border-t border-white/10">
                        <span className="text-sm text-accent font-semibold">
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
      )}

      <Footer />
    </main>
  );
}

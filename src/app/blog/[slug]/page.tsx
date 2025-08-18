import { notFound } from 'next/navigation';
import Image from 'next/image';
import { blogPosts } from '@/lib/data';
import type { Metadata } from 'next';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) {
    return {};
  }
  return {
    title: `${post.title} | EXCELLES Hub`,
    description: post.excerpt,
  };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article>
      <header className="relative w-full h-[40vh]">
        <Image
          src={post.imageUrl}
          alt={post.title}
          layout="fill"
          objectFit="cover"
          className="brightness-75"
          data-ai-hint={post.imageHint}
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
          <div className="container px-4 mx-auto text-center text-white">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">{post.category}</p>
            <h1 className="mt-2 text-4xl md:text-5xl font-headline">{post.title}</h1>
            <p className="mt-4 text-sm text-primary-foreground/80">
              By {post.author} on {post.date}
            </p>
          </div>
        </div>
      </header>

      <div className="container max-w-3xl px-4 py-12 mx-auto md:py-16">
        <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-headline prose-a:text-primary">
          <p className="text-xl leading-relaxed text-muted-foreground">{post.excerpt}</p>
          <p>{post.content}</p>
        </div>
      </div>
    </article>
  );
}

import { blogPosts } from '@/lib/data';
import { BlogList } from './_components/blog-list';

export default function BlogPage() {
  return (
    <div className="bg-background">
      <section className="py-16 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-headline">Our Blog</h1>
            <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
              Stay updated with our latest news, stories, and initiatives.
            </p>
          </div>
          <BlogList posts={blogPosts} />
        </div>
      </section>
    </div>
  );
}

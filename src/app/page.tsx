import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Palette, BookOpen, Leaf, Heart } from 'lucide-react';
import { blogPosts } from '@/lib/data';
import { BlogPost } from '@/lib/types';

const BlogPreviewCard = ({ post }: { post: BlogPost }) => (
  <Card className="overflow-hidden transition-shadow duration-300 hover:shadow-xl">
    <Link href={`/blog/${post.slug}`} className="block">
      <Image
        src={post.imageUrl}
        alt={post.title}
        width={400}
        height={250}
        className="object-cover w-full h-48"
        data-ai-hint={post.imageHint}
      />
      <CardHeader>
        <CardTitle className="font-headline text-xl leading-tight">{post.title}</CardTitle>
        <p className="pt-1 text-sm text-muted-foreground">{post.date} &bull; {post.category}</p>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{post.excerpt}</p>
        <span className="inline-block mt-4 font-semibold text-primary">
          Read More
        </span>
      </CardContent>
    </Link>
  </Card>
);

export default function Home() {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative flex items-center justify-center w-full text-center text-white h-[60vh]">
        <Image
          src="https://images.unsplash.com/photo-1671029876878-6e91cfcfe324?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjYW1lcm91biUyMGNoaWxkfGVufDB8fHx8MTc1NTU0NTI3MHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Children in Cameroon"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
          data-ai-hint="cameroonian children smiling"
        />
        <div className="relative z-10 max-w-2xl px-4 mx-auto">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl font-headline">
            Empowering the Youth of Cameroon
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Nurturing potential through arts, culture, and agriculture.
          </p>
          <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/about">Learn More About Our Mission</Link>
          </Button>
        </div>
      </section>

      <section id="pillars" className="py-16 bg-background md:py-24">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-3xl text-center md:text-4xl font-headline">Our Core Pillars</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Palette className="w-12 h-12 text-accent" />
                </div>
                <CardTitle className="font-headline">Arts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Fostering creativity and self-expression through various artistic mediums.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <BookOpen className="w-12 h-12 text-accent" />
                </div>
                <CardTitle className="font-headline">Culture</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Preserving and promoting Cameroon's rich cultural heritage for future generations.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Leaf className="w-12 h-12 text-accent" />
                </div>
                <CardTitle className="font-headline">Agriculture</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Teaching sustainable farming practices to ensure food security and economic growth.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="donate-cta" className="py-16 text-white bg-primary md:py-24">
        <div className="container flex flex-col items-center px-4 mx-auto text-center">
          <Heart className="w-16 h-16 mb-4 text-accent" />
          <h2 className="text-3xl md:text-4xl font-headline">Make a Difference Today</h2>
          <p className="max-w-2xl mt-4 text-lg text-primary-foreground/80">
            Your contribution helps us provide essential resources and opportunities to children in need. Every donation, big or small, creates a ripple of positive change.
          </p>
          <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/donate">Donate Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

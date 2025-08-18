'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { BlogPost } from '@/lib/types';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All', 'Arts', 'Culture', 'Agriculture'];

const BlogCard = ({ post }: { post: BlogPost }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ duration: 0.3 }}
  >
    <Card className="h-full overflow-hidden transition-shadow duration-300 hover:shadow-xl">
      <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
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
        <CardContent className="flex-grow">
          <p className="text-muted-foreground">{post.excerpt}</p>
        </CardContent>
        <CardContent>
          <span className="font-semibold text-primary">
            Read More
          </span>
        </CardContent>
      </Link>
    </Card>
  </motion.div>
);

export function BlogList({ posts }: { posts: BlogPost[] }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = activeCategory === 'All'
    ? posts
    : posts.filter(post => post.category === activeCategory);

  return (
    <div className="mt-12">
      <Tabs defaultValue="All" onValueChange={setActiveCategory} className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList>
            {categories.map(category => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        <TabsContent value={activeCategory}>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence>
              {filteredPosts.map(post => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </AnimatePresence>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

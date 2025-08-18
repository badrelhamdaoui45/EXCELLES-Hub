'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { generateBlogIdeas } from '@/ai/flows/generate-blog-ideas';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Loader2, Lightbulb } from 'lucide-react';

const formSchema = z.object({
  topic: z.string().min(3, 'Topic must be at least 3 characters long.'),
});

export function AiBlogIdeaGenerator() {
  const [ideas, setIdeas] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      topic: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setError(null);
    setIdeas([]);
    try {
      const result = await generateBlogIdeas({ topic: values.topic });
      setIdeas(result.ideas);
    } catch (e) {
      setError('Failed to generate ideas. Please try again.');
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-headline">AI Blog Post Idea Generator</CardTitle>
        <CardDescription>
          Stuck for ideas? Enter a topic and let our AI assistant help you out!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="topic"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Topic</FormLabel>
                  <FormControl>
                    <Textarea placeholder="e.g., Sustainable farming in Cameroon" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Generating...
                </>
              ) : (
                'Generate Ideas'
              )}
            </Button>
          </form>
        </Form>

        {error && <p className="mt-4 text-center text-destructive">{error}</p>}

        {ideas.length > 0 && (
          <div className="mt-6">
            <h3 className="mb-4 text-lg font-semibold text-center">Generated Ideas:</h3>
            <ul className="space-y-2">
              {ideas.map((idea, index) => (
                <li key={index} className="flex items-start p-3 rounded-md bg-background">
                  <Lightbulb className="flex-shrink-0 w-5 h-5 mt-1 mr-3 text-accent" />
                  <span>{idea}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

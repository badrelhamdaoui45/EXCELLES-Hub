import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Gift, Calendar } from 'lucide-react';

export default function DonatePage() {
  return (
    <div className="bg-background">
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl px-4 mx-auto text-center">
          <Heart className="w-16 h-16 mx-auto text-accent" />
          <h1 className="mt-6 text-4xl md:text-5xl font-headline">Support Our Cause</h1>
          <p className="max-w-3xl mx-auto mt-4 text-lg text-muted-foreground">
            Your generous donation fuels our mission to empower the youth of Cameroon. With your help, we can provide vital resources for education, arts, and sustainable agriculture, creating a brighter future for countless children. Every contribution, no matter the size, makes a significant impact.
          </p>
          <Button asChild size="lg" className="mt-8 text-lg bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="https://www.paypal.com" target="_blank" rel="noopener noreferrer">
              Donate via PayPal
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-16 bg-secondary md:py-24">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-3xl text-center md:text-4xl font-headline">Other Ways to Give</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <Gift className="w-8 h-8 mb-2 text-primary" />
                <CardTitle className="font-headline">One-Time Donation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Make a single donation to support our immediate needs. Your gift can help purchase art supplies, seeds for our gardens, or educational materials for a classroom.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Calendar className="w-8 h-8 mb-2 text-primary" />
                <CardTitle className="font-headline">Monthly Giving</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Become a sustaining partner by setting up a recurring monthly donation. Consistent support allows us to plan for the future and ensure the longevity of our programs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

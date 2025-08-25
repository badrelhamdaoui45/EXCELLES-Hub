import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { teamMembers, officialInfo } from '@/lib/data';
import { Sparkles, Users, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AboutPage() {
  return (
    <div className="bg-background">
      <section className="py-16 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-headline">Our Story</h1>
              <div className="max-w-3xl mx-auto mt-6 md:mx-0">
                <p className="text-lg text-muted-foreground">
                  EXCELLES SMART KIDS CAMEROUN was founded on a simple yet powerful idea: that every child in Cameroon deserves the chance to reach their full potential. We believe that by nurturing creativity, preserving cultural heritage, and teaching sustainable life skills, we can empower the next generation of leaders, artists, and innovators. Our journey began in 2020, and with the help of our community and supporters, we continue to grow and make a tangible impact every day.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
                <Image
                    src="https://placehold.co/600x400.png"
                    alt="Our Story placeholder"
                    width={500}
                    height={500}
                    className="object-cover rounded-lg shadow-lg"
                    data-ai-hint="group photo team"
                />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary md:py-24">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-3xl text-center md:text-4xl font-headline">Our Core Values</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Sparkles className="w-12 h-12 text-accent" />
                </div>
                <CardTitle className="font-headline">Empowerment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Providing youth with the tools, knowledge, and confidence to shape their own futures.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Users className="w-12 h-12 text-accent" />
                </div>
                <CardTitle className="font-headline">Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Fostering a sense of belonging and collaboration to build a stronger society.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <ShieldCheck className="w-12 h-12 text-accent" />
                </div>
                <CardTitle className="font-headline">Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Operating with transparency, accountability, and the highest ethical standards.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-3xl text-center md:text-4xl font-headline">Meet the Team</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <Card key={member.name} className="flex flex-col items-center p-6 text-center">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  width={150}
                  height={150}
                  className="object-cover rounded-full"
                  data-ai-hint={member.imageHint}
                />
                <CardHeader className="p-2 pb-0">
                  <CardTitle className="mt-4 font-headline">{member.name}</CardTitle>
                  <p className="font-semibold text-primary">{member.role}</p>
                </CardHeader>
                <CardContent className="p-2">
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary md:py-24">
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-6 text-3xl md:text-4xl font-headline">Our Volunteers</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground">
             Our association is proud to have 3 dedicated volunteers who are the heart of our organization. Their dedication, skills, and passion are the driving force behind our success. We are immensely grateful for their commitment to empowering the youth of Cameroon.
            </p>
          </div>
          <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/volunteer">Join Our Team</Link>
          </Button>
        </div>
      </section>

      <section className="py-16 md:pb-24">
        <div className="container px-4 mx-auto">
           <h2 className="mb-8 text-3xl text-center md:text-4xl font-headline">Official Information</h2>
          <Card className="max-w-2xl p-6 mx-auto">
            <CardContent className="p-0">
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="font-semibold">SIREN:</span>
                  <span className="font-mono text-muted-foreground">{officialInfo.siren}</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-semibold">SIRET:</span>
                  <span className="font-mono text-muted-foreground">{officialInfo.siret}</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-semibold">RNA:</span>
                  <span className="font-mono text-muted-foreground">{officialInfo.rna}</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

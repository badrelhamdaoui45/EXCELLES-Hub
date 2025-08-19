import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Megaphone } from 'lucide-react';
import { ApplyForm } from './_components/apply-form';

export default function VolunteerOpportunitiesPage() {
  return (
    <div className="bg-background">
      <section className="py-16 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-headline">Volunteer Opportunities</h1>
            <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
              Join us and contribute your skills to a great cause. We are currently looking for dedicated volunteers to fill the following role.
            </p>
          </div>
          <div className="grid max-w-6xl gap-12 mx-auto mt-12 md:grid-cols-2">
            <Card>
              <CardHeader>
                 <div className="flex justify-center mb-4">
                  <Megaphone className="w-12 h-12 text-accent" />
                </div>
                <CardTitle className="font-headline text-2xl text-center">
                  Marketing & Communications Volunteer
                </CardTitle>
                 <CardDescription className="text-center">Remote</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Role Description:</h3>
                  <p className="text-muted-foreground">
                    We are seeking a creative and strategic Marketing & Communications Lead to help us grow our reach and impact. This volunteer will be responsible for developing and executing our marketing strategy, managing our social media presence, creating engaging content, and communicating our mission to a wider audience. If you are passionate about making a difference and have a background in marketing, we would love to hear from you.
                  </p>
                </div>
                 <div>
                  <h3 className="font-semibold text-lg mb-2">Responsibilities:</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Develop and implement a comprehensive marketing strategy.</li>
                    <li>Manage and create content for all social media channels.</li>
                    <li>Write and distribute press releases and newsletters.</li>
                    <li>Analyze marketing data and provide reports on campaign performance.</li>
                    <li>Collaborate with the team on campaigns and events.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Qualifications:</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Proven experience in a marketing or communications role.</li>
                    <li>Excellent writing and verbal communication skills.</li>
                    <li>Strong understanding of social media platforms and digital marketing tools.</li>
                    <li>Creative, self-motivated, and able to work independently.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            <div>
              <ApplyForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

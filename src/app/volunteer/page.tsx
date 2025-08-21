import { VolunteerPortal } from "./_components/volunteer-portal";
import { Users, Award, UserCheck, HeartHandshake } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const volunteers = [
  { name: 'Chantal Biya', role: 'Community Outreach Coordinator' },
  { name: 'Roger Milla', role: 'Workshop Facilitator' },
  { name: 'Manu Dibango', role: 'Fundraising Assistant' },
]

export default function VolunteerPage() {
  return (
    <div className="bg-background">
      <section className="py-16 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-headline">Join Our Mission</h1>
            <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
              Become a part of our community of volunteers and make a real difference in the lives of Cameroonian youth.
            </p>
          </div>
          <div className="max-w-4xl mx-auto mt-12">
            <VolunteerPortal />
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary md:py-24">
        <div className="container px-4 mx-auto text-center">
          <Users className="w-12 h-12 mx-auto text-primary" />
          <h2 className="mt-6 text-3xl md:text-4xl font-headline">Our Dedicated Volunteers</h2>
          <div className="max-w-3xl mx-auto mt-4">
            <p className="text-lg text-muted-foreground">
              Our association is proud to have 3 dedicated volunteers who are the heart of our organization. Their dedication, skills, and passion are the driving force behind our success. We are immensely grateful for their commitment to empowering the youth of Cameroon.
            </p>
          </div>
           <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-3">
            {volunteers.map((volunteer) => (
              <Card key={volunteer.name} className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                     <Award className="w-10 h-10 text-accent" />
                  </div>
                  <CardTitle className="font-headline text-xl">{volunteer.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-primary">{volunteer.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

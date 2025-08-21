import { VolunteerPortal } from "./_components/volunteer-portal";
import { Users } from 'lucide-react';

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
        </div>
      </section>
    </div>
  );
}

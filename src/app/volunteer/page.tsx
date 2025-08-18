import { VolunteerPortal } from "./_components/volunteer-portal";

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
    </div>
  );
}

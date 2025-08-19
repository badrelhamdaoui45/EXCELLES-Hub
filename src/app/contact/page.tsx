import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';
import { ContactForm } from './_components/contact-form';

export default function ContactPage() {
  return (
    <div className="bg-background">
      <section className="py-16 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-headline">Get In Touch</h1>
            <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
              We'd love to hear from you. Whether you have a question, a suggestion, or just want to say hello, please reach out.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 mt-16 md:grid-cols-2">
            <div className="p-8 rounded-lg bg-card">
              <h2 className="text-2xl font-headline">Send us a Message</h2>
              <ContactForm />
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="flex items-center gap-3 text-xl font-headline">
                  <MapPin className="w-6 h-6 text-accent" />
                  Our Office
                </h3>
                <address className="mt-2 not-italic text-muted-foreground">
                  100 RUE LAURISTON<br />
                  75116 PARIS, FRANCE
                </address>
              </div>
              <div>
                <h3 className="flex items-center gap-3 text-xl font-headline">
                  <Mail className="w-6 h-6 text-accent" />
                  Email Us
                </h3>
                <a href="mailto:contact@execelles.com" className="text-primary hover:underline">contact@execelles.com</a>
              </div>
              <div>
                <h3 className="flex items-center gap-3 text-xl font-headline">
                  <Phone className="w-6 h-6 text-accent" />
                  Call Us
                </h3>
                <a href="tel:+237123456789" className="text-primary hover:underline">+237 123 456 789</a>
              </div>
              <div className="mt-6 overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1641926882025-a878cafdec01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxN3x8Y2FtZXJvdW4lMjBjaGlsZCUyMHJlYWR8ZW58MHx8fHwxNzU1NTY1NjYxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Children reading"
                  width={600}
                  height={400}
                  className="w-full"
                  data-ai-hint="children reading"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

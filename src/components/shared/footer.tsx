import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Logo } from '../logo';
import { officialInfo } from '@/lib/data';

export function Footer() {
  return (
    <footer className="w-full py-12 text-white bg-primary">
      <div className="container grid grid-cols-1 gap-8 px-4 mx-auto md:grid-cols-4 md:px-6">
        <div className="flex flex-col space-y-4">
          <Logo className="text-white hover:text-white/90" />
          <p className="text-sm text-primary-foreground/80">
            Empowering the Youth of Cameroon through arts, culture, and agriculture.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="text-primary-foreground/80 hover:text-white"><Facebook className="w-5 h-5" /></Link>
            <Link href="#" className="text-primary-foreground/80 hover:text-white"><Twitter className="w-5 h-5" /></Link>
            <Link href="#" className="text-primary-foreground/80 hover:text-white"><Instagram className="w-5 h-5" /></Link>
            <Link href="#" className="text-primary-foreground/80 hover:text-white"><Linkedin className="w-5 h-5" /></Link>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold tracking-wider uppercase font-headline">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/about" className="text-sm text-primary-foreground/80 hover:text-white">About Us</Link></li>
            <li><Link href="/blog" className="text-sm text-primary-foreground/80 hover:text-white">Blog</Link></li>
            <li><Link href="/volunteer" className="text-sm text-primary-foreground/80 hover:text-white">Volunteer</Link></li>
            <li><Link href="/documents" className="text-sm text-primary-foreground/80 hover:text-white">Document Library</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold tracking-wider uppercase font-headline">Contact Us</h3>
          <address className="not-italic text-sm text-primary-foreground/80">
            <p>123 Hope Street, Yaoundé</p>
            <p>Cameroon</p>
            <p className="mt-2">Email: contact@excelles.org</p>
            <p>Phone: +237 123 456 789</p>
          </address>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold tracking-wider uppercase font-headline">Official Info</h3>
          <Link
            href="https://annuaire-entreprises.data.gouv.fr/entreprise/excelles-smart-kids-cameroun-904433190"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm text-primary-foreground/80 hover:text-white hover:underline"
          >
            <div>
              <p>SIREN: {officialInfo.siren}</p>
              <p>SIRET: {officialInfo.siret}</p>
              <p>RNA: {officialInfo.rna}</p>
              <p className="mt-2 text-xs">(View on official directory)</p>
            </div>
          </Link>
        </div>
      </div>
      <div className="container px-4 mx-auto mt-8 text-center text-primary-foreground/60">
        <p className="text-sm">&copy; {new Date().getFullYear()} EXCELLES SMART KIDS CAMEROUN. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

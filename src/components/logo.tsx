import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Sprout } from 'lucide-react';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2 text-2xl font-bold font-logo text-primary hover:text-primary/90 transition-colors tracking-wider", className)}>
      <Sprout className="w-6 h-6" />
      EXECELLES
    </Link>
  );
}

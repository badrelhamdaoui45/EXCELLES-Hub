'use client';

import { useState } from 'react';
import type { Document } from '@/lib/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FileText, Lock, Unlock, Download } from 'lucide-react';

const correctPassword = 'Bad202?!@';

export function DocumentLibrary({ publicDocs, privateDocs }: { publicDocs: Document[], privateDocs: Document[] }) {
  const [password, setPassword] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState('');

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsUnlocked(true);
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  return (
    <div className="space-y-12">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-headline text-2xl">
            <FileText className="text-primary" />
            Public Documents
          </CardTitle>
          <CardDescription>These documents are available for everyone to view and download.</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {publicDocs.map((doc) => (
              <li key={doc.name}>
                <a 
                  href={doc.url} 
                  className="flex items-center justify-between gap-4 p-2 transition-colors rounded-md hover:bg-muted"
                  download
                >
                  <span className='flex items-center gap-2 text-primary hover:underline'>
                    {doc.name}
                  </span>
                  <Download className="w-5 h-5 text-muted-foreground" />
                </a>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-headline text-2xl">
            {isUnlocked ? <Unlock className="text-accent" /> : <Lock className="text-accent" />}
            Private Documents
          </CardTitle>
          <CardDescription>
            {isUnlocked
              ? 'Access to our private documents for volunteers and partners.'
              : 'This section is password protected. Please enter the code to view the documents.'
            }
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isUnlocked ? (
            <ul className="space-y-2">
              {privateDocs.map((doc) => (
                <li key={doc.name}>
                  <a href={doc.url} className="flex items-center gap-2 text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                    {doc.name}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <form onSubmit={handlePasswordSubmit} className="flex flex-col gap-2 sm:flex-row">
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter access code"
                className="flex-grow"
              />
              <Button type="submit" className="bg-accent text-accent-foreground hover:bg-accent/90">Unlock</Button>
            </form>
          )}
          {error && <p className="mt-2 text-sm text-destructive">{error}</p>}
        </CardContent>
      </Card>
    </div>
  );
}

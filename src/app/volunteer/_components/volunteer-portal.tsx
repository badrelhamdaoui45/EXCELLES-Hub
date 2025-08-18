
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { FileText, LogOut, CheckCircle2, ListTodo, Award } from 'lucide-react';
import { volunteerTasks } from '@/lib/data';

const registrationSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Invalid email address.'),
  phone: z.string().min(8, 'Please enter a valid phone number.'),
  skills: z.string().min(10, 'Please tell us about your skills.'),
  motivation: z.string().min(20, 'Please tell us why you want to volunteer.'),
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, 'Password is required.'),
});

const hardcodedCredentials = {
  email: 'contact@execelles.com',
  password: 'Bad202?!@',
  name: 'Valued Volunteer',
  role: 'Community Ambassador'
};

export function VolunteerPortal() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState('');
  const { toast } = useToast();
  
  const tasksToDo = volunteerTasks.filter(task => task.status === 'todo');
  const completedTasks = volunteerTasks.filter(task => task.status === 'completed');

  const registrationForm = useForm<z.infer<typeof registrationSchema>>({
    resolver: zodResolver(registrationSchema),
    defaultValues: { name: '', email: '', phone: '', skills: '', motivation: '' },
  });

  const loginForm = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' },
  });

  function onRegister(values: z.infer<typeof registrationSchema>) {
    console.log(values);
    toast({
      title: 'Application Sent!',
      description: "Thank you for your interest. We'll be in touch soon.",
    });
    registrationForm.reset();
  }

  function onLogin(values: z.infer<typeof loginSchema>) {
    setLoginError('');
    if (values.email === hardcodedCredentials.email && values.password === hardcodedCredentials.password) {
      setIsLoggedIn(true);
    } else {
      setLoginError('Invalid email or password.');
    }
  }
  
  function onLogout() {
    setIsLoggedIn(false);
    loginForm.reset();
  }

  if (isLoggedIn) {
    return (
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-3xl">Welcome, {hardcodedCredentials.name}!</CardTitle>
            <CardDescription>Role: {hardcodedCredentials.role}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Here are some resources for you:</p>
            <ul className="space-y-2">
              <li><a href="#" className="flex items-center gap-2 text-primary hover:underline"><FileText size={16} /> Volunteer Handbook</a></li>
              <li><a href="#" className="flex items-center gap-2 text-primary hover:underline"><FileText size={16} /> Upcoming Events Schedule</a></li>
              <li><a href="#" className="flex items-center gap-2 text-primary hover:underline"><FileText size={16} /> Contact List</a></li>
              <li><a href="/certificate.pdf" className="flex items-center gap-2 text-primary hover:underline" download><Award size={16} /> Certificate of Registration</a></li>
            </ul>
            <Button onClick={onLogout} variant="outline" className="mt-4">
              <LogOut className="mr-2 h-4 w-4"/> Log Out
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 font-headline"><ListTodo className="text-accent"/>Tasks to Do</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {tasksToDo.length > 0 ? (
              tasksToDo.map(task => (
                <div key={task.id} className="p-3 rounded-md bg-background">
                  <h4 className="font-semibold">{task.title}</h4>
                  <p className="text-sm text-muted-foreground">{task.description}</p>
                </div>
              ))
            ) : (
              <p className="text-muted-foreground">No pending tasks. Great job!</p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 font-headline"><CheckCircle2 className="text-primary"/>Completed Tasks</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {completedTasks.length > 0 ? (
              completedTasks.map(task => (
                <div key={task.id} className="p-3 rounded-md bg-background">
                  <h4 className="font-semibold">{task.title}</h4>
                  <p className="text-sm text-muted-foreground">{task.description}</p>
                </div>
              ))
            ) : (
              <p className="text-muted-foreground">No tasks completed yet.</p>
            )}
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <Tabs defaultValue="register" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="register">Become a Volunteer</TabsTrigger>
        <TabsTrigger value="login">Volunteer Login</TabsTrigger>
      </TabsList>
      <TabsContent value="register">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Application Form</CardTitle>
            <CardDescription>Fill out the form below to join our team.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...registrationForm}>
              <form onSubmit={registrationForm.handleSubmit(onRegister)} className="space-y-4">
                <FormField control={registrationForm.control} name="name" render={({ field }) => (<FormItem><FormLabel>Full Name</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>)} />
                <FormField control={registrationForm.control} name="email" render={({ field }) => (<FormItem><FormLabel>Email</FormLabel><FormControl><Input type="email" {...field} /></FormControl><FormMessage /></FormItem>)} />
                <FormField control={registrationForm.control} name="phone" render={({ field }) => (<FormItem><FormLabel>Phone Number</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>)} />
                <FormField control={registrationForm.control} name="skills" render={({ field }) => (<FormItem><FormLabel>Skills / Interests</FormLabel><FormControl><Textarea {...field} /></FormControl><FormMessage /></FormItem>)} />
                <FormField control={registrationForm.control} name="motivation" render={({ field }) => (<FormItem><FormLabel>Motivation</FormLabel><FormControl><Textarea {...field} /></FormControl><FormMessage /></FormItem>)} />
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Apply Now</Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="login">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Login to your Portal</CardTitle>
            <CardDescription>Access your volunteer resources.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...loginForm}>
              <form onSubmit={loginForm.handleSubmit(onLogin)} className="space-y-4">
                <FormField control={loginForm.control} name="email" render={({ field }) => (<FormItem><FormLabel>Email</FormLabel><FormControl><Input type="email" {...field} /></FormControl><FormMessage /></FormItem>)} />
                <FormField control={loginForm.control} name="password" render={({ field }) => (<FormItem><FormLabel>Password</FormLabel><FormControl><Input type="password" {...field} /></FormControl><FormMessage /></FormItem>)} />
                {loginError && <p className="text-sm text-destructive">{loginError}</p>}
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Login</Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}

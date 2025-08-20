
'use client';

import { useState, useEffect } from 'react';
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
import { FileText, LogOut, CheckCircle2, ListTodo, Award, UserCircle, Upload, Wallet, Calendar, DollarSign } from 'lucide-react';
import { volunteerTasks } from '@/lib/data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

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
  email: 'alexgirardot820@gmail.com',
  password: 'Bad202?!@',
  name: 'Alex Girardot',
  role: 'Community Ambassador'
};

export function VolunteerPortal() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [currentDate, setCurrentDate] = useState('');
  const { toast } = useToast();
  
  useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }));
  }, []);
  
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

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
        toast({
          title: 'Photo updated!',
          description: 'Your new profile picture has been saved.',
        });
      };
      reader.readAsDataURL(file);
    }
  };

  if (isLoggedIn) {
    return (
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Avatar className="w-20 h-20">
                  <AvatarImage src={profileImage || undefined} alt="Volunteer" />
                  <AvatarFallback>
                    <UserCircle className="w-20 h-20 text-muted-foreground" />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="font-headline text-3xl">Welcome, {hardcodedCredentials.name}!</CardTitle>
                  <CardDescription>{hardcodedCredentials.email}</CardDescription>
                  <CardDescription>Role: {hardcodedCredentials.role}</CardDescription>
                  <Input type="file" id="photo-upload" className="hidden" accept="image/*" onChange={handleImageUpload} />
                  <Button asChild variant="outline" size="sm" className="mt-2">
                    <label htmlFor="photo-upload" className="cursor-pointer">
                      <Upload className="mr-2 h-4 w-4" />
                      Upload Photo
                    </label>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-semibold">Here are some resources for you:</p>
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
          </div>
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-headline text-2xl">
                   <Wallet className="text-primary" />
                   My Wallet
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 rounded-lg bg-secondary">
                  <p className="text-sm text-muted-foreground">Available Balance</p>
                  <p className="text-3xl font-bold">$550.00</p>
                </div>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>Last Withdrawal: $200.00 on July 15, 2024</p>
                  <p>Today's Date: {currentDate}</p>
                </div>
                 <Button className="w-full bg-green-600 hover:bg-green-700 text-white" disabled>
                    <CheckCircle2 className="mr-2 h-4 w-4" />
                    PayPal Connected
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

import type { BlogPost, TeamMember, Document } from './types';

export const blogPosts: BlogPost[] = [
  {
    slug: 'harvesting-hope',
    title: 'Harvesting Hope: A Season of Growth in Our Community Garden',
    excerpt: 'Discover how our latest agricultural project is empowering local families and providing fresh, nutritious food...',
    content: 'The community garden has been a beacon of hope this season. With the help of our dedicated volunteers, we have cultivated over 500 kilograms of fresh vegetables, which have been distributed to families in need. This project not only addresses food insecurity but also teaches valuable skills in sustainable agriculture to our youth participants. We have seen a remarkable transformation in the community, with more people getting involved and taking pride in their local food source.',
    imageUrl: 'https://images.unsplash.com/photo-1610500796385-3ffc1ae2f046?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxjYWVtcm91biUyMGtpZHMlMjByZWFkaW5nfGVufDB8fHx8MTc1NTU1OTAxMnww&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'community garden harvest',
    author: 'Admin',
    date: 'August 15, 2024',
    category: 'Agriculture',
  },
  {
    slug: 'colors-of-cameroon',
    title: 'The Colors of Cameroon: Our Annual Youth Art Exhibition',
    excerpt: 'Our annual art exhibition was a vibrant success, showcasing the incredible talent of young Cameroonian artists...',
    content: 'The annual youth art exhibition was a spectacular event, filled with color, creativity, and community spirit. Over 100 pieces of art were displayed, ranging from paintings and sculptures to digital media. The event provided a platform for young artists to showcase their work, gain recognition, and even sell some of their pieces. The proceeds from the event will go towards funding our arts program for the next year.',
    imageUrl: 'https://images.unsplash.com/photo-1694286068561-3233c946e9be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxjYW1lcm91biUyMGtpZHMlMjByZWFkaW5nfGVufDB8fHx8MTc1NTU1OTAzOHww&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'youth art exhibition',
    author: 'Admin',
    date: 'July 22, 2024',
    category: 'Arts',
  },
  {
    slug: 'stories-of-our-elders',
    title: 'Stories of Our Elders: Preserving Oral Histories',
    excerpt: 'This month, we launched a new initiative to record and preserve the oral histories of our community elders...',
    content: 'Our new cultural preservation project aims to bridge the gap between generations. Young volunteers are interviewing community elders, recording their life stories, traditions, and folklore. These stories are being transcribed and archived, creating a valuable resource for future generations. This initiative not only preserves our cultural heritage but also fosters deep, meaningful connections within the community.',
    imageUrl: 'https://placehold.co/800x600.png',
    imageHint: 'elder telling story',
    author: 'Admin',
    date: 'June 05, 2024',
    category: 'Culture',
  },
  {
    slug: 'sustainable-futures',
    title: 'Building Sustainable Futures Through Modern Farming',
    excerpt: 'We are introducing new, sustainable farming techniques to our agricultural program, including drip irrigation...',
    content: 'Sustainability is at the core of our mission. This quarter, we have invested in drip irrigation and organic composting systems for our community farm. These new technologies will help us conserve water, improve soil health, and increase crop yields. We are excited to train our youth in these modern techniques, preparing them for a future in sustainable agriculture.',
    imageUrl: 'https://placehold.co/800x600.png',
    imageHint: 'drip irrigation system',
    author: 'Admin',
    date: 'May 18, 2024',
    category: 'Agriculture',
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: 'Dr. Marie-Claire Kouassi',
    role: 'Founder & President',
    bio: 'With a PhD in Education and a passion for youth development, Dr. Kouassi founded EXCELLES to create lasting change in her home country.',
    imageUrl: 'https://placehold.co/400x400.png',
    imageHint: 'professional woman smiling',
  },
  {
    name: 'Jean-Pierre Nkomo',
    role: 'Director of Operations',
    bio: 'Jean-Pierre manages the day-to-day activities of our programs, ensuring everything runs smoothly and efficiently.',
    imageUrl: 'https://placehold.co/400x400.png',
    imageHint: 'professional man portrait',
  },
  {
    name: 'Aissatou Diallo',
    role: 'Head of Cultural Programs',
    bio: 'Aissatou is a historian and curator dedicated to preserving and celebrating the rich cultural heritage of Cameroon.',
    imageUrl: 'https://placehold.co/400x400.png',
    imageHint: 'woman in traditional dress',
  },
];

export const documents: Document[] = [
  { name: 'Annual Report 2023', url: '#', type: 'public' },
  { name: 'Our Mission Statement', url: '#', type: 'public' },
  { name: 'Volunteer Handbook', url: '#', type: 'private' },
  { name: 'Financial Statements 2023', url: '#', type: 'private' },
  { name: 'Board Meeting Minutes', url: '#', type: 'private' },
];

export const officialInfo = {
  siren: '123 456 789',
  siret: '123 456 789 00010',
  rna: 'W123456789',
};

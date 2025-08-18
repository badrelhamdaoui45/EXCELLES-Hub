export type NavLink = {
  href: string;
  label: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  imageHint: string;
  author: string;
  date: string;
  category: 'Arts' | 'Culture' | 'Agriculture';
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  imageHint: string;
};

export type Document = {
  name: string;
  url: string;
  type: 'public' | 'private';
};

export type VolunteerTask = {
  id: number;
  title: string;
  description: string;
  status: 'todo' | 'completed';
};

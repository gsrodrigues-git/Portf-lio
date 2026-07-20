export type NavItem = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  deploy: string;
  featured?: boolean;
};

export type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

export type Stat = {
  label: string;
  value: number;
  suffix?: string;
};

export type Skill = {
  name: string;
  category: string;
};

export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  tags: string[];
};

export interface NavItem {
  label: string
  href: string
  description?: string
  icon?: string
  external?: boolean
  children?: NavItem[]
}

export interface ClientLogo {
  name: string
  src: string
}

export interface Testimonial {
  quote: string
  author: string
  company: string
  logo: string
}

export interface ImpactNumber {
  value: number
  suffix: string
  label: string
  prefix: string
  mono: boolean
}

export interface TimelineItem {
  year: number
  title: string
  description: string
}

export interface Solution {
  id: string
  title: string
  description: string
  href: string
  icon: string
  color: string
  tags: string[]
  gradient: string
  featured?: boolean
}

export interface FourPLTab {
  id: string
  title: string
  description: string
  stat: {
    value: string
    label: string
  }
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
  coverImage: string
  author: {
    name: string
    avatar: string
  }
  readTime: number
}

export interface CaseStudy {
  slug: string
  title: string
  client: string
  logo: string
  coverImage: string
  excerpt: string
  tags: string[]
  results: {
    value: string
    label: string
  }[]
}

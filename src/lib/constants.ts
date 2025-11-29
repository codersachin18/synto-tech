import { Facebook, Twitter, Linkedin, Instagram, Github, Mail, Phone, MapPin, Code, Megaphone, Paintbrush, LineChart, Server, Smartphone, Globe, Puzzle, Users, Search, Filter, Star, MessageCircle, BarChart2, Target, Award, ImageIcon, Sparkles, Rocket, Palette } from 'lucide-react';
import type { Icon } from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Apps', href: '/apps' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
];

export const SOCIAL_LINKS: { name: string; href: string; icon: Icon }[] = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'GitHub', href: '#', icon: Github },
];

export const CONTACT_DETAILS: { label: string; value: string; icon: Icon }[] = [
  { label: 'Email', value: 'syntotech@gmail.com', icon: Mail },
  { label: 'Address', value: '123 Innovation Drive, Tech City, 12345', icon: MapPin },
];

export const COMPANY_NAME = "Synto Tech";

export interface Service {
    id: string;
    name: string;
    description: string;
    href: string;
    icon: Icon;
}

export interface ServiceCategory {
    name: string;
    icon: Icon;
    services: Service[];
}

export const SERVICES_DATA: ServiceCategory[] = [
    {
        name: "Development",
        icon: Code,
        services: [
            { id: "software-development", name: "Software Development", description: "Bespoke software solutions to meet your business needs.", href: "/services/software-development", icon: Server },
            { id: "app-development", name: "App Development", description: "Innovative mobile apps for iOS and Android.", href: "/services/app-development", icon: Smartphone },
            { id: "website-development", name: "Website Development", description: "Modern, responsive websites for a strong online presence.", href: "/services/website-development", icon: Globe },
            { id: "custom-solutions", name: "Custom Solutions", description: "Tailored technology solutions for unique challenges.", href: "/services/custom-solutions", icon: Puzzle },
        ],
    },
    {
        name: "Digital Marketing",
        icon: LineChart,
        services: [
            { id: "social-media-marketing", name: "Social Media Marketing", description: "Engage your audience and grow your brand on social platforms.", href: "/services/social-media-marketing", icon: Users },
            { id: "seo", name: "SEO", description: "Improve your search engine ranking and drive organic traffic.", href: "/services/seo", icon: Search },
            { id: "lead-generation", name: "Lead Generation", description: "Generate high-quality leads to grow your business.", href: "/services/lead-generation", icon: Filter },
            { id: "google-business-setup", name: "Google Business Setup", description: "Optimize your Google My Business profile for local search.", href: "/services/google-business-setup", icon: Star },
            { id: "social-media-handling", name: "Social Media Handling", description: "Professional management of your social media accounts.", href: "/services/social-media-handling", icon: MessageCircle },
        ],
    },
    {
        name: "Advertising",
        icon: Megaphone,
        services: [
            { id: "google-meta-ads", name: "Google/Meta Ads", description: "Targeted ad campaigns on Google and Meta platforms.", href: "/services/google-meta-ads", icon: BarChart2 },
            { id: "campaign-strategies", name: "Campaign Strategies", description: "Strategic planning for effective advertising campaigns.", href: "/services/campaign-strategies", icon: Target },
            { id: "ppc-management", name: "PPC Management", description: "Expert management of pay-per-click advertising accounts.", href: "/services/ppc-management", icon: Rocket },
            { id: "ad-creative-design", name: "Ad Creative Design", description: "Compelling visuals and copy for high-performing ads.", href: "/services/ad-creative-design", icon: Palette },
        ],
    },
    {
        name: "Graphic Designing",
        icon: Paintbrush,
        services: [
            { id: "logo-design", name: "Logo Design", description: "Memorable logos that represent your brand.", href: "/services/logo-design", icon: Award },
            { id: "social-media-post-design", name: "Social Media Post Design", description: "Eye-catching graphics for your social media posts.", href: "/services/social-media-post-design", icon: ImageIcon },
            { id: "custom-designs", name: "Custom Designs", description: "Unique designs for your specific needs.", href: "/services/custom-designs", icon: Sparkles },
        ],
    },
];

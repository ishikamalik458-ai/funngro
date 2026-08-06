import {
  Briefcase,
  Wallet,
  FolderKanban,
  TrendingUp,
  Code2,
  Palette,
  PenTool,
  Megaphone,
  Video,
  Share2,
  Search,
  Building2,
  Presentation,
  SearchCheck as SeoIcon,
  MessagesSquare,
  Crown,
  Users2,
  Sparkles,
  DollarSign,
  Zap,
  Clock,
  Home,
  GraduationCap,
  BookOpenCheck,
  FileBadge,
  ShieldCheck,
  Camera,
  BarChart3,
  Headset,
  ClipboardList,
} from "lucide-react";
import type {
  FeatureCard,
  TimelineStep,
  SkillItem,
  Testimonial,
  FaqItem,
  StatItem,
} from "@/types";

export const whyChooseFeatures: FeatureCard[] = [
  {
    icon: Briefcase,
    title: "Real company projects",
    description:
      "Work on actual business challenges instead of practice assignments — the kind of work that goes straight into a portfolio.",
  },
  {
    icon: Wallet,
    title: "Earn while learning",
    description:
      "Get paid for the projects you complete, so the skills you're building come with a paycheck attached.",
  },
  {
    icon: FolderKanban,
    title: "Build your portfolio",
    description:
      "Walk away from every project with proof of work you can show colleges, internships, and future employers.",
  },
  {
    icon: TrendingUp,
    title: "Career growth",
    description:
      "Gain real-world experience that strengthens resumes and college applications years ahead of your peers.",
  },
];

export const howItWorksSteps: TimelineStep[] = [
  {
    step: 1,
    title: "Create your account",
    description: "Sign up in minutes and tell us what you're studying and what you're curious about.",
  },
  {
    step: 2,
    title: "Build your profile",
    description: "Showcase your skills, interests, and availability so companies know what you bring.",
  },
  {
    step: 3,
    title: "Apply for projects",
    description: "Browse live briefs from real companies and apply to the ones that match your skills.",
  },
  {
    step: 4,
    title: "Complete projects and get paid",
    description: "Deliver the work, get feedback from professionals, and receive payment directly.",
  },
];

export const skillsYouCanLearn: SkillItem[] = [
  { icon: Code2, label: "Website Development" },
  { icon: Palette, label: "Graphic Design" },
  { icon: PenTool, label: "Content Writing" },
  { icon: Megaphone, label: "Digital Marketing" },
  { icon: Video, label: "Video Editing" },
  { icon: Share2, label: "Social Media Management" },
  { icon: Search, label: "Research" },
  { icon: Building2, label: "Business Development" },
  { icon: Presentation, label: "Presentation Design" },
  { icon: SeoIcon, label: "SEO" },
  { icon: MessagesSquare, label: "Communication" },
  { icon: Crown, label: "Leadership" },
];

export const whyCompaniesFeatures: FeatureCard[] = [
  {
    icon: Users2,
    title: "Access talented teenagers",
    description: "Tap into a growing pool of driven, digitally fluent young talent ready to contribute from day one.",
  },
  {
    icon: DollarSign,
    title: "Affordable project execution",
    description: "Get quality work completed on student-friendly rates without compromising on outcomes.",
  },
  {
    icon: Sparkles,
    title: "Fresh creative ideas",
    description: "Gen Z perspective brings new energy and unfiltered thinking to your brand and campaigns.",
  },
  {
    icon: Zap,
    title: "Fast turnaround",
    description: "Motivated students move quickly — most project briefs see first drafts within days, not weeks.",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Ananya R.",
    role: "Grade 12, Aspiring Designer",
    quote:
      "Working through Funngro helped me build my portfolio before college. I had five real projects to show in my applications.",
    initials: "AR",
  },
  {
    name: "Kabir S.",
    role: "Grade 11, Marketing Track",
    quote:
      "I earned my first income while learning valuable professional skills — and my parents were honestly more excited than I was.",
    initials: "KS",
  },
  {
    name: "Meera T.",
    role: "Grade 10, Content Creator",
    quote:
      "The projects improved my confidence and communication skills. Talking to real clients is nothing like a classroom presentation.",
    initials: "MT",
  },
];

export const stats: StatItem[] = [
  { value: 1000, suffix: "+", label: "Companies onboard" },
  { value: 25000, suffix: "+", label: "Teenagers empowered" },
  { value: 18, suffix: "+", label: "Skill categories" },
  { value: 40000, suffix: "+", label: "Real paid projects" },
];

export const homeFaqs: FaqItem[] = [
  {
    question: "What is Funngro?",
    answer:
      "Funngro is a platform that connects teenagers with real companies so they can work on paid projects, develop professional skills, and build a portfolio — all while still in school.",
  },
  {
    question: "Who can join?",
    answer:
      "Any student aged 13–19 with an interest in building skills like design, writing, marketing, development, or research can create a profile and start applying to projects.",
  },
  {
    question: "How do students get paid?",
    answer:
      "Once a project is reviewed and approved by the hiring company, payment is released directly to the student's linked account, usually within a few business days.",
  },
  {
    question: "Is there any registration fee?",
    answer:
      "No. Creating a Funngro profile and applying to projects is completely free for students — always.",
  },
  {
    question: "What kind of projects are available?",
    answer:
      "Projects span web development, graphic design, content writing, digital marketing, video editing, research, social media, and more, ranging from a few hours to several weeks.",
  },
  {
    question: "How do companies hire students?",
    answer:
      "Companies post a project brief, review applications and portfolios from interested students, and select the best fit based on skills and availability.",
  },
];

export const teenFaqs: FaqItem[] = [
  {
    question: "How old should I be to join?",
    answer: "Funngro is built for students aged 13–19 who want to start gaining real professional experience.",
  },
  {
    question: "Can beginners join?",
    answer:
      "Yes. Many projects are designed for students who are just starting out, with mentorship built into the process.",
  },
  {
    question: "How are payments made?",
    answer: "Payments are released once your work is reviewed and approved, sent directly to your linked account.",
  },
  {
    question: "How long are projects?",
    answer: "Project length varies — some take a few hours, others run over several weeks, so you can find a fit for your schedule.",
  },
  {
    question: "Can I work while studying?",
    answer: "Absolutely. Every project is flexible and remote, designed to fit around your school schedule, not compete with it.",
  },
  {
    question: "Do I need previous experience?",
    answer: "No prior experience is required for most entry-level projects — just curiosity and a willingness to learn.",
  },
];

export const teenWhyJoin: FeatureCard[] = [
  { icon: DollarSign, title: "Earn money", description: "Get paid for real work, not just praise for a school project." },
  { icon: Clock, title: "Flexible working hours", description: "Work around your classes, exams, and everything else on your plate." },
  { icon: Home, title: "Remote opportunities", description: "Everything happens online — no commute, no dress code, just your laptop." },
  { icon: GraduationCap, title: "Professional experience", description: "Collaborate directly with real companies and real mentors." },
  { icon: BookOpenCheck, title: "Skill development", description: "Pick up in-demand skills that your school curriculum won't teach you." },
  { icon: FolderKanban, title: "Portfolio building", description: "Finish every project with something concrete to show for it." },
];

export const projectCategories: { icon: typeof Code2; label: string }[] = [
  { icon: Code2, label: "Website Design" },
  { icon: Palette, label: "UI/UX Design" },
  { icon: Megaphone, label: "Digital Marketing" },
  { icon: SeoIcon, label: "SEO" },
  { icon: PenTool, label: "Graphic Design" },
  { icon: Video, label: "Video Editing" },
  { icon: FileBadge, label: "Content Writing" },
  { icon: PenTool, label: "Copywriting" },
  { icon: Search, label: "Research" },
  { icon: Share2, label: "Social Media" },
  { icon: BarChart3, label: "Business Analysis" },
  { icon: ClipboardList, label: "Data Entry" },
  { icon: Presentation, label: "Presentation Design" },
  { icon: Camera, label: "Photography" },
  { icon: ShieldCheck, label: "Branding" },
  { icon: Headset, label: "Customer Support" },
];

export const studentBenefits: string[] = [
  "Work from anywhere",
  "Flexible schedules",
  "Professional mentorship",
  "Build confidence",
  "Improve communication",
  "Strengthen resume",
  "Gain industry exposure",
  "Networking opportunities",
];

export const applicationProcess: TimelineStep[] = [
  { step: 1, title: "Sign up", description: "Create your free Funngro account in under two minutes." },
  { step: 2, title: "Complete your profile", description: "Add your school, interests, and availability." },
  { step: 3, title: "Showcase skills", description: "Upload samples of your work or start from a guided template." },
  { step: 4, title: "Apply to projects", description: "Browse open briefs and apply to the ones that fit you." },
  { step: 5, title: "Complete work", description: "Collaborate with the company and deliver your project." },
  { step: 6, title: "Receive payment", description: "Get paid directly once your work is approved." },
];

export const successTimeline: { week: string; title: string }[] = [
  { week: "Week 1", title: "Create profile" },
  { week: "Week 2", title: "Apply" },
  { week: "Week 3", title: "Get selected" },
  { week: "Week 4", title: "Deliver work" },
  { week: "Week 5", title: "Receive payment" },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/for-teens", label: "For Teens" },
  { href: "/companies", label: "Companies" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

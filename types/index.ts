import type { LucideIcon } from "lucide-react";

export interface FeatureCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface TimelineStep {
  step: number;
  title: string;
  description: string;
}

export interface SkillItem {
  icon: LucideIcon;
  label: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  initials: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

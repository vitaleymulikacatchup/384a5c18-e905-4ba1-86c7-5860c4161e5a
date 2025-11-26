"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardFour from '@/components/sections/testimonial/TestimonialCardFour';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, Brain, CheckCircle, Cloud, Code, Headphones, Linkedin, Mail, Shield, TrendingUp, Users, Zap, Twitter } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="small"
      sizing="small"
      background="grid"
      cardStyle="glass-flat"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="solid"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="TechVision"
          navItems={[
            { name: "Home", id: "home" },
            { name: "Services", id: "services" },
            { name: "About", id: "about" },
            { name: "Team", id: "team" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Get Started",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogo
          logoText="TechVision"
          description="India's leading IT solutions provider delivering enterprise-grade technology services to businesses worldwide"
          buttons={[
            { text: "Explore Services", href: "services" },
            { text: "Schedule Demo", href: "contact" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764167417709-4aamp15s.jpg"
          imageAlt="Modern technology office workspace"
          showDimOverlay={true}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardTwo
          title="Our Services"
          description="Comprehensive IT solutions tailored to drive your business growth and digital transformation"
          tag="Tech Services"
          tagIcon={Zap}
          features={[
            {
              title: "Cloud Solutions",
              description: "Secure, scalable cloud infrastructure and migration services for modern enterprises",
              icon: Cloud
            },
            {
              title: "Cybersecurity",
              description: "Enterprise-grade security solutions protecting your critical business assets",
              icon: Shield
            },
            {
              title: "AI & Analytics",
              description: "Machine learning and data analytics driving intelligent business decisions",
              icon: Brain
            },
            {
              title: "DevOps",
              description: "Streamlined deployment and operations for continuous delivery excellence",
              icon: Zap
            },
            {
              title: "Web Development",
              description: "Custom web applications built with latest technologies and best practices",
              icon: Code
            },
            {
              title: "Support & Maintenance",
              description: "24/7 technical support and system maintenance for uninterrupted operations",
              icon: Headphones
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Our Impact"
          description="Delivering measurable results to businesses across India and globally"
          tag="Achievements"
          metrics={[
            {
              id: "1",
              value: "500",
              title: "Projects",
              description: "Successfully completed enterprise solutions",
              icon: CheckCircle
            },
            {
              id: "2",
              value: "100",
              title: "Clients",
              description: "Trusted by leading organizations worldwide",
              icon: Users
            },
            {
              id: "3",
              value: "50",
              title: "Experts",
              description: "Dedicated technical professionals on our team",
              icon: Award
            },
            {
              id: "4",
              value: "99.9",
              title: "Uptime",
              description: "Consistent system reliability and performance",
              icon: TrendingUp
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="scale-rotate"
          textboxLayout="default"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Team"
          description="Experienced IT professionals committed to your success"
          tag="Leadership"
          members={[
            {
              id: "1",
              name: "Rajesh Kumar",
              role: "Founder & CEO",
              description: "20+ years in enterprise IT solutions and digital transformation",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764167425143-ssi6ip0f.jpg",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Twitter, url: "https://twitter.com" }
              ]
            },
            {
              id: "2",
              name: "Priya Sharma",
              role: "CTO",
              description: "Cloud architect and full-stack technology leader with global experience",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764167426527-mmmx6rfb.jpg",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" }
              ]
            },
            {
              id: "3",
              name: "Amit Patel",
              role: "VP Engineering",
              description: "Leading engineering excellence and innovation across all projects",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764167428268-j2rn1vuf.jpg",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" }
              ]
            },
            {
              id: "4",
              name: "Neha Gupta",
              role: "Head of Strategy",
              description: "Driving client success and digital transformation initiatives",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764167429857-3fuivq9f.jpg",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" }
              ]
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="opacity"
          textboxLayout="default"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFour
          title="What Clients Say"
          description="Trusted by leading enterprises for delivering exceptional IT solutions"
          tag="Reviews"
          testimonials={[
            {
              id: "1",
              name: "Vikram Singh",
              role: "CIO",
              company: "Global Finance Corp",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764167431901-ufcurqga.jpg"
            },
            {
              id: "2",
              name: "Ananya Desai",
              role: "VP Technology",
              company: "ECommerce India",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764167433212-0j6pljh8.jpg"
            },
            {
              id: "3",
              name: "Rohan Verma",
              role: "Head of IT",
              company: "Manufacturing Plus",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764167435113-g3xku3t1.jpg"
            },
            {
              id: "4",
              name: "Kavya Nair",
              role: "Founder",
              company: "HealthTech Startup",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764167436880-rxyfs1o2.jpg"
            }
          ]}
          textboxLayout="default"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Find answers to common questions about our services and support"
          tag="Help"
          faqs={[
            {
              id: "1",
              title: "What services does TechVision offer?",
              content: "We provide comprehensive IT solutions including cloud services, cybersecurity, AI & analytics, DevOps, custom web development, and 24/7 technical support tailored to your business needs."
            },
            {
              id: "2",
              title: "Do you provide enterprise support?",
              content: "Yes, we offer enterprise-grade support with 24/7 availability, dedicated support teams, SLA guarantees, and proactive monitoring to ensure your systems run smoothly."
            },
            {
              id: "3",
              title: "How do you ensure data security?",
              content: "We implement multi-layered security protocols including encryption, access controls, regular security audits, compliance certifications (ISO 27001, SOC 2), and threat monitoring."
            },
            {
              id: "4",
              title: "What is your average project timeline?",
              content: "Project timelines vary based on complexity and scope. We provide detailed timelines during the consultation phase, typically ranging from weeks to months for enterprise solutions."
            },
            {
              id: "5",
              title: "Can you help with legacy system migration?",
              content: "Absolutely. We specialize in secure migration of legacy systems to modern cloud platforms with zero downtime, ensuring data integrity and business continuity."
            },
            {
              id: "6",
              title: "Do you offer training and knowledge transfer?",
              content: "Yes, comprehensive training and knowledge transfer programs are included in our engagements to ensure your teams can effectively manage and maintain implemented solutions."
            }
          ]}
          animationType="smooth"
          textboxLayout="default"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get In Touch"
          title="Ready to Transform Your Business?"
          description="Contact us today to discuss how TechVision can help you achieve your IT goals and digital transformation objectives"
          tagIcon={Mail}
          inputPlaceholder="Enter your email address"
          buttonText="Send Message"
          termsText="We respect your privacy. Unsubscribe at any time."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="TechVision"
          copyrightText="© 2025 TechVision. All rights reserved."
          columns={[
            {
              title: "Solutions",
              items: [
                { label: "Cloud Services", href: "services" },
                { label: "Cybersecurity", href: "services" },
                { label: "DevOps", href: "services" },
                { label: "AI & Analytics", href: "services" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Team", href: "team" },
                { label: "Careers", href: "#" },
                { label: "Blog", href: "#" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Help Center", href: "faq" },
                { label: "Contact Us", href: "contact" },
                { label: "Documentation", href: "#" },
                { label: "Status Page", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
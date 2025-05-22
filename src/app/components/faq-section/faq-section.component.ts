import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from "@angular/animations"
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-faq-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq-section.component.html',
  styleUrl: './faq-section.component.scss',
  animations: [
    trigger("expandCollapse", [
      state("collapsed", style({ height: "0", opacity: 0, overflow: "hidden" })),
      state("expanded", style({ height: "*", opacity: 1 })),
      transition("collapsed <=> expanded", animate("300ms ease")),
    ]),
    trigger("rotateIcon", [
      state("collapsed", style({ transform: "rotate(0)" })),
      state("expanded", style({ transform: "rotate(45deg)" })),
      transition("collapsed <=> expanded", animate("300ms ease")),
    ]),
    trigger("fadeIn", [
      transition(":enter", [
        style({ opacity: 0, transform: "translateY(20px)" }),
        animate("600ms ease", style({ opacity: 1, transform: "translateY(0)" })),
      ]),
    ]),
  ],
})
export class FaqSectionComponent {
 faqs = [
    {
      id: 1,
      question: "How much does it cost?",
      answer:
        "Our pricing starts at $99/month for our basic package. We offer flexible plans that can be customized to your specific needs. All plans include our core services with options to add specialized features as your business grows.",
      isOpen: false,
    },
    {
      id: 2,
      question: "Why are you so affordable?",
      answer:
        "We've optimized our processes and leverage technology to deliver high-quality services at scale. By focusing on efficiency and using a subscription model, we can offer premium creative services at a fraction of traditional agency costs.",
      isOpen: false,
    },
    {
      id: 3,
      question: "Where is our team located?",
      answer:
        "Our team is globally distributed with creative professionals across North America, Europe, and Asia. This allows us to provide 24/7 service and diverse creative perspectives. Our headquarters is located in New York City.",
      isOpen: false,
    },
    {
      id: 4,
      question: "How do I get started?",
      answer:
        "Getting started is simple! Schedule a free strategy call with our team, and we'll walk you through our onboarding process. We'll assess your needs, recommend the right package, and have you up and running within 48 hours.",
      isOpen: false,
    },
    {
      id: 5,
      question: "What happens after I sign up?",
      answer:
        "After signing up, you'll be assigned a dedicated account manager who will guide you through our onboarding process. We'll collect your brand assets, understand your goals, and develop a tailored strategy. You'll start receiving your first deliverables within 3-5 business days.",
      isOpen: false,
    },
    {
      id: 6,
      question: "How will I communicate with your team?",
      answer:
        "We use a centralized communication platform where you can message your team, provide feedback, and track progress. You'll have regular check-ins with your account manager, and we're always available via email or phone for urgent matters.",
      isOpen: false,
    },
    {
      id: 7,
      question: "What happens if I don't like what you create?",
      answer:
        "Your satisfaction is our priority. If you're not happy with any deliverable, we offer unlimited revisions until you're completely satisfied. We work closely with you to understand your feedback and make necessary adjustments.",
      isOpen: false,
    },
    {
      id: 8,
      question: "What is your cancellation policy?",
      answer:
        "We offer flexible month-to-month contracts with no long-term commitment required. You can cancel your subscription at any time with 30 days' notice. There are no cancellation fees or hidden charges.",
      isOpen: false,
    },
  ]

  testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Marketing Director",
      company: "TechStart Inc.",
      quote:
        "Working with this team has completely transformed our social media presence. The strategic approach and creative content have helped us connect with our audience in ways we never thought possible.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CEO",
      company: "GrowthLabs",
      quote:
        "The content strategy they developed helped us increase our engagement by 200% in just three months. Their team is responsive, creative, and truly understands our brand voice.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Brand Manager",
      company: "Elevate Retail",
      quote:
        "The quality of work for the price is unmatched. We've been able to scale our content across multiple platforms without breaking our budget. Highly recommended!",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  ]

  activeTestimonial = 0

  toggleFaq(faqId: number): void {
    this.faqs = this.faqs.map((faq) => {
      if (faq.id === faqId) {
        return { ...faq, isOpen: !faq.isOpen }
      }
      return faq
    })
  }

  isFaqOpen(faqId: number): boolean {
    return this.faqs.find((faq) => faq.id === faqId)?.isOpen || false
  }

  nextTestimonial(): void {
    this.activeTestimonial = (this.activeTestimonial + 1) % this.testimonials.length
  }

  prevTestimonial(): void {
    this.activeTestimonial = (this.activeTestimonial - 1 + this.testimonials.length) % this.testimonials.length
  }

  setTestimonial(index: number): void {
    this.activeTestimonial = index
  }
}

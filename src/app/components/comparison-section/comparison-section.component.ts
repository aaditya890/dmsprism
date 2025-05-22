import { Component } from '@angular/core';

import { trigger, state, style, animate, transition, query, stagger } from "@angular/animations"
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-comparison-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comparison-section.component.html',
  styleUrl: './comparison-section.component.scss',
})
export class ComparisonSectionComponent {
  pulseStates = {
    before: false,
    after: false,
  }

  beforePoints = [
    { icon: "x-circle", text: "Unpredictable, high-cost agencies" },
    { icon: "x-circle", text: "Unreliable freelancers and poor communication" },
    { icon: "x-circle", text: "Inconsistent quality and missed deadlines" },
    { icon: "x-circle", text: "Unmanageable workloads and stress" },
    { icon: "x-circle", text: "Not enough time to focus on your business" },
  ]

  afterPoints = [
    { icon: "check-circle", text: "Premium, on-brand content creation" },
    { icon: "check-circle", text: "Affordable, fixed monthly pricing" },
    { icon: "check-circle", text: "Fast, reliable turnaround times" },
    { icon: "check-circle", text: "Fully managed marketing services" },
    { icon: "check-circle", text: "More time to focus on growing your business" },
  ]

  testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Marketing Director",
      company: "TechStart Inc.",
      quote: "Since switching to this service, we've saved over $5,000 per month while getting better quality content.",
      metric: "45%",
      metricLabel: "cost reduction",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CEO",
      company: "GrowthLabs",
      quote: "The consistency and quality have transformed our brand presence across all platforms.",
      metric: "3x",
      metricLabel: "engagement increase",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Brand Manager",
      company: "Elevate Retail",
      quote: "I've reclaimed 15 hours per week that I used to spend managing freelancers.",
      metric: "60+",
      metricLabel: "hours saved monthly",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  ]

  activeTestimonial = 0

  constructor() {}

  ngOnInit(): void {
    // Start pulse animations on a timer
    this.startPulseAnimations()
  }

  startPulseAnimations(): void {
    setInterval(() => {
      this.pulseStates.before = true
      setTimeout(() => {
        this.pulseStates.before = false
      }, 800)
    }, 5000)

    setInterval(() => {
      this.pulseStates.after = true
      setTimeout(() => {
        this.pulseStates.after = false
      }, 800)
    }, 5000)
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

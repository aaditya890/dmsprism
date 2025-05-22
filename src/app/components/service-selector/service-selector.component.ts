import { animate, style, transition } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-service-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-selector.component.html',
  styleUrl: './service-selector.component.scss',
  
})
export class ServiceSelectorComponent {
  isVideoModalOpen = false
  videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" // Replace with your actual video URL

  testimonials = [
    {
      name: "John Doe",
      initials: "JD",
      title: "Marketing Director",
      message:
        "The service selection process was incredibly smooth. We were able to customize exactly what we needed for our campaign.",
    },
    {
      name: "Alice Smith",
      initials: "AS",
      title: "CEO, TechStart",
      message:
        "The Plus plan was perfect for our growing startup. The ability to add specific services as needed saved us money.",
    },
    {
      name: "Robert Johnson",
      initials: "RJ",
      title: "Marketing Manager",
      message:
        "The interface is intuitive and the service selection process couldn't be easier. Highly recommend for any business.",
    },
    {
      name: "Emily Davis",
      initials: "ED",
      title: "Product Owner",
      message: "We've seen a 40% increase in engagement since implementing their social media management services.",
    },
  ]

  testimonials2 = [
    {
      name: "Michael Brown",
      initials: "MB",
      title: "CTO, InnovateTech",
      message:
        "Their analytics tools provide insights we never had access to before. Game-changing for our decision making.",
    },
    {
      name: "Sarah Wilson",
      initials: "SW",
      title: "Digital Strategist",
      message:
        "The content creation service has transformed our brand voice. Our audience engagement has never been higher.",
    },
    {
      name: "David Lee",
      initials: "DL",
      title: "E-commerce Director",
      message: "The SEO optimization package delivered results within weeks. Our organic traffic is up by 65%.",
    },
    {
      name: "Jennifer Taylor",
      initials: "JT",
      title: "Small Business Owner",
      message:
        "As a small business, the Standard plan gives us enterprise-level marketing without the enterprise-level price tag.",
    },
  ]

  constructor() {}

  ngOnInit(): void {}

  openVideoModal(): void {
    this.isVideoModalOpen = true
    document.body.classList.add("overflow-hidden") // Prevent scrolling when modal is open
  }

  closeVideoModal(): void {
    this.isVideoModalOpen = false
    document.body.classList.remove("overflow-hidden")
  }
}

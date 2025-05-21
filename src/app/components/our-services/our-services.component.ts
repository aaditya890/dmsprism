import { Component } from '@angular/core';

@Component({
  selector: 'app-our-services',
  standalone: true,
  imports: [],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.scss'
})
export class OurServicesComponent {
services = [
    {
      title: "Content Creation",
      description: "Professional content creation tailored to your brand voice and audience needs.",
      icon: "edit",
    },
    {
      title: "Social Media Management",
      description: "Strategic planning and execution of your social media presence across platforms.",
      icon: "share-2",
    },
    {
      title: "Brand Strategy",
      description: "Comprehensive brand strategy development to position your business for success.",
      icon: "target",
    },
    {
      title: "Video Production",
      description: "High-quality video content creation from concept to final delivery.",
      icon: "video",
    },
  ]
}

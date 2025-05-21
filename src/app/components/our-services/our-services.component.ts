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
      title: "Social media management",
      description:
        "Strategic planning, content creation, and community management across all major social platforms to grow your brand's presence.",
      icon: "share-2",
      category: "Marketing",
    },
    {
      title: "Unlimited graphics design",
      description:
        "Subscription-based design service providing unlimited graphic design requests with quick turnaround times for all your visual needs.",
      icon: "image",
      category: "Design",
    },
    {
      title: "Unlimited video on demand",
      description:
        "Professional video production services with unlimited revisions, from social media shorts to promotional videos and animations.",
      icon: "video",
      category: "Content",
    },
    {
      title: "SEO",
      description:
        "Comprehensive SEO strategies to improve your website's visibility in search engines and drive organic traffic to your business.",
      icon: "search",
      category: "Marketing",
    },
    {
      title: "Link building",
      description:
        "Strategic acquisition of high-quality backlinks to boost your website's authority and improve search engine rankings.",
      icon: "link",
      category: "SEO",
    },
    {
      title: "Guest posting",
      description:
        "High-quality content creation and placement on relevant industry websites to build authority, increase visibility, and drive referral traffic.",
      icon: "file-text",
      category: "Content",
    },
    {
      title: "Guest posting outreach",
      description:
        "Strategic outreach to relevant websites and blogs to secure guest posting opportunities that align with your brand and industry.",
      icon: "mail",
      category: "Outreach",
    },
    {
      title: "Email marketing",
      description:
        "Strategic email campaigns to nurture leads, engage customers, and drive conversions with personalized content and automation.",
      icon: "mail",
      category: "Marketing",
    },
    {
      title: "Website & App development",
      description:
        "Custom web & app design and development that combines stunning visuals with seamless functionality to create an exceptional user experience.",
      icon: "monitor",
      category: "Development",
    },
    // {
    //   title: "App Development",
    //   description:
    //     "Native and cross-platform mobile application development that delivers seamless user experiences across all devices.",
    //   icon: "smartphone",
    //   category: "Development",
    // },
  ]

  serviceCategories = ["All Services", "Marketing", "Design", "Content", "SEO", "Development", "Outreach"]
  activeCategoryIndex = 0

  setActiveCategory(index: any) {
    this.activeCategoryIndex = index
  }

  shouldShowService(title: string): boolean {
    if (this.activeCategoryIndex === 0) {
      return true // Show all services when "All Services" is selected
    }

    const service = this.services.find((s) => s.title.toLowerCase() === title.toLowerCase())
    return service ? service.category === this.serviceCategories[this.activeCategoryIndex] : false
  }
}

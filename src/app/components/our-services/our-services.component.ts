
import { Component, ElementRef, ViewChild, AfterViewInit, HostListener } from "@angular/core"

@Component({
  selector: 'app-our-services',
  standalone: true,
  imports: [],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.scss'
})
export class OurServicesComponent {
   @ViewChild("scrollContainer") scrollContainer!: ElementRef<HTMLDivElement>

  services:any[] = [
    {
      title: "Social Media Management",
      description: "Strategic planning, content creation, and community management across all major social platforms.",
      icon: "share-2",
      color: "blue",
      tags: ["Strategy", "Content"],
    },
    {
      title: "Unlimited Graphics Design",
      description:
        "Subscription-based design service providing unlimited graphic design requests with quick turnaround times.",
      icon: "image",
      color: "purple",
      tags: ["Branding", "Social"],
    },
    {
      title: "Unlimited Video on Demand",
      description:
        "Professional video production services with unlimited revisions, from social media shorts to promotions.",
      icon: "video",
      color: "red",
      tags: ["Social", "Animation"],
    },
    {
      title: "Search Engine Optimization",
      description: "Comprehensive SEO strategies to improve your website's visibility in search engines.",
      icon: "search",
      color: "green",
      tags: ["On-page", "Technical"],
    },
    {
      title: "Link Building",
      description: "Strategic acquisition of high-quality backlinks to boost your website's authority.",
      icon: "link",
      color: "yellow",
      tags: ["Authority", "Quality"],
    },
    {
      title: "Guest Posting",
      description: "High-quality content creation and placement on relevant industry websites.",
      icon: "file-text",
      color: "orange",
      tags: ["Content", "Outreach"],
    },
    {
      title: "Email Marketing",
      description: "Strategic email campaigns to nurture leads, engage customers, and drive conversions.",
      icon: "mail",
      color: "indigo",
      tags: ["Campaigns", "Automation"],
    },
    {
      title: "Website Development",
      description: "Custom website design and development that combines stunning visuals with seamless functionality.",
      icon: "monitor",
      color: "cyan",
      tags: ["UI/UX", "Frontend"],
    },
    {
      title: "App Development",
      description: "Native and cross-platform mobile application development that delivers seamless user experiences.",
      icon: "smartphone",
      color: "teal",
      tags: ["iOS", "Android"],
    },
    {
      title: "Guest Posting Outreach",
      description: "Strategic outreach to relevant websites and blogs to secure guest posting opportunities.",
      icon: "message-circle",
      color: "pink",
      tags: ["Research", "Outreach"],
    },
  ]

  // For horizontal scrolling
  scrollGroups = [0, 1, 2] // We'll have 3 groups of cards
  currentScrollGroup = 0
  isScrolledToStart = true
  isScrolledToEnd = false
  cardWidth = 300 // Width of each card in pixels
  cardGap = 24 // Gap between cards in pixels

  ngAfterViewInit() {
    // Initialize scroll position
    this.onScroll()

    // Add smooth scrolling class
    this.scrollContainer.nativeElement.classList.add("scroll-smooth")
  }

  scrollToGroup(index: number) {
    if (!this.scrollContainer) return

    const container = this.scrollContainer.nativeElement
    const cardsPerGroup = Math.floor(container.clientWidth / (this.cardWidth + this.cardGap))
    const scrollAmount = index * cardsPerGroup * (this.cardWidth + this.cardGap)

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    })

    this.currentScrollGroup = index
  }

  scrollLeft() {
    if (!this.scrollContainer) return

    const container = this.scrollContainer.nativeElement
    const cardsPerGroup = Math.floor(container.clientWidth / (this.cardWidth + this.cardGap))
    const scrollAmount = container.scrollLeft - cardsPerGroup * (this.cardWidth + this.cardGap)

    container.scrollTo({
      left: Math.max(0, scrollAmount),
      behavior: "smooth",
    })
  }

  scrollRight() {
    if (!this.scrollContainer) return

    const container = this.scrollContainer.nativeElement
    const cardsPerGroup = Math.floor(container.clientWidth / (this.cardWidth + this.cardGap))
    const scrollAmount = container.scrollLeft + cardsPerGroup * (this.cardWidth + this.cardGap)

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    })
  }

  onScroll() {
    if (!this.scrollContainer) return

    const container = this.scrollContainer.nativeElement
    const scrollLeft = container.scrollLeft
    const maxScroll = container.scrollWidth - container.clientWidth

    // Update scroll indicators
    this.isScrolledToStart = scrollLeft <= 10
    this.isScrolledToEnd = maxScroll - scrollLeft <= 10

    // Update current group
    const cardsPerGroup = Math.floor(container.clientWidth / (this.cardWidth + this.cardGap))
    this.currentScrollGroup = Math.floor(scrollLeft / (cardsPerGroup * (this.cardWidth + this.cardGap)))
  }

  @HostListener("window:resize")
  onResize() {
    // Recalculate on window resize
    this.onScroll()
  }

  getServiceIconPath(icon: string): string {
    // This function would return the path to the icon SVG
    return `assets/icons/${icon}.svg`
  }

  getTagClasses(service: string, tag: string): string {
    // This function would return the appropriate classes for tags
    return `tag-${service.toLowerCase()}-${tag.toLowerCase()}`
  }

  serviceCategories = ["All Services", "Marketing", "Design", "Content", "SEO", "Development", "Outreach"]
  activeCategoryIndex = 0

  setActiveCategory(index: number) {
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

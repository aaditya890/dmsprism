import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
   portfolioItems = [
    { id: 1, title: "Brand Identity", image: "/placeholder.svg?height=300&width=300", category: "Branding" },
    { id: 2, title: "Social Campaign", image: "/placeholder.svg?height=300&width=300", category: "Marketing" },
    { id: 3, title: "Website Redesign", image: "/placeholder.svg?height=300&width=300", category: "Web Design" },
    { id: 4, title: "Product Launch", image: "/placeholder.svg?height=300&width=300", category: "Marketing" },
    { id: 5, title: "Content Strategy", image: "/placeholder.svg?height=300&width=300", category: "Strategy" },
    { id: 6, title: "Video Production", image: "/placeholder.svg?height=300&width=300", category: "Video" },
  ]

  categories = ["All", "Branding", "Marketing", "Web Design", "Strategy", "Video"]
  selectedCategory = "All"

  setCategory(category: string) {
    this.selectedCategory = category
  }

  get filteredItems() {
    if (this.selectedCategory === "All") {
      return this.portfolioItems
    }
    return this.portfolioItems.filter((item) => item.category === this.selectedCategory)
  }
}

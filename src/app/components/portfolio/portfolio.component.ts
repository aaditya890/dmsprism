import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
   portfolioItems = [
    { id: 1, title: "Brand Identity Redesign", image: "https://dummyimage.com/820x320/8ae6eb/06060d", category: "Branding" },
    { id: 2, title: "Social Media Campaign", image: "https://dummyimage.com/350x270/85acd9/06060d", category: "Marketing" },
    { id: 3, title: "E-Commerce Website", image: "https://dummyimage.com/480x975/000/fff", category: "Web Design" },
    { id: 4, title: "Product Launch Strategy", image: "https://dummyimage.com/350x270/85acd9/06060d", category: "Marketing" },
    { id: 5, title: "Content Marketing Plan", image: "https://dummyimage.com/350x270/85acd9/06060d", category: "Strategy" },
    { id: 6, title: "Brand Video Production", image: "https://dummyimage.com/820x320/8ae6eb/06060d", category: "Video" },
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

  getItemDescription(id: number): string {
    const descriptions = {
      1: "Complete brand identity redesign including logo, color palette, typography, and brand guidelines.",
      2: "Multi-platform social media campaign that increased engagement by 45% and followers by 12K.",
      3: "Custom e-commerce website with seamless checkout process and 3x conversion rate improvement.",
      4: "Comprehensive product launch strategy that generated 200+ media mentions and 5,000 first-day sales.",
      5: "Strategic content plan that established the client as an industry thought leader within 6 months.",
      6: "Award-winning brand video that captured the company's mission and values with cinematic quality.",
    }

    return (
      descriptions[id as keyof typeof descriptions] ||
      "Innovative project that delivered exceptional results for our client."
    )
  }}

import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export class PricingComponent {
   billingCycle: "monthly" | "annually" = "monthly"

  setBillingCycle(cycle: "monthly" | "annually") {
    this.billingCycle = cycle
  }

  // Calculate monthly price with annual discount
  getAnnualPrice(monthlyPrice: number): number {
    return Math.round(monthlyPrice * 0.8) // 20% discount
  }

  // Calculate annual savings
  getAnnualSavings(monthlyPrice: number): number {
    return monthlyPrice * 12 - this.getAnnualPrice(monthlyPrice) * 12
  }
}

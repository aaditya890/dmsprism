import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { HeroComponent } from './components/hero/hero.component';
import { FooterComponent } from './components/footer/footer.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { PortfolioComponent } from "./components/portfolio/portfolio.component";
import { PricingComponent } from "./components/pricing/pricing.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, HeroComponent, OurServicesComponent, FooterComponent, PortfolioComponent, PricingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dmsprism';

  toggleTheme(): void {
    document.documentElement.classList.toggle('dark');
  }
}

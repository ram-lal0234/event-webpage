import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  categories = ['All', 'Corporate', 'Weddings', 'Social', 'Virtual'];
  selectedCategory: string = 'All';

  portfolioItems = [
    {
      title: 'Tech Summit 2023',
      category: 'Corporate',
      image: 'assets/images/portfolio/tech-summit.jpg',
      description: 'Annual technology conference with 1000+ attendees',
      client: 'TechCorp Inc.',
      date: 'June 2023'
    },
    {
      title: 'Garden Wedding',
      category: 'Weddings',
      image: 'assets/images/portfolio/garden-wedding.jpg',
      description: 'Elegant outdoor wedding ceremony and reception',
      client: 'Sarah & James',
      date: 'May 2023'
    },
    {
      title: 'Virtual Awards Night',
      category: 'Virtual',
      image: 'assets/images/portfolio/virtual-awards.jpg',
      description: 'Online awards ceremony with live entertainment',
      client: 'Global Media Group',
      date: 'April 2023'
    },
    {
      title: 'Charity Gala',
      category: 'Social',
      image: 'assets/images/portfolio/charity-gala.jpg',
      description: 'Annual fundraising event with silent auction',
      client: 'Hope Foundation',
      date: 'March 2023'
    }
  ];

  filterByCategory(category: string) {
    this.selectedCategory = category;
  }

  get filteredItems() {
    return this.selectedCategory === 'All'
      ? this.portfolioItems
      : this.portfolioItems.filter(item => item.category === this.selectedCategory);
  }
}
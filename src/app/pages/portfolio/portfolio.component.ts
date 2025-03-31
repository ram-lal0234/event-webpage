import { Component, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements AfterViewInit {
  @ViewChildren('animateOnScroll') animateElements!: QueryList<ElementRef>;

  categories = [
    { name: 'All', icon: 'fas fa-th-large' },
    { name: 'Corporate', icon: 'fas fa-building' },
    { name: 'Weddings', icon: 'fas fa-heart' },
    { name: 'Social', icon: 'fas fa-glass-cheers' },
    { name: 'Virtual', icon: 'fas fa-laptop' }
  ];
  selectedCategory: string = 'All';

  portfolioItems = [
    {
      title: 'Tech Summit 2023',
      category: 'Corporate',
      image: 'assets/images/portfolio/tech-summit.jpg',
      description: 'Annual technology conference with 1000+ attendees',
      client: 'TechCorp Inc.',
      date: 'June 2023',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'Garden Wedding',
      category: 'Weddings',
      image: 'assets/images/portfolio/garden-wedding.jpg',
      description: 'Elegant outdoor wedding ceremony and reception',
      client: 'Sarah & James',
      date: 'May 2023',
      color: 'from-pink-500 to-rose-600'
    },
    {
      title: 'Virtual Awards Night',
      category: 'Virtual',
      image: 'assets/images/portfolio/virtual-awards.jpg',
      description: 'Online awards ceremony with live entertainment',
      client: 'Global Media Group',
      date: 'April 2023',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'Charity Gala',
      category: 'Social',
      image: 'assets/images/portfolio/charity-gala.jpg',
      description: 'Annual fundraising event with silent auction',
      client: 'Hope Foundation',
      date: 'March 2023',
      color: 'from-purple-500 to-indigo-600'
    },
    {
      title: 'Product Launch Event',
      category: 'Corporate',
      image: 'assets/images/portfolio/product-launch.jpg',
      description: 'Innovative product launch with interactive demos',
      client: 'InnovateTech',
      date: 'February 2023',
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Beach Wedding',
      category: 'Weddings',
      image: 'assets/images/portfolio/beach-wedding.jpg',
      description: 'Tropical destination wedding celebration',
      client: 'Emma & Michael',
      date: 'January 2023',
      color: 'from-yellow-500 to-amber-600'
    }
  ];

  stats = [
    {
      value: '200+',
      label: 'Events Completed',
      icon: 'fas fa-calendar-check',
      color: 'from-blue-400 to-indigo-500'
    },
    {
      value: '50+',
      label: 'Corporate Clients',
      icon: 'fas fa-building',
      color: 'from-purple-400 to-indigo-500'
    },
    {
      value: '100+',
      label: 'Wedding Ceremonies',
      icon: 'fas fa-heart',
      color: 'from-pink-400 to-rose-500'
    },
    {
      value: '20+',
      label: 'Awards Won',
      icon: 'fas fa-trophy',
      color: 'from-yellow-400 to-amber-500'
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

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            if (entry.target.classList.contains('fade-up')) {
              entry.target.classList.add('translate-y-0');
            } else if (entry.target.classList.contains('fade-left')) {
              entry.target.classList.add('translate-x-0');
            } else if (entry.target.classList.contains('fade-right')) {
              entry.target.classList.add('translate-x-0');
            } else if (entry.target.classList.contains('scale-in')) {
              entry.target.classList.add('scale-100');
            } else if (entry.target.classList.contains('bounce-in')) {
              entry.target.classList.add('scale-100');
            }
          }
        });
      },
      {
        threshold: 0.1
      }
    );

    this.animateElements.forEach(element => {
      observer.observe(element.nativeElement);
    });
  }
}
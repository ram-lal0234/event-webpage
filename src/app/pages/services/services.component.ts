import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services = [
    {
      title: 'Corporate Events',
      icon: 'fas fa-building',
      description: 'Transform your business gatherings into memorable experiences.',
      features: [
        'Conferences & Seminars',
        'Team Building Events',
        'Product Launches',
        'Award Ceremonies',
        'Corporate Galas',
        'Business Meetings'
      ],
      image: 'assets/images/services/corporate.jpg'
    },
    {
      title: 'Wedding Planning',
      icon: 'fas fa-heart',
      description: 'Creating your perfect day with meticulous attention to detail.',
      features: [
        'Full Wedding Planning',
        'Destination Weddings',
        'Wedding Day Coordination',
        'Vendor Management',
        'Decor & Design',
        'Budget Management'
      ],
      image: 'assets/images/services/wedding.jpg'
    },
    {
      title: 'Social Events',
      icon: 'fas fa-glass-cheers',
      description: `Celebrate life's special moments with style and elegance.`,
      features: [
        'Birthday Parties',
        'Anniversary Celebrations',
        'Graduation Parties',
        'Holiday Events',
        'Private Dinners',
        'Themed Parties'
      ],
      image: 'assets/images/services/social.jpg'
    },
    {
      title: 'Virtual Events',
      icon: 'fas fa-laptop',
      description: 'Engaging online experiences for the digital age.',
      features: [
        'Virtual Conferences',
        'Hybrid Events',
        'Webinars',
        'Online Team Building',
        'Virtual Award Shows',
        'Digital Product Launches'
      ],
      image: 'assets/images/services/virtual.jpg'
    }
  ];
}
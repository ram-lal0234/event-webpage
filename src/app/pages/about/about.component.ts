import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  offices = [
    {
      city: 'San Francisco',
      address: '123 Market Street, Suite 100',
      phone: '+1 (415) 555-0123',
      email: 'sf@eventplanner.com',
      image: 'assets/images/offices/san-francisco.jpg',
      timezone: 'PST (UTC-8)'
    },
    {
      city: 'New York',
      address: '456 Madison Avenue, 15th Floor',
      phone: '+1 (212) 555-0123',
      email: 'nyc@eventplanner.com',
      image: 'assets/images/offices/new-york.jpg',
      timezone: 'EST (UTC-5)'
    },
    {
      city: 'London',
      address: '789 Oxford Street, Westminster',
      phone: '+44 20 7123 4567',
      email: 'london@eventplanner.com',
      image: 'assets/images/offices/london.jpg',
      timezone: 'GMT (UTC+0)'
    },
    {
      city: 'Singapore',
      address: '321 Marina Bay Sands',
      phone: '+65 6789 0123',
      email: 'singapore@eventplanner.com',
      image: 'assets/images/offices/singapore.jpg',
      timezone: 'SGT (UTC+8)'
    }
  ];

  milestones = [
    {
      year: '2010',
      title: 'Company Founded',
      description: 'Started with a small team of passionate event planners'
    },
    {
      year: '2015',
      title: 'International Expansion',
      description: 'Opened offices in London and Singapore'
    },
    {
      year: '2018',
      title: 'Digital Innovation',
      description: 'Launched virtual event planning services'
    },
    {
      year: '2023',
      title: 'Industry Leader',
      description: 'Recognized as top event planning company globally'
    }
  ];
}
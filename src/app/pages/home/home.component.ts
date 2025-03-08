import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AvatarComponent } from '../../components/avatar/avatar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink , AvatarComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  services = [
    {
      icon: 'fas fa-building',
      title: 'Corporate Events',
      description: 'From conferences to team building, we create professional corporate experiences.'
    },
    {
      icon: 'fas fa-heart',
      title: 'Weddings',
      description: 'Making your special day perfect with our comprehensive wedding planning services.'
    },
    {
      icon: 'fas fa-glass-cheers',
      title: 'Social Events',
      description: 'Birthdays, anniversaries, and celebrations that leave lasting memories.'
    }
  ];

  stats = [
    { value: '500+', label: 'Events Completed' },
    { value: '50K+', label: 'Happy Guests' },
    { value: '15+', label: 'Years Experience' },
    { value: '100%', label: 'Client Satisfaction' }
  ];

  testimonials = [
    {
      name: 'Emily Thompson',
      company: 'Tech Corp',
      quote: 'The team went above and beyond to make our corporate event a huge success.',
      image: ''
    },
    {
      name: 'James Wilson',
      company: 'Happy Couple',
      quote: 'Our wedding day was absolutely perfect thanks to their meticulous planning.',
      image: ''
    },
    {
      name: 'Sarah Chen',
      company: 'Marketing Agency',
      quote: 'Professional, creative, and detail-oriented. They exceeded our expectations.',
      image: ''
    }
  ];

  clientLogos = [
    'https://source.unsplash.com/random/200x100?logo1',
    'https://source.unsplash.com/random/200x100?logo2',
    'https://source.unsplash.com/random/200x100?logo3',
    'https://source.unsplash.com/random/200x100?logo4',
    'https://source.unsplash.com/random/200x100?logo5',
    'https://source.unsplash.com/random/200x100?logo6'
  ];
}
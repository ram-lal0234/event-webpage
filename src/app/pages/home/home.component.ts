import { Component, OnInit, ElementRef, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AvatarComponent } from '../../components/avatar/avatar.component';
import { trigger, transition, style, animate, query, stagger, keyframes } from '@angular/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, AvatarComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.5s ease-in', style({ opacity: 1 }))
      ])
    ]),
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('staggerFadeIn', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [
            animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ]),
    trigger('scaleIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.95)' }),
        animate('0.5s ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ]),
    trigger('float', [
      transition(':enter', [
        animate('3s ease-in-out infinite', keyframes([
          style({ transform: 'translateY(0)' }),
          style({ transform: 'translateY(-10px)' }),
          style({ transform: 'translateY(0)' })
        ]))
      ])
    ]),
    trigger('slideInLeft', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-50px)' }),
        animate('0.6s ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ]),
    trigger('slideInRight', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(50px)' }),
        animate('0.6s ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ]),
    trigger('bounceIn', [
      transition(':enter', [
        animate('0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)', keyframes([
          style({ opacity: 0, transform: 'scale(0.3)' }),
          style({ opacity: 0.9, transform: 'scale(1.1)' }),
          style({ opacity: 1, transform: 'scale(1)' })
        ]))
      ])
    ]),
    trigger('rotateIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'rotate(-180deg) scale(0)' }),
        animate('0.8s ease-out', style({ opacity: 1, transform: 'rotate(0) scale(1)' }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChildren('animateOnScroll') animateElements!: QueryList<ElementRef>;

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

  ngOnInit() {
    // Additional initialization logic if needed
  }

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          // Add random animation class for variety
          const animations = ['fade-up', 'fade-left', 'fade-right', 'scale-in', 'bounce-in'];
          const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
          entry.target.classList.add(randomAnimation);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    this.animateElements.forEach(element => {
      observer.observe(element.nativeElement);
    });
  }
}
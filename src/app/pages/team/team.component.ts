import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from '../../components/avatar/avatar.component';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule, AvatarComponent],
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {
  teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Lead Event Planner',
      image: '',
      bio: 'With over 15 years of experience in event planning, Sarah leads our team with creativity and precision.',
      expertise: ['Strategic Planning', 'Luxury Events', 'Team Leadership'],
      social: {
        linkedin: 'https://linkedin.com/sarah',
        twitter: 'https://twitter.com/sarah',
        instagram: 'https://instagram.com/sarah'
      }
    },
    {
      name: 'Michael Chen',
      role: 'Creative Director',
      image: '',
      bio: 'Michael brings events to life with his innovative design concepts and attention to detail.',
      expertise: ['Event Design', 'Visual Storytelling', 'Brand Integration'],
      social: {
        linkedin: 'https://linkedin.com/michael',
        instagram: 'https://instagram.com/michael'
      }
    },
    {
      name: 'Emma Rodriguez',
      role: 'Wedding Specialist',
      image: '',
      bio: 'Specializing in destination weddings, Emma creates unforgettable moments for couples.',
      expertise: ['Wedding Planning', 'Destination Events', 'Vendor Relations'],
      social: {
        instagram: 'https://instagram.com/emma',
        pinterest: 'https://pinterest.com/emma'
      }
    },
    {
      name: 'David Park',
      role: 'Technical Director',
      image: '',
      bio: 'David ensures flawless execution of virtual and hybrid events with cutting-edge technology.',
      expertise: ['Virtual Events', 'AV Production', 'Technical Planning'],
      social: {
        linkedin: 'https://linkedin.com/david',
        twitter: 'https://twitter.com/david'
      }
    }
  ];
}
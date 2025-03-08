import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section class="section">
      <div class="container max-w-4xl">
        <h1 class="text-4xl font-bold text-center mb-12">Contact Us</h1>
        
        <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-6">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input type="text" id="name" formControlName="name"
                   class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500">
            <div *ngIf="contactForm.get('name')?.touched && contactForm.get('name')?.invalid"
                 class="text-red-600 text-sm mt-1">
              Please enter your name
            </div>
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" id="email" formControlName="email"
                   class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500">
            <div *ngIf="contactForm.get('email')?.touched && contactForm.get('email')?.invalid"
                 class="text-red-600 text-sm mt-1">
              Please enter a valid email address
            </div>
          </div>

          <div>
            <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea id="message" formControlName="message" rows="5"
                      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"></textarea>
            <div *ngIf="contactForm.get('message')?.touched && contactForm.get('message')?.invalid"
                 class="text-red-600 text-sm mt-1">
              Please enter your message
            </div>
          </div>

          <button type="submit" 
                  [disabled]="contactForm.invalid || isSubmitting"
                  class="btn btn-primary w-full">
            {{ isSubmitting ? 'Sending...' : 'Send Message' }}
          </button>
        </form>
      </div>
    </section>
  `
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      // Here you would typically make an API call to submit the form
      console.log(this.contactForm.value);
      setTimeout(() => {
        this.isSubmitting = false;
        this.contactForm.reset();
      }, 1500);
    }
  }
}
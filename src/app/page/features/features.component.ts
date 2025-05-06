import { Component } from '@angular/core';
import { CardsFeaturesComponent } from "../../components/cards-features/cards-features.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features',
  imports: [CommonModule, CardsFeaturesComponent],
  templateUrl: './features.component.html',
})

export class FeaturesComponent {
  features = [
    {
      title: 'Need a help in Claim?',
      description: 'Go to this step by step guideline process on how to certify for your weekly benefits:',
      link: '#',
      linkText: 'See our guideline',
    },
    {
      title: 'Secure your account',
      description: 'Follow our best practices to protect your account from suspicious activity.',
      link: '#',
      linkText: 'Security tips',
    },
    {
      title: 'Manage your subscription',
      description: 'Easily update or cancel your subscription plan from your dashboard.',
      link: '#',
      linkText: 'Manage plan',
    },
    {
      title: 'Understand billing',
      description: 'Learn how we calculate charges and when your billing cycle resets.',
      link: '#',
      linkText: 'Billing details',
    },
    {
      title: 'Get support fast',
      description: 'Reach out to our 24/7 support team whenever you need assistance.',
      link: '#',
      linkText: 'Contact support',
    },
    {
      title: 'Update profile info',
      description: 'Change your email, password, or personal info at any time.',
      link: '#',
      linkText: 'Edit profile',
    },
  ];
}


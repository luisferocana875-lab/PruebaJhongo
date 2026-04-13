import { Component } from '@angular/core';
import { MinimalistHero } from '../components/ui/minimalist-hero';

@Component({
  selector: 'app-minimalist-hero-demo',
  standalone: true,
  imports: [MinimalistHero],
  template: `
    <app-minimalist-hero
      logoText="mnmlst."
      [navLinks]="navLinks"
      mainText="Simplicity is the ultimate sophistication. Experience the art of minimalism through our curated collection of essential pieces."
      readMoreLink="#"
      imageSrc="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800"
      imageAlt="A portrait of a person in a black turtleneck, in profile."
      [overlayText]="overlayText"
      [socialLinks]="socialLinks"
      locationText="Arlington Heights, IL"
    ></app-minimalist-hero>
  `
})
export class MinimalistHeroDemo {
  navLinks = [
    { label: 'HOME', href: '#' },
    { label: 'PRODUCT', href: '#' },
    { label: 'STORE', href: '#' },
    { label: 'ABOUT US', href: '#' },
  ];

  overlayText = {
    part1: 'less is',
    part2: 'more.',
  };

  socialLinks = [
    { icon: 'Facebook', href: '#' },
    { icon: 'Instagram', href: '#' },
    { icon: 'Twitter', href: '#' },
    { icon: 'Linkedin', href: '#' },
  ];
}

import { Component, input, ElementRef, viewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { cn } from '../../lib/utils';
import { animate } from 'motion';

@Component({
  selector: 'app-minimalist-hero',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './minimalist-hero.html',
  styleUrl: './minimalist-hero.css'
})
export class MinimalistHero implements AfterViewInit {
  logoText = input.required<string>();
  navLinks = input.required<{ label: string; href: string }[]>();
  mainText = input.required<string>();
  readMoreLink = input.required<string>();
  imageSrc = input.required<string>();
  imageAlt = input.required<string>();
  overlayText = input.required<{ part1: string; part2: string }>();
  socialLinks = input.required<{ icon: string; href: string }[]>();
  locationText = input.required<string>();
  className = input<string>('');

  header = viewChild<ElementRef>('header');
  leftText = viewChild<ElementRef>('leftText');
  centerImage = viewChild<ElementRef>('centerImage');
  rightText = viewChild<ElementRef>('rightText');
  footer = viewChild<ElementRef>('footer');

  ngAfterViewInit() {
    // Animations using motion vanilla
    const headerEl = this.header()?.nativeElement;
    if (headerEl) {
      animate(headerEl, { opacity: [0, 1], x: [-20, 0] }, { duration: 0.5 });
    }

    const leftTextEl = this.leftText()?.nativeElement;
    if (leftTextEl) {
      animate(leftTextEl, { opacity: [0, 1], y: [20, 0] }, { duration: 0.6, delay: 1 });
    }

    const centerImageEl = this.centerImage()?.nativeElement;
    if (centerImageEl) {
      const circle = centerImageEl.querySelector('.circle');
      const img = centerImageEl.querySelector('img');
      if (circle) animate(circle, { scale: [0.8, 1], opacity: [0, 1] }, { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 });
      if (img) animate(img, { opacity: [0, 1], y: [50, 0] }, { duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 });
    }

    const rightTextEl = this.rightText()?.nativeElement;
    if (rightTextEl) {
      animate(rightTextEl, { opacity: [0, 1], y: [20, 0] }, { duration: 0.6, delay: 1.2 });
    }

    const footerEl = this.footer()?.nativeElement;
    if (footerEl) {
      animate(footerEl, { opacity: [0, 1], y: [20, 0] }, { duration: 0.5, delay: 1.2 });
    }
  }

  get containerClass() {
    return cn(
      'relative flex h-screen w-full flex-col items-center justify-between overflow-hidden bg-background p-8 font-sans md:p-12',
      this.className()
    );
  }

  handleImageError(event: Event) {
    const target = event.target as HTMLImageElement;
    target.src = `https://placehold.co/400x600/eab308/ffffff?text=Image+Not+Found`;
  }
}

import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MinimalistHeroDemo} from './demo/minimalist-hero-demo';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  imports: [RouterOutlet, MinimalistHeroDemo],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}

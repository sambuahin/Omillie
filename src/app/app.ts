import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FrontBanner } from "./front-banner/front-banner";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FrontBanner],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('A Life Well Lived');
}

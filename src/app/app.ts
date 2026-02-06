import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FrontBanner } from "./front-banner/front-banner";
import { Navigation } from "./navigation/navigation";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navigation, FrontBanner],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('A Life Well Lived');
}

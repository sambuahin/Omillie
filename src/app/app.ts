import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FrontBanner } from "./front-banner/front-banner";
import { Navigation } from "./navigation/navigation";
import { OrderOfService } from "./order-of-service/order-of-service";
import { Tributes } from "./tributes/tributes";
import { Hymns } from "./hymns/hymns";
import { Gallery } from "./gallery/gallery";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navigation, FrontBanner, OrderOfService, Tributes, Hymns, Gallery],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('A Life Well Lived');
}

import { Routes } from '@angular/router';
import { FrontBanner } from './front-banner/front-banner';
import { Hymns } from './hymns/hymns';
import { Gallery } from './gallery/gallery';
import { OrderOfService } from './order-of-service/order-of-service';
import { Tributes } from './tributes/tributes';

export const routes: Routes = [
	{ path: '', component: FrontBanner },
	{ path: 'hymns', component: Hymns },
	{ path: 'gallery', component: Gallery },
	{ path: 'order-of-service', component: OrderOfService },
	{ path: 'tributes', component: Tributes },
];

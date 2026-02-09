import { Routes } from '@angular/router';
import { Tributes } from './tributes';
import { HusbandTribute } from './husband-tribute/husband-tribute';
import { ChildrenTribute } from './children-tribute/children-tribute';
import { EMSChurchTribute } from './ems-church-tribute/ems-church-tribute';
import { GrandchildrenTribute } from './grandchildren-tribute/grandchildren-tribute';
import { DCWomensTribute } from './dc-womens-tribute/dc-womens-tribute';
import { InlawsTribute } from './inlaws-tribute/inlaws-tribute';
import { SingingBandTribute } from './singing-band-tribute/singing-band-tribute';
import { SistersTribute } from './sisters-tribute/sisters-tribute';
import { WomensFellowshipTribute } from './womens-fellowship-tribute/womens-fellowship-tribute';

export const tributesRoutes: Routes = [
    { path: '', component: Tributes },
    { path: 'husband', component: HusbandTribute },
    { path: 'childrens', component: ChildrenTribute },
    { path: 'ems-church', component: EMSChurchTribute },
    { path: 'grnd-children', component: GrandchildrenTribute },
    { path: 'dc-womens', component: DCWomensTribute },
    { path: 'in-laws', component: InlawsTribute },
    { path: 'singing-band', component: SingingBandTribute },
    { path: 'sister-tribute', component: SistersTribute },
    { path: 'womens-fellowship-tribute', component: WomensFellowshipTribute }
];

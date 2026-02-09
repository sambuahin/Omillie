import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HusbandTribute } from "./husband-tribute/husband-tribute";
import { ChildrenTribute } from "./children-tribute/children-tribute";
import { InlawsTribute } from "./inlaws-tribute/inlaws-tribute";
import { SistersTribute } from "./sisters-tribute/sisters-tribute";
import { WomensFellowshipTribute } from "./womens-fellowship-tribute/womens-fellowship-tribute";
import { EMSChurchTribute } from "./ems-church-tribute/ems-church-tribute";
import { DCWomensTribute } from "./dc-womens-tribute/dc-womens-tribute";
import { SingingBandTribute } from "./singing-band-tribute/singing-band-tribute";

@Component({
  selector: 'app-tributes',
  imports: [
    RouterModule,
    HusbandTribute,
    ChildrenTribute,
    InlawsTribute,
    SistersTribute,
    WomensFellowshipTribute,
    EMSChurchTribute,
    DCWomensTribute,
    SingingBandTribute
  ],
  templateUrl: './tributes.html',
  styleUrl: './tributes.css',
})
export class Tributes {

}

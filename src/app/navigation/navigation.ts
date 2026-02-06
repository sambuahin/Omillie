import { Component } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  imports: [RouterModule],
  templateUrl: './navigation.html',
  styleUrl: './navigation.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class Navigation {
 openNav() {
  const element = document.getElementById("mySidenav");
  if (element) {
    element.style.width = "250px";
  }
}

/* Set the width of the side navigation to 0 */
 closeNav() {
  const element = document.getElementById("mySidenav");
  if (element) {
    element.style.width = "0";
  }
}
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  feature: string = "Recipes";
  onLinkClicked(linkText) {
    if(linkText === 'Recipes') {
      this.feature = linkText;
    }  else {
      this.feature = 'List';
    }
  }
  title = 'Recipe-Tutorial';
}

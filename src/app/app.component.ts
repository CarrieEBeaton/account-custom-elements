import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'account-custom-elements';

  addExternal() {
    const script = document.createElement('script');
    script.src = 'assets/account-sub-project.bundle.js';
    document.body.appendChild(script);

    // add web component
    const tile = document.createElement('account-container');
    tile.setAttribute('a', '100');

    const content = document.getElementById('content');
    content.appendChild(tile);

  }
}

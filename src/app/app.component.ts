import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app-component">
      <app-vertical-bar></app-vertical-bar>
      <div class="main">
        <app-welcome></app-welcome>
        <app-generator></app-generator>
      </div>
    </div>
  `,
  styles: [`
    img {
      width: 100%;
      height: 100%;
    }

    .app-component {
      display: flex;
      background: linear-gradient(045deg, #3A9DD5, #6F3CD9);
      padding: 3em 10em;
      color: #eeeeee;
    }

    app-welcome {
      margin-bottom: 5em;
    }

    .main {
      display: flex;
      flex-direction: column;
      margin-left: 2em;
    }
  `]
})
export class AppComponent {
}

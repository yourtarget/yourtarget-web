import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app-component">
      <div class="container">
        <app-vertical-bar></app-vertical-bar>
        <div class="center">
          <app-welcome></app-welcome>
          <app-generator></app-generator>
        </div>
      </div>
      <app-members></app-members>
    </div>
  `,
  styles: [`
    img {
      width: 100%;
      height: 100%;
    }

    .app-component {
      background: linear-gradient(045deg, #3A9DD5, #6F3CD9);
      color: #eeeeee;
    }

    .container {
      display: flex;
      padding: 3em 10em;
    }

    app-welcome {
      margin-bottom: 2em;
    }

    .center {
      display: flex;
      flex-direction: column;
      margin-left: 2em;
    }
  `]
})
export class AppComponent {
}

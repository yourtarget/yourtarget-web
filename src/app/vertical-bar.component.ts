import { Component } from '@angular/core';

@Component({
  selector: 'app-vertical-bar',
  template: `
    <div class="app-vertical-bar">
      <div class="social-network">
        <img src="assets/lena.jpg"/>
      </div>
      <div class="social-network">
        <img src="assets/lena.jpg"/>
      </div>
      <div class="social-network">
        <img src="assets/lena.jpg"/>
      </div>
    </div>
  `,
  styles: [`
    img {
      width: 100%;
      height: 100%;
    }

    .app-vertical-bar {
      display: flex;
      flex-direction: column;
      padding: 0 0.5em;
      border-right: 1px solid #eeeeee;
    }

    .social-network {
      width: 50px;
      height: 50px;
      margin-bottom: 0.5em;
    }
  `]
})
export class VerticalBarComponent {
}

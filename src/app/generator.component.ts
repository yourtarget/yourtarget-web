import { Component } from '@angular/core';

@Component({
  selector: 'app-generator',
  template: `
    <div class="app-generator">
      <div class="progress">
        <div class="progress__label">ВАШ <b>АВАТАР</b></div>
        <div class="progress__bar">
          <span class="progress__header"><b>ПРОГРЕСС</b> СОЗДАНИЯ АВАТАРА</span>
          <div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .app-generator {
    }

    .progress {
      display: flex;
      flex-direction: row;
    }

    .progress__label {
      margin-right: 1em;
      font-size: 1.5em;
    }

    .progress__header {
      font-size: 0.8em;
    }
  `]
})
export class GeneratorComponent {
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-generator',
  template: `
    <div class="app-generator">
      <div class="pb-container">
        <div class="pb-label">ВАШ <b>АВАТАР</b></div>
        <div class="pb">
          <span class="pb__title"><b>ПРОГРЕСС</b> СОЗДАНИЯ АВАТАРА</span>
          <div class="pb__steps">
            <div class="pb-step">
              <div class="pb-step__value"></div>
              <span class="pb-step__legend">Определение пихотипа<br/>1</span>
            </div>
            <div class="pb-step">
              <div class="pb-step__value"></div>
              <span class="pb-step__legend">Определение пихотипа<br/>1</span>
            </div>
            <div class="pb-step">
              <div class="pb-step__value"></div>
              <span class="pb-step__legend">Определение пихотипа<br/>1</span>
            </div>
          </div>
        </div>
      </div>
      <div class="survey-avatar-generation">
        <div class="survey"></div>
        <div class="avatar"></div>
      </div>
    </div>
  `,
  styles: [`
    .app-generator {
    }

    .pb-container {
      display: flex;
      flex-direction: row;
      margin-bottom: 2em;
    }

    .pb-label {
      margin-right: 1em;
      font-size: 1.5em;
      white-space: nowrap;
    }

    .pb {
      width: 100%;
    }

    .pb__title {
      font-size: 0.8em;
    }

    .pb__steps {
      display: flex;
    }

    .pb-step {
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    .pb-step__value {
      height: 10px;
      background-color: #00D47D;
      margin: 0.5em 0;
    }

    .pb-step:first-of-type .pb-step__value {
      border-left: 1px solid #00D47D;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }

    .pb-step:last-of-type .pb-step__value {
      border-right: 1px solid #00D47D;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }

    .pb-step__legend {
      text-align: center;
    }

    .survey-avatar-generation {
      display: flex;
      height: 500px;
    }

    .survey {
      flex-grow: 2;
      height: 100%;
      border-radius: 10px;
      background-color: rgba(60, 72, 145, 0.5);
    }

    .avatar {
      flex-grow: 1;
      height: 100%;
    }
  `]
})
export class GeneratorComponent {
}

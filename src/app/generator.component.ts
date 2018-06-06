import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Option, Question, Step } from './models';

@Component({
  selector: 'app-generator',
  template: `
    <div class="app-generator">
      <div class="pb-container">
        <div class="pb-label">ВАШ <b>АВАТАР</b></div>
        <div class="pb">
          <span class="pb__title"><b>ПРОГРЕСС</b> СОЗДАНИЯ АВАТАРА</span>
          <div class="pb__steps">
            <div *ngFor="let step of steps"
                 class="pb-step" [ngClass]="{'pb-step--done': this.completedSteps.includes(step.id)}">
              <div class="pb-step__value"></div>
              <span class="pb-step__legend">
                {{step.title}}<br/>{{step.id}}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="survey-avatar-generation">
        <div class="survey">
          <app-step [step]="step"
                    (answered)="onAnswer($event)"
                    (finished)="onFinish($event)">
          </app-step>
        </div>
        <div class="avatar-container">
          <div class="avatar">
            <img style="width: 100%" src="assets/lena.jpg"/>
          </div>
          <p class="avatar-info">
            ПО ЗАВЕРШЕНИЮ, БУДЕТ ОТКРЫТ НОВЫЙ
            УНИКАЛЬНЫЙ АВАТАР, КОТОРЫЙ БУДЕТ
            ПРИНАДЛЕЖАТЬ ТОЛЬКО ВАМ
          </p>
        </div>
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

    .pb-step--done .pb-step__value {
      background-color: #00D47D;
    }

    .pb-step__value {
      height: 10px;
      margin: 0.5em 0;
      border: 1px solid #00D47D;
      border-collapse: collapse;
    }

    .pb-step:first-of-type .pb-step__value {
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }

    .pb-step:last-of-type .pb-step__value {
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }

    .pb-step__legend {
      text-align: center;
    }

    .survey-avatar-generation {
      display: flex;
    }

    .survey {
      height: 500px;
      width: 100%;
      margin-right: 2em;
      border-radius: 10px;
      border: 1px solid #000fff;
      background-color: rgba(60, 72, 145, 0.5);
    }

    .avatar-container {
      width: 350px;
    }

    .avatar {
    }

    .avatar-info {
      font-size: .8em;
      text-align: center;
    }
  `]
})
export class GeneratorComponent implements OnInit {
  step: Step;
  steps: Step[];
  completedSteps: number[] = [];

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.apiService.fetchSteps()
      .subscribe(steps => {
        this.steps = steps;
        this.nextStep();
      });
  }

  onAnswer(result: {question: Question, option: Option}) {
    console.log(`question: ${JSON.stringify(result.question)}, option: ${JSON.stringify(result.option)}`);
  }

  onFinish(step: Step) {
    console.log(`Finish  step: ${JSON.stringify(step)}`);
    this.nextStep();
  }

  nextStep(): void {
    if (!this.step && this.steps.length) {
      this.step = this.steps[0];
    } else {
      this.completedSteps.push(this.step.id);
      const si = this.steps.indexOf(this.step);
      if (si < this.steps.length - 1) {
        this.step = this.steps[si + 1];
      } else {
        alert('Survey done');
      }
    }
  }
}

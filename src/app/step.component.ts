import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Option, Question, Step } from './models';

@Component({
  selector: 'app-step',
  template: `
    <div class="step">
      <div class="step__header">
        <p class="step__order">{{step.id}}</p>
        <div class="step__info">
          <p><b>{{step.title}}</b></p>
          <span><i>{{step.description}}</i></span>
        </div>
      </div>
      <div class="question">
        <p class="question__question">{{question.question}}</p>
        <div class="question__options">
          <button class="question__option"
                  *ngFor="let option of question.options"
                  (click)="doAnswer(question, option)">
            {{option.value}}
          </button>
        </div>
      </div>
      <div class="pb">
        <p class="pb__title">
          {{step.questions.indexOf(question) + 1}} из
          {{step.questions.length}}
        </p>
        <div class="pb__steps">
          <div *ngFor="let question of step.questions"
               class="pb-step" [ngClass]="{'pb-step--done': this.completedSteps.includes(question.id)}">
            <div class="pb-step__value"></div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .step {
      box-sizing: border-box;
      padding: 1em;
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    .step__header {
      display: flex;
    }

    .step__order {
      text-align: center;
      vertical-align: middle;
      font-size: 2em;
      padding: 0 0.5em;
    }

    .step__info {
      flex-direction: column;
      font-size: 0.9em;
    }

    .question {
      display: flex;
      flex-direction: column;
      margin: auto;
    }

    .question__question {
      text-align: center;
      font-size: 1.5em;
      font-style: bold;
    }

    .question__options {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    .question__option {
      padding: 0.5em 1em;
      margin: 1em 2em;
      border-radius: .1em;
      background: #6F3CD9;
      border: none;
      font-size: 1em;
      color: #eeeeee;
      cursor: pointer;
    }

    .question__option:hover {
      box-shadow: -1px -1px 10px 1px #eeeeee;
    }

    .pb {
      width: 100%;
      margin-top: auto;
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
  `]
})
export class StepComponent implements OnInit, OnChanges {
  question: Question;
  @Input() step: Step;
  @Output() answered = new EventEmitter<{ question: Question, option: Option }>();
  @Output() finished = new EventEmitter<Step>();
  completedSteps: number[] = [];

  ngOnInit(): void {
    this.nextQuestion();
  }

  doAnswer(question: Question, option: Option) {
    this.answered.emit({question: question, option: option});
    this.nextQuestion();
  }

  nextQuestion() {
    const qs = this.step.questions;
    if (!this.question && qs.length) {
      this.question = this.step.questions[0];
    } else {
      this.completedSteps.push(this.question.id);
      const qi = qs.indexOf(this.question);
      if (qi < qs.length - 1) {
        this.question = qs[qi + 1];
      } else {
        this.finish();
      }
    }
  }

  finish() {
    this.finished.emit(this.step);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.step && !changes.step.firstChange) {
      this.nextQuestion();
    }
  }
}

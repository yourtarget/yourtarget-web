import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Step } from './models';

@Injectable()
export class ApiService {
  fetchSteps(): Observable<Step[]> {
    return Observable.of<Step[]>([
      {
        id: 1,
        title: 'Определение психотипа',
        description: `Постарайтесь отвечать правдиво, ведь только там может получится аватар,
       с учетом вашего психотипа. ВАЖНО! Мы никак не идентифицуруем Вас, поэтому вы можете не бояться,
       что Ваши ответы будут связаны с Вами`,
        questions: [
          {
            id: 11,
            question: 'Как бы вы поступили?',
            options: [
              {
                id: 111,
                value: 'Пошел бы бухнул'
              }, {
                id: 112,
                value: 'Пошел бы гулять'
              }, {
                id: 113,
                value: 'Пошел бы бегать'
              }, {
                id: 114,
                value: 'Пошел бы спать'
              },
            ]
          }, {
            id: 12,
            question: 'Простой вопрос?',
            options: [
              {
                id: 121,
                value: 'Простой ответ'
              },
            ]
          },
        ],
      }, {
        id: 2,
        title: 'Определение интересов',
        description: `Постарайтесь отвечать правдиво, нам нужно знать что вам интересно`,
        questions: [
          {
            id: 21,
            question: 'Что вам нравится?',
            options: [
              {
                id: 211,
                value: 'Кино'
              }, {
                id: 212,
                value: 'Музыка'
              }, {
                id: 213,
                value: 'Книги'
              },
            ]
          },
        ],
      },
    ]);
  }
}

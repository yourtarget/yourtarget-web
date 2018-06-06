import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiService {
  fetchSteps() {
    return Observable.of([
      {
        order: 1,
        title: 'Определение психотипа',
        description: `Постарайтесь отвечать правдиво, ведь только там может получится аватар,
       с учетом вашего психотипа. ВАЖНО! Мы никак не идентифицуруем Вас, поэтому вы можете не бояться,
       что Ваши ответы будут связаны с Вами`,
        subSteps: [
          {
            order: 1,
            question: 'Как бы вы поступили?',
            options: [
              {
                id: 1,
                value: 'Пошел бы бухнул'
              }, {
                id: 2,
                value: 'Пошел бы гулять'
              }, {
                id: 3,
                value: 'Пошел бы бегать'
              }, {
                id: 4,
                value: 'Пошел бы спать'
              },
            ]
          },
        ],
      }, {
        order: 2,
        title: 'Определение интересов',
        description: `Постарайтесь отвечать правдиво, нам нужно знать что вам интересно`,
        subSteps: [
          {
            order: 1,
            question: 'Как вам нравится?',
            options: [
              {
                id: 1,
                value: 'Кино'
              }, {
                id: 2,
                value: 'Музыка'
              }, {
                id: 3,
                value: 'Книги'
              },
            ]
          },
        ],
      },
    ]);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  template: `
    <div class="welcome">
      <p class="slogan">ПРИМИ УЧАСТИЕ В ГЛОБАЛЬНОМ <b>FLASHMOB</b></p>
      <p class="goal">
        Цель нашего проекта помочь каждому обратить на себя внимание,<br/>
        разделяя нашу общую идею, что главное не внешность, а то что внутри нас
      </p>
      <div class="cards">
        <div class="card">
          <div class="card__icon">
            <img src="https://i.stack.imgur.com/o1z7p.jpg"/>
          </div>
          <p class="card__description">
            Ниже, каждый может получить своего аватара,
            который создается <b>на базе специального теста</b>, и ваших
            3 самых любимых фильмов,
            3 самых любимых мест на планете,
            3 самых любимых книг
          </p>
        </div>
        <div class="card">
          <div class="card__icon">
            <img src="https://i.stack.imgur.com/o1z7p.jpg"/>
          </div>
          <p class="card__description">
            <b>Получив уникального</b> аватара, Вы можете разместить
            его на главное фото в социальных сетях, на котором будет пометка:
            "Брось выхов своему лицу. Узнай больше на ChallengeNoFace.org"
          </p>
        </div>
        <div class="card">
          <div class="card__icon">
            <img src="https://i.stack.imgur.com/o1z7p.jpg"/>
          </div>
          <p class="card__description">
            Этим действием Вы получите классного аватара
            созданного на базе того, что Вам нравится и
            присоединитесь к <b>флешмобу против "Красивых селфи"</b>, поддержав
            нашу миссию о том, что внешность - не главное
          </p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    img {
      width: 100%;
      height: 100%;
    }

    .slogan {
      text-transform: uppercase;
      font-size: 1.5em;
      margin-top: 0;
    }

    .goal {
      margin-bottom: 3em;
      font-size: 0.9em;
    }

    .cards {
      display: flex;
      justify-content: space-between;
    }

    .card {
      display: flex;
      flex-direction: column;
    }

    .card__icon {
      width: 100px;
      height: 100px;
      align-self: center;
    }

    .card__description {
      padding: 0.3em;
      font-size: 0.7em;
    }
  `]
})
export class WelcomeComponent {
}

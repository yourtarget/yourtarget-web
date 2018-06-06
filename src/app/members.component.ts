import { Component, OnInit } from '@angular/core';
import { Member } from './models';
import { ApiService } from './api.service';

@Component({
  selector: 'app-members',
  template: `
    <div class="members">
      <p class="title">
        <span>КАКИЕ ЛИЧНОСТИ УЖЕ УЧАВСТВУЮТ В <b>FLASHMOB</b></span>,<br/>
        СОЗДАВ СВОЕГО АВАТАРА
      </p>
      <div class="carousel">
        <div *ngFor="let member of slice" class="member">
          <img style="width: 100%" src="https://i.stack.imgur.com/o1z7p.jpg"/>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .members {
      display: flex;
      flex-direction: column;
    }

    .title {
      font-size: 2em;
      text-align: center;
    }

    .carousel {
      display: flex;
      flex-wrap: nowrap;
      overflow: hidden;
    }

    .member {
      width: 200px;
      height: 200px;
      margin: 2em;
      flex: 0 0 auto;
    }
  `]
})
export class MembersComponent implements OnInit {
  members: Member[];
  slice: Member[];
  position = 0;
  size = 30;

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.apiService.fetchMembers()
      .subscribe(members => {
        this.members = members;
        this.next();
      });
  }

  next() {
    if (this.position + this.size < this.members.length) {
      this.slice = this.members.splice(this.position++, this.size);
    }
  }
}

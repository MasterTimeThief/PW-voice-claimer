import { Component, Input } from '@angular/core';
import { map, timer, takeWhile } from 'rxjs';
import { CommonModule } from '@angular/common';

import { Character } from '../character';

@Component({
  selector: 'app-character-detail',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './character-detail.component.html',
  styleUrl: './character-detail.component.css'
})
export class CharacterDetailComponent {
  @Input() character?: Character;
  @Input() index?: Number;

  //Timer
  timeLeft$: number = 0;
  interval: any;

  startTimer() {
    clearInterval(this.interval);
    this.timeLeft$ = 600;
    this.interval = setInterval(() => {
      if(this.timeLeft$ > 0) {
        this.timeLeft$--;
      } else {
        clearInterval(this.interval);
      }
    },1000)
  }


}

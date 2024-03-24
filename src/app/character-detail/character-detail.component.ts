import { Component, Input, Output, EventEmitter } from '@angular/core';
import { map, timer, takeWhile } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Character } from '../character';

@Component({
  selector: 'app-character-detail',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './character-detail.component.html',
  styleUrl: './character-detail.component.css'
})
export class CharacterDetailComponent {
  @Input() character?: Character;
  @Input() index?: number;
  @Input() voice = "";

  @Output() deleteEvent = new EventEmitter<number>();

  //Timer
  timerLength = 600;
  timeLeft$: number = 0;
  interval: any;
  isPaused: boolean = false;
  isTimer: boolean = false;

  startTimer() {
    if (!this.isTimer) {
      this.isTimer = true;
      clearInterval(this.interval);
      this.timeLeft$ = this.timerLength;
      this.setTimer();
    }
  }

  pauseTimer() {
    if (this.isTimer) {
      if (this.isPaused) {
        this.setTimer();
      }
      else {
        clearInterval(this.interval);
      }
      this.isPaused = !this.isPaused;
    }
  }

  setTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft$ > 0) {
        this.timeLeft$--;
        if(this.timeLeft$ == 0) this.voice = "";
      } else {
        clearInterval(this.interval);
        this.isTimer = false;
      }
    },1000)
  }

  deleteCharacter() {
    this.deleteEvent.emit(this.index);
  }


}

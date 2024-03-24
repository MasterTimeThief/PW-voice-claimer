import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Character } from './character';
import { CHARACTERS } from './character-list';
import { CharacterDetailComponent } from './character-detail/character-detail.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    CharacterDetailComponent,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PW-voice-claimer';
  allCharacters = CHARACTERS;
  
  characters: Character[] = [];
  selectedChar = 0;

  constructor() {
    this.characters[0] = this.allCharacters[0];
  }

  addCharacter(char: string) {
    //var charId = parseInt(char);

    this.characters.push(this.allCharacters[this.selectedChar - 1]);
    this.selectedChar = 0;
  }

  deleteCharacter(index: number) {
    this.characters.splice(index,1);
  }

  



}

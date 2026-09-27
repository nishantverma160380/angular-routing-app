import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { I18nPluralPipe, I18nSelectPipe } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';

import toWords from 'number-to-words';

@Component({
  imports: [FormsModule, CommonModule, CurrencyPipe, I18nPluralPipe, I18nSelectPipe, MatDividerModule],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})

export class Home {
  textValue = signal(`Button Clicked: ${toWords.toWords(0)} times`);
  updateCount = 0;
  userName = '';
  today = new Date();
  gender = 'male';

  messages: { [key: string]: string } = {
    '=0': 'No messages',
    '=1': 'One message',
    'other': '# messages'
  };

  genderMessages: { [key: string]: string } = {
    male: 'He is a registered user.',
    female: 'She is a registered user.',
    other: 'They are a registered user.'
  };

  onClickUpdateCount() {
    console.log('Update Count button clicked');
    this.updateCount++;
    this.textValue.set(`Button Clicked: ${toWords.toWords(this.updateCount)} times`);
  } 
}
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = '';

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters
  }

  onButtonClick() {
    this.password = 'My password!!!';
  }
}

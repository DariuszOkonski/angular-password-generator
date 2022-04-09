import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  includeLetters = true;
  password = '';
  
  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onButtonClick() {
    this.password = 'MY PASSWORD!!!';
  }
}
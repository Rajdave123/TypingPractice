import { Component } from '@angular/core';
import { lorem } from 'faker';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  sentence = lorem.sentence();
  text = '';

  changeText(e: any) {
    this.text = e.target.value;
  }

  next() {
    this.sentence = lorem.sentence();
    // console.log(1212);
    this.text = "";
  }

  compare(randomeLetter: string, enteredLetter: string) {
    if (!enteredLetter) {
      return 'pending';
    }

    return randomeLetter === enteredLetter ? 'success' : 'danger';
  }
}

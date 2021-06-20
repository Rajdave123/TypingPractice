import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'typing';

  text = '';

  sentences = [
    'ten ate neite ate nee enet ite ate inet ent eate',
    'Too ato too nOt enot one totA not anot tOO aNot',
    'oat itain oat tain nate eate tea anne inant nean',
    'itant eate anot eat nato inate eat anot tain eat',
    'nee ene ate ite tent tiet ent ine ene ete ene ate',
  ];

  sentence = this.sentences[Math.floor(Math.random() * this.sentences.length)];

  changeText(e: any) {
    this.text = e.target.value;
  }

  compare(randomeLetter: string, enteredLetter: string) {
    if (!enteredLetter) {
      return 'pending';
    }

    return randomeLetter === enteredLetter ? 'success' : 'danger';
  }
}

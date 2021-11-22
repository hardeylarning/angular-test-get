import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  languages: string[] = ['English', 'Yoruba', 'Hausa', 'Igbo'];

  language: string = 'French';

  addLanguage() {
    console.log('You are here');
    this.languages.push(this.language);

    console.log(this.languages);
    
  }
}

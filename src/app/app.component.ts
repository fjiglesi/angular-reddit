import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean{
    console.log(`Adding article[title: ${title.value}, value:${link.value}]`);
    return false;
  }
  
}

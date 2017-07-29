import { Component } from '@angular/core';

export class Developer{
  id: number;
  name: string;
}
const DEVELOPERS: Developer[] = [
  { id: 1, name: 'sirpa' },
  { id: 2, name: 'annie' },
  { id: 3, name: 'preethy' },
  { id: 4, name: 'vamsi' },
  { id: 5, name: 'hari' },
  { id: 6, name: 'jennie' },
  { id: 7, name: 'partheeba' },
  { id: 8, name: 'divya' },
  { id: 9, name: 'kula' },
  { id: 10, name: 'WTF' }
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template: `<h1>{{title}}</h1><h2>{{developer.name}} details!</h2>`,
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'List of Developers';
  developers = DEVELOPERS;
  selectedDeveloper: Developer;
  onSelect(developer: Developer): void {
    this.selectedDeveloper = developer;
  }

}



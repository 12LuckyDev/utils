import { nMap } from '@12luckydev/utils';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <h1>Hello, {{ title }}</h1>
    <p *ngFor="let x of nMapTest">{{ x }}</p>`,
})
export class AppComponent {
  title = 'ng12';
  nMapTest = nMap(10, (i) => i * 10);
}

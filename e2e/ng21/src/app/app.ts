import { nMap } from '@12luckydev/utils';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Hello, {{ title() }}</h1>
    @for (x of nMapTest; track x) {
      <p>{{ x }}</p>
    }
  `,
})
export class App {
  protected readonly title = signal('ng21');
  protected readonly nMapTest = nMap(10, (i) => i * 10);
}

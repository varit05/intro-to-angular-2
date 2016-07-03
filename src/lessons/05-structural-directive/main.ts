import {bootstrap} from 'angular2/platform/browser';
import {Component, View} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

@Component({
  selector: 'app',
  bindings: []
})

@View({
  template: `
    <div>
      <p>Expression status: {{show}}</p>
      <button (click)="clicked()">Toggle Header</button>
      <div style="border: 1px solid black; padding: 10px; width: 400px; margin-top: 10px;">
        <div *ngIf="show">
          <h2>Hello Angular2!</h2>
        </div>
      </div>
    </div>
  `,
  directives: [CORE_DIRECTIVES]
})

export class App {
  
  show: boolean = false;
  
  clicked() {
    this.show = !this.show;
  }
}

bootstrap(App);

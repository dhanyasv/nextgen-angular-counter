import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  counter : number = 0;
  @HostListener('window:click', ['$event']) handleCounter(event:Event) {
      if((event.target as HTMLInputElement).value !== 'reset'){
          this.counter = this.counter +1
      }
  }
  resetCounter(event:Event) {
    this.counter = 0;
  }
}

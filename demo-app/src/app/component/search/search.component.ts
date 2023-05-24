import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  message: string = '';

  search(event: any): void {
      this.message = event.target.message;
      console.log('Value:',event.target.message); 
    }
  }

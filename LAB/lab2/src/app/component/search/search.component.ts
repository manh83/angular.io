import { Component } from '@angular/core';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  message: string = "";

  search(event:any): void {
    this.message = event.target.message.value
    console.log("Search value: ", this.message);
  }
}


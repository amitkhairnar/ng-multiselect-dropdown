import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  list : any[];
  title = 'recipieBook';

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  constructor(){
    this.list =
      [
        {name :'India',checked : false},
        {name :'US',checked : false},
        {name :'China',checked : false},
        {name :'France',checked : false}
      ]
  }

  ngOnInit() {
    this.dropdownList = [
      { item_id: 1, item_text: 'United States' },
      { item_id: 2, item_text: 'India' },
      { item_id: 3, item_text: 'China' },
      { item_id: 4, item_text: 'Japan' },
      { item_id: 5, item_text: 'Germany' },
      { item_id: 6, item_text: 'Australia' },
      { item_id: 7, item_text: 'United Kingdom' },
      { item_id: 8, item_text: 'Sweden' },
      { item_id: 9, item_text: 'Norway' },
      { item_id: 10, item_text: 'Dubai' }
    ];

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
      searchPlaceholderText: 'Search'
    };
  }

  onItemSelect(item: any) {
    console.log(item);
  }

  onSelectAll(items: any) {
    console.log(items);
  }

  onSelectedValues(items: any){
    console.log(items);
  }
}

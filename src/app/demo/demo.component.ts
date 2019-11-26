import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  title = 'platzy-store';
  items = ['aaaaa', 'bbbbbb', 'cccccc'];
  ngOnInit() {
  }
  addItem() {
    this.items.push('Hola');
  }

  deleteItem( index: number ) {
    this.items.splice(index,1);
  }

}

import { Component, OnInit, ViewChild, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') name;
  @ViewChild('amountInput') amount;
  @Output() ingredientAdded = new EventEmitter();
  onAdd() {
    this.ingredientAdded.emit(
      {
        name: this.name.nativeElement.value,
        amount: this.amount.nativeElement.value
      }
    )
  }
  constructor() { }

  ngOnInit(): void {
  }

}

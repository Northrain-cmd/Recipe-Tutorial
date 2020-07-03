import { Component, OnInit, ViewChild, Output, OnDestroy } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('form') form: NgForm;
  @Output() ingredientAdded = new EventEmitter();
  @Output() ingredientUpdated = new EventEmitter();

  subscription: Subscription;
  editMode = false;
  index: number;
  onSubmit(form: NgForm) {
    if (this.editMode === false) {
      this.ingredientAdded.emit({
        name: form.value.name,
        amount: form.value.amount,
      });
    } else {
      this.ingredientUpdated.emit({
        index: this.index,
        name: this.form.value.name,
        amount: this.form.value.amount,
      });
      this.editMode = false;
    }
    this.form.reset();
  }
  onDelete(){
    if(this.editMode === true) {
      this.slService.deleteIngredient(this.index);
      this.editMode = false;
      this.form.reset();
    }
  }
  onClear() {
    this.form.reset();
    this.editMode = false;
  }
  constructor(private slService: ShoppingListService) {}

  ngOnInit(): void {
    this.subscription = this.slService.ingredientSelected.subscribe((index) => {
      this.editMode = true;
      this.index = index;
      const ingredient = this.slService.getIngredient(index);
      this.form.setValue({
        name: ingredient.name,
        amount: ingredient.amount,
      });
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

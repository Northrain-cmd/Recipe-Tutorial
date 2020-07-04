import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  collapsed = true;

  constructor(private dataStorage: DataStorageService) { }
  ngOnInit(): void {
  }
  onSaveData() {
    this.dataStorage.storeRecipes();
  }
  onFetch() {
    this.dataStorage.fetchRecipes().subscribe();
  }

}

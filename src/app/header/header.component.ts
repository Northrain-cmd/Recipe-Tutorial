import { Component, OnInit, Output, OnDestroy } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  collapsed = true;
  subscription: Subscription;
  isLogged = false;

  constructor(private dataStorage: DataStorageService, private authService: AuthService) { }
  ngOnInit(): void {
    this.subscription = this.authService.user.subscribe(user => {
     this.isLogged = !!user;
    })
  }
  onSaveData() {
    this.dataStorage.storeRecipes();
  }
  onFetch() {
    this.dataStorage.fetchRecipes().subscribe();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

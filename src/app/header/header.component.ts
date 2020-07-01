import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() linkClicked = new EventEmitter<string>();
  collapsed = true;

  onClick(event) {
      this.linkClicked.emit(event.target.textContent);
  }  
  constructor() { }
  ngOnInit(): void {
  }

}

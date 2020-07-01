import { Directive, OnInit, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: "[appDropdown]"
})  
export class DropdownDirective implements OnInit {
    constructor(private elRef: ElementRef) {
       
    }
    ngOnInit() {
    }
    @HostListener('document:click',['$event']) onClick() {
        this.elRef.nativeElement.contains(event.target) 
        ? this.elRef.nativeElement.nextElementSibling.classList.toggle('show')
        : this.elRef.nativeElement.nextElementSibling.classList.remove('show')
    }
}
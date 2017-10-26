import {Directive,HostBinding,HostListener} from '@angular/core';

@Directive({
	selector:'[dropdown-directive]'
})
export class DropdownDirective {

@HostBinding('class.open') isOpened:boolean = false;

@HostListener('click') onClick(){
	this.isOpened = !this.isOpened;
}	
	constructor() {
		// code...
	}
}  
import {Directive,ElementRef,Renderer2,OnInit} from '@angular/core';

@Directive({

	selector:'[apphighlight-directive]'
})
export class HighlightDirective implements OnInit {
	
	constructor(private elmRef:ElementRef,private renderer:Renderer2){}

	ngOnInit(){

		this.renderer.setStyle(this.elmRef.nativeElement,'color','red');
	}
}  
import {OnInit,ViewContainerRef,TemplateRef,Directive,Input} from '@angular/core';

@Directive({

 selector:'[myUnlessDirective]'

})
export  class UnlessStrDirective{

	constructor(private tmplRef : TemplateRef<any>, private vcRef :ViewContainerRef){}
	

	@Input() set myUnlessDirective(condition:boolean){

		if(!condition){
			this.vcRef.createEmbeddedView(this.tmplRef);
		}else{
			this.vcRef.clear();
		}
	}

}
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,FormArray,Validators} from '@angular/forms';
import {EventService} from './../event.service';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {ContactModel, states, Address,Hobbies} from './contact.model';
import {forbiddenNameValidator} from './custom-validators';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  id:Number = 2;
  contactForm:FormGroup;
  constructor(private eventService:EventService,
    private router:Router, 
    private acitvatedRoute:ActivatedRoute,
    private fb:FormBuilder
    ) {

     this.createForm(); }

  ngOnInit() {};

  onClick(event:Event){

  	this.eventService.aboutUsClicked.emit('contact us view');
  	this.router.navigate(['coming from contacts US Link'],{relativeTo:this.acitvatedRoute,queryParams:{'name':'Jitendra'}})

  }

  createForm(){

       this.contactForm =  this.fb.group({
                           firstName:['jitendra', [Validators.required, 
                           Validators.minLength(4), forbiddenNameValidator(/abcd/i),
                           Validators.pattern('[a-zA-Z]*')]
                           ],
                           lastName:'Singh',
                           addresses:this.fb.array([]),
                           hobbies:this.fb.array([]),
                           email:'jpsiet@gmail.com'
                        })

  }
 
 states = states;
  submitted = false;


  get addresses(){

    return this.contactForm.get('addresses') as FormArray;
  }

  get hobbies(){
    return this.contactForm.get('hobbies') as FormArray;
  }


  addHobbies(){
   
     this.hobbies.push(this.fb.group(new Hobbies()));
  }

onEdit(){

  this.submitted = false;
}

  addAddress(){
    
    this.addresses.push(this.fb.group(new Address()));
  }


  onSubmit(form : any) { 
   
    alert(" Thank you for, will come to back to ASAP");
    this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.contactForm.value)}
  
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tick-tock-game',
  templateUrl: './tick-tock-game.component.html',
  styleUrls: ['./tick-tock-game.component.scss']
})
export class TickTockGameComponent implements OnInit {

   tickTockList:number[] = Array(9).fill(null);

   validMovement = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  status:string="";
  gameStarted:boolean= true;
   state:object = {
   	 'tickTockList':this.tickTockList,
   	  'next' : true
   }
  constructor() { }

  ngOnInit() {

  	this.status = 'Next Is ' + (this.state['next']?'O':'X');
  	debugger;

  }
  handleSquareClick(btn:any){

  	if(this.checkValidMovment(btn))
  	{
        this.status = ' Congratulation Win   ' + (this.state['next']?'O':'X');
        this.gameStarted = false;
        return ;
  	}
  	var childIndex = btn.id.split('button')[1];
  	if(this.state['next']){

  		this.state['next'] = false;
  		this.state['tickTockList'][childIndex] = 'X'

  	}else{

  		this.state['next'] = true;
  		this.state['tickTockList'][childIndex] = 'O'

  	}
  }  

  refreshTheGame(){
  	this.tickTockList = Array(9).fill(null);
  	 this.state['tickTockList']= Array(9).fill(null);
  	  this.gameStarted = true;
  }

  checkValidMovment(btn:any){

  	for(var i=0; i<this.validMovement.length;i++){
  		const [a,b,c] = this.validMovement[i];
  		if(this.tickTockList[a] && this.tickTockList[a]=== this.tickTockList[b] && 
  		this.tickTockList[a] === this.tickTockList[c] )
  			return true;

  	}
  	return false;
  }
}

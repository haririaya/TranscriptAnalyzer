import { Component, OnInit } from '@angular/core';
import { Output,Input,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-display-table',
  templateUrl: './display-table.component.html',
  styleUrls: ['./display-table.component.css']
})
export class DisplayTableComponent implements OnInit {
  @Input() title: string;
  @Input() head1: string;
  @Input() head2: string; 
  @Input() head3 : string;
  @Input() placeholder1: string;
  @Input() placeholder2: string; 
  @Input() placeholder3 : string;
  @Input() keys : any[];
  @Input() similarity : number
  @Input() data : any[]
  @Input() allowHover : boolean
  @Input() darkLink : string
  @Input() order: number
  @Input() agentName : string
  @Input() percentage : number
  @Output() darkHighlight: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  mouseOver(matchingSentence){
  	if(this.allowHover){
  		 this.darkHighlight.emit(matchingSentence);
  	}

  }

}

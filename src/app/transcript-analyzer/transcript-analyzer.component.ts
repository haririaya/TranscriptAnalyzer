import { Component, OnInit } from '@angular/core';
import {TranscriptAnalyzerService } from './transcriptAnalyzer.service';
import { Agent } from '../models/agent.model';
import {Router} from '@angular/router';


@Component({
  selector: 'app-transcript-analyzer',
  templateUrl: './transcript-analyzer.component.html',
  styleUrls: ['./transcript-analyzer.component.css'], 
  providers : [TranscriptAnalyzerService]
})
export class TranscriptAnalyzerComponent implements OnInit {
  agents;
  selectedAgent;
  callTypes ;
  calls ;
  selectedCall;
  callType= '';
  notSelected = true;
  sliderValue = 38;
  script;
  transcript;
  linkSentence = ''
  number 
  percentage
  constructor(private transcriptService: TranscriptAnalyzerService, private router: Router) {

   }

  ngOnInit(): void {
  	this.getAgents();
  	this.getCallTypes();
  }

  getAgents(){
  	(this.transcriptService.getAgents().subscribe( result => {
  		this.agents = result
  	}))

  }
  getCalls(){
  	this.transcriptService.getCalls(this.agents[this.selectedAgent]).subscribe(result => {
  		this.calls = result;
      this.calls =[...this.calls].slice().sort((a, b) => b.call_start_time - a.call_start_time)
  		let temp = [];
  		if (this.callType !== '' && this.callType !=='all'){
  			[...this.calls].forEach(element=>{
  				if (element['calltype_id'] === this.callType) {
  					temp.push(element)
  				}
  			})
  		}
  		else { temp = [... this.calls]}

  		this.calls = temp;
  		
  	});
  }
  getCallTypes() {
  	this.transcriptService.getCallTypes().subscribe(result =>{
  		this.callTypes = result;
  	})
  }
  logCall() {
  	this.notSelected = false; 
    this.getTranscript(this.selectedCall)
  }
  valueChange(value){
    this.sliderValue = value['value']
  }
  getTranscript(callId){
    this.transcriptService.getTranscript(callId).subscribe(result=> {
      let temp = result
      let agent = temp[0]['agent'][0]['channel_no'];
      let customer = temp[0]['customer'][0]['channel_no']
      this.percentage =0;

      this.script = temp[0]['script']
      this.script.forEach (line => {
        this.percentage = this.percentage + line['similarity'];
      });
      this.percentage = this.percentage / this.script.length
      this.percentage = Math.round(this.percentage * 100) / 100
      this.percentage = this.percentage*100
      temp[0]['transcript'].forEach( instance =>{ 
        if(instance['channel'] == customer) {
          instance['channel'] = temp[0]['customer'][0]['full_name']
        } else if (instance['channel'] == agent) {
          instance ['channel'] = this.agents[this.selectedAgent]['full_name']
        } else {
            instance['channel'] = 'Unknown'
        } 
        
      })
      this.transcript = temp[0]['transcript']
    })
  }
  logEmitter(param){
    this.linkSentence = param;
    for(let i =0; i< this.script.length; i++) {
      if(this.script[i]['sentence'] === param){
        this.number = this.script[i]['order'];
        break;
      }
    }

    console.log(this.number)
  }
}

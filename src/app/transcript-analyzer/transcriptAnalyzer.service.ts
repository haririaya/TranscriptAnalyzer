import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Agent } from '../models/agent.model';

@Injectable()
export class TranscriptAnalyzerService {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
   getAgents() { 
    return this.http.get('/api/agents');
   }
   getCalls(agent: Agent) {

   	return this.http.get('/api/'+ agent['agent_id'])
   }
   getCallTypes(){
    return this.http.get('/api/calltypes')
   }
   getTranscript(callId){
    return this.http.get('/api/'+callId)
   }
}

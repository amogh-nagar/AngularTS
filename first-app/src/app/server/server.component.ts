import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles:[
    `
    .online{
        color:white;
        background-color:green;
    }
    .offline{
        color:white;
        background-color:red;
    }`
  ]
})
export class ServerComponent {
    serverId:number=10;
    serverStatus:string='offline';
    constructor(){
        this.serverStatus=Math.random()>0.5?'online':'offline';
    }
    getColor(){
        return this.serverStatus==='online'?'green':'red';
    }
    getServersStatus(){
        return this.serverStatus;
    }
}

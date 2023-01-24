import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
  allowNewServer = false;
  serverName = '';
  servers=['TestServer 1','TestServer 2']
  serverCreated=false;
  serverCreationStatus = 'No server was created!';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  onCreateServer() {
    this.servers.push(this.serverName)
    this.serverCreated=true;
    this.serverCreationStatus = 'Server was created!';
  }
  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }
}

import { Component, OnInit } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { HubConnection, HubConnectionBuilder, LogLevel } from '@microsoft/signalr';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'FrontEnd';

  userName: String = 'Gabriel';

  userData: { name: String, age: Number, objective: String } = {
    name: 'Gabriel',
    age: 20,
    objective: 'Great professional in the field of technology.'
  }


  private _hubConnection?: HubConnection;

  constructor() {
  }

  ngOnInit(): void {

    this._hubConnection = new HubConnectionBuilder()
      .withUrl('https://finansist.trdev.com.br/notify'
      )

      .configureLogging(LogLevel.Information)
      .build();

    this._hubConnection
      .start()
      .then(() => console.log('Conexão iniciada!'))
      .catch(err => console.log('Erro enquanto estabelecia a conexão :('));

    this._hubConnection.on('SendNotification', (data: Object) => {
      console.log(data);
    });
  }
}

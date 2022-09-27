import { Component, OnInit } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';


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

    // this._hubConnection = new HubConnectionBuilder()
    //   .withUrl('https://localhost:7144/notify')
    //   //.configureLogging(LogLevel.Information)
    //   .build();

    // this._hubConnection
    //   .start()
    //   .then(() => console.log('Connection started!'))
    //   .catch(err => console.log('Error while establishing connection :('));

    // this._hubConnection.on('SendNotification', (data: Gabriel) => {
    //   this.eu = data;
    //   this.eus?.push(data);
    //   console.log(this.eus);
    // });
  }
}

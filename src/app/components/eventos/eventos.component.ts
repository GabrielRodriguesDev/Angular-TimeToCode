import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  message: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  showMessage(): void {
    this.message = !this.message;
  }

}

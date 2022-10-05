import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.scss']
})
export class EmitterComponent implements OnInit {


  number: number = 0;
  @Output() changeNumberAgain = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  onChangeNumber(number: number): void {
    this.number = number;
    this.changeNumberAgain.emit(number);
  }


}

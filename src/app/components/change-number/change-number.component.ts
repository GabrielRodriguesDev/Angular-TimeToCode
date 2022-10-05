import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrls: ['./change-number.component.scss']
})
export class ChangeNumberComponent implements OnInit {

  constructor() { }

  @Output() changeNumber = new EventEmitter<number>();

  number: number = 0;

  ngOnInit(): void {
  }

  handleClick() {
    this.changeNumber.emit(this.number++)
  }

}

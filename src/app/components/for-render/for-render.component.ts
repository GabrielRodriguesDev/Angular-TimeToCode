import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-render',
  templateUrl: './for-render.component.html',
  styleUrls: ['./for-render.component.scss']
})
export class ForRenderComponent implements OnInit {

  constructor() { }

  numbers: number[] = [];

  ngOnInit(): void {
  }

  onChangeNumberAgain(number: number): void {
    this.numbers.push(number);
  }

}

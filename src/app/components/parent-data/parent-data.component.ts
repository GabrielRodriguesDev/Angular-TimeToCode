import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.scss']
})
export class ParentDataComponent implements OnInit {

  @Input() name: String = '';
  @Input() user!: { name: String, age: Number, objective: String }

  constructor() { }

  ngOnInit(): void {
  }

}

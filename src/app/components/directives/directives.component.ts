import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  size = 40;
  color = 'red';

  myClasses = ['green-title', 'small-title']

  constructor() { }

  ngOnInit(): void {
  }

}

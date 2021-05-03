import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-amit',
  templateUrl: './amit.component.html',
  styleUrls: ['./amit.component.css']
})
export class AmitComponent implements OnInit {

  @Input() name: string;

  constructor() { }

  ngOnInit(): void {
  }

}

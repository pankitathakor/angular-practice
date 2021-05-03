import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boot',
  templateUrl: './boot.component.html',
  styleUrls: ['./boot.component.css'],
  styles: [`
    :host >>> .alert-custom {
      color: #99004d;
      background-color: #f169b4;
      border-color: #800040;
    }
  `]
})
export class BootComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

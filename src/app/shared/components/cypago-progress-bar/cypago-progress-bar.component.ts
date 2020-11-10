import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cypago-progress-bar',
  templateUrl: './cypago-progress-bar.component.html',
  styleUrls: ['./cypago-progress-bar.component.scss']
})
export class CypagoProgressBarComponent implements OnInit {

  @Input() percentage;

  constructor() { }

  ngOnInit(): void {
  }

}

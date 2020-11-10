import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'access-control-item',
  templateUrl: './access-control-item.component.html',
  styleUrls: ['./access-control-item.component.scss']
})
export class AccessControlItemComponent implements OnInit {

  @Input() item;

  constructor() { }

  ngOnInit(): void {
  }

  getIcon(title) {
    return `assets/${title}-logo.png`;
  }

}

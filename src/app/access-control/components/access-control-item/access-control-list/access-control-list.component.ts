import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'access-control-list',
  templateUrl: './access-control-list.component.html',
  styleUrls: ['./access-control-list.component.scss']
})
export class AccessControlListComponent implements OnInit {


  @Input() data;
  @Input() columns;

  constructor() { }

  ngOnInit(): void {
    console.log(this.data)
  }

  
}

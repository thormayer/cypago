import { TaskItem } from './../../../core/models/task-item.model';
import { AccessControlService } from './../../services/access-control.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-access-control',
  templateUrl: './access-control.component.html',
  styleUrls: ['./access-control.component.scss']
})
export class AccessControlComponent implements OnInit {

  accessControlItemList: Array<TaskItem>;

  constructor(private accessControlService: AccessControlService) { }

  ngOnInit(): void {
    this.accessControlItemList = this.accessControlService.getData();
    console.log('ac', this.accessControlItemList)
    
  }

}

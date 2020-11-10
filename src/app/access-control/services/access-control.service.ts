import { HttpService } from './../../core/services/http.service';
import { Injectable } from '@angular/core';
import { TaskItem, TaskItemTable } from '../../core/models/task-item.model';
@Injectable({
  providedIn: 'root'
})
export class AccessControlService {

  constructor(private httpService: HttpService) { }


  getData(): Array<TaskItem> {
    return this.httpService.get();
  }
}

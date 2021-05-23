import { Injectable } from '@angular/core';
import { Task } from './../interfaces/task.interface';
import { TASKS } from './../mock-tasks';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  public getTasks(): Observable<Task[]> {
    return of(TASKS);
  }
}

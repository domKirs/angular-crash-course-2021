import { Component, OnInit } from '@angular/core';
import { Task } from '../../interfaces/task.interface';
import { TASKS } from '../../mock-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  public tasks: Task[] = TASKS;

  constructor() { }

  ngOnInit(): void { }

}

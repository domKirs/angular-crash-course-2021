import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/interfaces/task.interface';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent {
  @Input() task?: Task;

  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

  public faTimes = faTimes;

  public onDelete(task?: Task): void {
    this.onDeleteTask.emit(task);
  }

  public onToggle(task?: Task): void {
    this.onToggleReminder.emit(task);
  }
}

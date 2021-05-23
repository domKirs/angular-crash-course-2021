import { Component, OnInit } from '@angular/core';
import { Task } from './../../interfaces/task.interface';
import { TaskService } from './../../services/task.service'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  public tasks?: Task[];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

  public onDeleteTask(taskToDelete: Task): void {
    this.taskService.deleteTask(taskToDelete).subscribe( _ => {
      this.tasks = this.tasks?.filter(task => task.id !==  taskToDelete.id);
    });
  }

  public onToggleReminder(task: Task): void {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  public onAddTask(taskToAdd: Task): void {
    this.taskService.addTask(taskToAdd).subscribe(task => {
      this.tasks?.push(task)
    });
  }

}

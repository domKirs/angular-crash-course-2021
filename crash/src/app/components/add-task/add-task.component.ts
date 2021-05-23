import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/interfaces/task.interface';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  public text: string = '';
  public day: string = '';
  public reminder: boolean = false;
  
  private newTask: Task = {text: '', day: '', reminder: false};

  constructor() { }

  ngOnInit(): void { }

  public onSubmit(): void {
    if(!this.text) {
      alert('Please add a task');
      return;
    }

    this.updateDataOfNewTask();
    this.onAddTask.emit(this.newTask);
    this.clearForm();
  }

  private updateDataOfNewTask(): void {
    this.newTask.text = this.text;
    this.newTask.day = this.day;
    this.newTask.reminder = this.reminder;
  }

  private clearForm(): void {
    this.text = '';
    this.day = '';
    this.reminder = false;

    this.updateDataOfNewTask();
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  tasks;
  id_task;
  edit_task;
  newTask: any;
  constructor(private _httpService: HttpService){
    // this.id_task = {title: ""};
  }
  // ngOnInit will run when the component is initialized, after the constructor method.
  ngOnInit(){
    // this.getTasksFromService();
    // this.readOneFromService();
    this.newTask = { title: "", description: ""};
    // this.edit_task = { title: "", description: "" }
  }
  getTasksFromService(){
    let observable = this._httpService.getTasks();
    observable.subscribe(data =>  { console.log("you move this data to the component file", data)
    this.tasks = data;
    })
  }
  readOneFromService(id:string){
    let observable = this._httpService.readOne(id);
    observable.subscribe(data => {console.log("Got one task from component file", data)
    this.id_task = data;
    })
  }
    onSubmit(){
      let observable = this._httpService.addTask(this.newTask);
      observable.subscribe(data => {
      console.log("got data from post back", data);
      this.newTask = { title: "", description: ""};
      this.getTasksFromService();
    });
  }
    delete(id:string){
      let observable = this ._httpService.delete(id);
      observable.subscribe(data => {console.log("successfully delete", data);
      this.getTasksFromService();
      });
    }

    showEditForm(id:string){
      let observable = this._httpService.readOne(id);
      observable.subscribe(data => {console.log("Got one task from component file", data)
      this.edit_task = data;
    })
  }
    onUpdate(id:string){
      this.edit_task = {'title': this.edit_task.title, 'description': this.edit_task.description};
      let observable = this._httpService.onUpdate(id, this.edit_task);
      observable.subscribe(data => {
        console.log(data);
        // this.id_task = this.updateInfo;
        // this.getTasksFromService();
      })
      this.edit_task = {title: "", description: ""};
    }
}


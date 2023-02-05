import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { AddFormComponent } from './components/add-form/add-form.component';
import { ButtonComponent } from './components/button/button.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { PendingTasksComponent } from './components/pending-tasks/pending-tasks.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    AddFormComponent,
    ButtonComponent,
    TaskItemComponent,
    PendingTasksComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

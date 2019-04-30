import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';

import { TodoListComponent } from './todo-list.component';

import { TodoService } from './todo.service';

@NgModule({
  declarations: [
    AppComponent,
	TodoListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
	FormsModule,
	AppRoutingModule
	
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

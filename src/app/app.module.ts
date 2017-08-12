import { JokeService } from './joke/joke.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JokeComponent } from './joke/joke.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    JokeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [JokeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';

import { NewLinePipe } from './shared/new-line.pipe';

import { DropdownModule } from 'ng2-bootstrap/components/dropdown';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    NewLinePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

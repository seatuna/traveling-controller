import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';

import { NewLinePipe } from './shared/new-line.pipe';

import { DropdownModule } from 'ng2-bootstrap/components/dropdown';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  { path: '', component: EventsComponent },
  { path: 'about', component: AboutComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    NewLinePipe,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DropdownModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

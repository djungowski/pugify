import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamsComponent } from './teams/teams.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CdkDrag, CdkDropList
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

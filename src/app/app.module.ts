import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule, MatButtonModule } from '@angular/material';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

import { AppComponent } from './components/app.component';
import { AppService } from './services/app.service';
import { ChildComponent } from './components/child.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatButtonModule,
    Ng2GoogleChartsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }

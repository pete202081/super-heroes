import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { FeatureCompComponent } from './feature-comp/feature-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    FeatureCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

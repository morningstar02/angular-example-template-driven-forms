import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExampleTemplateDrivenFormsModule } from './example-template-driven-forms/example-template-driven-forms.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ExampleTemplateDrivenFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
 
import { AppComponent } from './app.component';
import { FormulComponent } from './formul/formul.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormulComponent
  ],
  imports: [
    BrowserModule,
    // NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

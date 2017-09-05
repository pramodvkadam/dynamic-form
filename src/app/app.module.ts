import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserService } from './services/user-service';
import { FormComponent } from './form/form.component';
import {FormServiceService} from "./form/form-service.service";
import { DynamicControlComponent } from './form/dynamic-control/dynamic-control.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DynamicControlComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule
  ],
  providers: [UserService, FormServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

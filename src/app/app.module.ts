import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppTestComponent } from './app-test/app-test.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { TemplateReferenceComponent } from './template-reference/template-reference.component';
import { TwowayBindingComponent } from './twoway-binding/twoway-binding.component';
import { IfdirectiveComponent } from './ifdirective/ifdirective.component';
import { SwitchComponent } from './switch/switch.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { CompChildComponent } from './comp-child/comp-child.component';
import { CompPipesComponent } from './comp-pipes/comp-pipes.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AppTestComponent,
    StyleBindingComponent,
    EventBindingComponent,
    PropertyBindingComponent,
    ClassBindingComponent,
    TemplateReferenceComponent,
    TwowayBindingComponent,
    IfdirectiveComponent,
    SwitchComponent,
    NgforComponent,
    ComponentInteractionComponent,
    CompChildComponent,
    CompPipesComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [EmployeeService],
  bootstrap: [AppComponent],
})
export class AppModule {}

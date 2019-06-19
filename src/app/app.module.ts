import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout'; 
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgxFloatButtonModule } from 'ngx-float-button';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { StudentsListComponent } from './pages/students-list/students-list.component';
import { DetailCardComponent } from './components/detail-card/detail-card.component';
import { DetailCardInfoComponent } from './components/detail-card-info/detail-card-info.component';
import { ToggleSwitchComponent } from './components/toggle-switch/toggle-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    DetailPageComponent,
    StudentsListComponent,
    DetailCardComponent,
    DetailCardInfoComponent,
    ToggleSwitchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    AngularFontAwesomeModule,
    NgxFloatButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

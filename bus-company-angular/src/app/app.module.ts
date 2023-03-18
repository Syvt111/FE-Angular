import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './share/navbar/navbar.component';
import { FooterComponent } from './share/footer/footer.component';
import { BusListComponent } from './componet/bus/bus-list/bus-list.component';
import { BusUpdateComponent } from './componet/bus/bus-update/bus-update.component';
import {ReactiveFormsModule} from "@angular/forms";
import {BusCreateComponent} from "./componet/bus/bus-create/bus-create.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BusListComponent,
   BusCreateComponent,
    BusUpdateComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

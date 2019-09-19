import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LocationComponent } from './location/location.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { HomeComponent } from './home/home.component';
import { RouterModule,Routes } from '@angular/router';
import { AppHttpService } from 'src/app/app-http.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    RestaurantListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
        {path:'location',component:LocationComponent},
        {path:'',redirectTo:'location',pathMatch:'full'},
        {path:'home',component:HomeComponent},
        {path:'restaurant-view',component:RestaurantListComponent}
    ])
    ],
  providers: [AppHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }

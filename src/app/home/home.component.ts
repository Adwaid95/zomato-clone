import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AppHttpService } from 'src/app/app-http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public selectedLocationDetails: any;
  public restaurantId: any;
  public restaurantType: any;
  public data: any;
  public restaurantList;
  public restaurantCity:any;

  public searchRestaurant='';
  public allRestaurants;
  public selectedFromRestaurants='';
  
  constructor(private _route: ActivatedRoute, private router: Router, public appHttpService: AppHttpService) { }

  ngOnInit() {

    this.selectedLocationDetails = JSON.parse(localStorage.getItem("selectedLocation"));
    console.log(this.selectedLocationDetails);

    this.restaurantId = this.selectedLocationDetails.entity_id;
    this.restaurantType = this.selectedLocationDetails.entity_type;
    console.log(this.restaurantId);
    console.log(this.restaurantType);
    this.restaurantCity=this.selectedLocationDetails.city_name;
    console.log(this.restaurantCity);

    this.appHttpService.getLocationRestaurants(this.restaurantId, this.restaurantType).subscribe(
      data => {
        this.restaurantList = data["best_rated_restaurant"];
        console.log(this.restaurantList);

      });
      

      }

      onKey(event:any) {
        this.searchRestaurant = event.target.value;
        console.log(this.searchRestaurant);
        this.appHttpService.getAllRestaurants(this.restaurantId, this.restaurantType,this.searchRestaurant).subscribe(
          restaurants => { 
            this.allRestaurants = restaurants["restaurants"];
         },
          error => {
            console.log(error.errorMessage);
            console.log("Some error occured");
          });
      }

      selectAllRestaurants(value: any) {
        localStorage.setItem("selectedFromRestaurants", JSON.stringify(value));
        this.selectedFromRestaurants = value;
        this.allRestaurants=[];
        console.log(this.selectedFromRestaurants);
                
      }


    
}

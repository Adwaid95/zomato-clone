import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppHttpService } from 'src/app/app-http.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

  public resId: any;
  public restaurantName:any;
  public restaurantPic:any;
  public restaurantAddress:any;
  public restaurantThumbPic:any;
  public restaurantRating:any;
  public restaurantReview:any;

  public restaurantDetails: any;

  constructor(private _route: ActivatedRoute, private router: Router, public appHttpService: AppHttpService) { }

  ngOnInit() {

    this.restaurantDetails = JSON.parse(localStorage.getItem("selectedFromRestaurants"));
    console.log(this.restaurantDetails);

    this.resId = this.restaurantDetails.restaurant.R.res_id;
    console.log(this.resId);

    this.appHttpService.getRestaurantDetails(this.resId).subscribe(
    data => {
      // this.dataSvc.update(rides);
      this.restaurantName = data.name;
      this.restaurantPic = data["photos"];
      this.restaurantAddress = data["location"];
      this.restaurantThumbPic=data.thumb;
      this.restaurantRating=data["user_rating"];
      this.restaurantReview=data["all_reviews"].reviews;
      console.log(this.restaurantName);
      console.log(this.restaurantRating);
      console.log(this.restaurantReview);

  });

}

}

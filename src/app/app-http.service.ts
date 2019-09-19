import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AppHttpService {

  public getLocation: any[];
  public baseUrl='https://developers.zomato.com/api/v2.1';
  public userKey='d6a21b1070d0e31107ba40e3e6027af7';

  constructor(private _http:HttpClient) { }

       

public getLocations(searchQuery: String):any{  
  
    let headers = new HttpHeaders()
    headers = headers.set('user-key', this.userKey);
    let myResponse=this._http.get(this.baseUrl+'/locations?query='+ searchQuery,{headers: headers});
    console.log(myResponse);
    return myResponse;
}


public getLocationRestaurants(restaurantId: any,restaurantType:any):any{

  let headers = new HttpHeaders()
  headers = headers.set('user-key', this.userKey);
  let myResponse=this._http.get(this.baseUrl+'/location_details?entity_id='+restaurantId+'&entity_type='+restaurantType,{headers: headers});
  console.log(myResponse);
  return myResponse;

}


public getAllRestaurants(restaurantId: any,restaurantType:any, searchRestaurant:String):any{
  
    let headers = new HttpHeaders()
    headers = headers.set('user-key', this.userKey);
    let myResponse=this._http.get(this.baseUrl+'/search?entity_id='+restaurantId+'&entity_type='+restaurantType+'&q='+searchRestaurant,{headers: headers});
    console.log(myResponse);
    return myResponse;
  
  }

  public getRestaurantDetails(resId: any):any{
    
      let headers = new HttpHeaders()
      headers = headers.set('user-key', this.userKey);
      let myResponse=this._http.get(this.baseUrl+'/restaurant?res_id='+resId,{headers: headers});
      console.log(myResponse);
      return myResponse;
    
    }

    
  }

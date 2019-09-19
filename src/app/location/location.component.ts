import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppHttpService } from 'src/app/app-http.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit, OnDestroy {

  public locations;
  public selectedLocation='';
  public searchQuery = '';
  constructor(private _route: ActivatedRoute, private router: Router, public appHttpService: AppHttpService) { }

  requests;

  ngOnInit() {
        
  }

  onKey(event:any) {
    this.searchQuery = event.target.value;
    this.appHttpService.getLocations(this.searchQuery).subscribe(
      location_suggestions => { 
        this.locations = location_suggestions["location_suggestions"];
     },
      error => {
        console.log(error.errorMessage);
        console.log("Some error occured");
      });
  }

  selectLocation(value: any) {
    localStorage.setItem("selectedLocation", JSON.stringify(value))
    this.selectedLocation = value;
    this.locations = [];
    console.log(this.selectedLocation);
  }

  ngOnDestroy() {

  }
}

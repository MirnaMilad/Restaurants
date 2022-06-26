import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Home } from '../home.model';
import { UrlService } from '../url.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css'],
})
export class RestaurantsComponent implements OnInit {
  home: Home;
  isLoading: boolean = false;
  url = environment.baseUrl;
  constructor(
    private urlService: UrlService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getAllDate();
  }
  getAllDate() {
    this.isLoading = true;
    this.urlService.getData().subscribe(
      (res: Home) => {
        console.log(res);
        this.home = res;
        this.isLoading = false;
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
      }
    );
  }
  onLoadingRestaurant() {
    this.router.navigate(['/restaurant'], { relativeTo: this.route });
  }
}

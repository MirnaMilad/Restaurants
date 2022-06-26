import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Home } from '../home.model';
import { UrlService } from '../url.service';

@Component({
  selector: 'app-spring-rolls',
  templateUrl: './spring-rolls.component.html',
  styleUrls: ['./spring-rolls.component.css'],
})
export class SpringRollsComponent implements OnInit {
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
  onLoadingHome() {
    this.router.navigate(['/spring-rolls'], { relativeTo: this.route });
  }
}

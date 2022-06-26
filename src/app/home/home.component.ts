import { Component, OnInit } from '@angular/core';
import { UrlService } from '../url.service';
import { Home } from '../home.model';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

  

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  url = environment.baseUrl;
  home: Home;
  isLoading: boolean = false;
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
    this.router.navigate(['/'], { relativeTo: this.route });
  }
}
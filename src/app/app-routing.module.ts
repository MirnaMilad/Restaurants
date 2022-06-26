import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MarketComponent } from './market/market.component';
import { MeatComponent } from './meat/meat.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { SpringRollsComponent } from './spring-rolls/spring-rolls.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'markets', component: MarketComponent },
  { path: 'meat', component: MeatComponent },
  { path: 'restaurants', component: RestaurantsComponent },
  { path: 'spring-rolls', component: SpringRollsComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

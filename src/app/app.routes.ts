import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { ProductComponent } from './pages/product/product';
import { StoreComponent } from './pages/store/store';
import { AboutComponent } from './pages/about/about';
import { ProductDetailComponent } from './pages/product-detail/product-detail';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product', component: ProductComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'store', component: StoreComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '' }
];

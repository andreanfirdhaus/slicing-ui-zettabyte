import { Routes } from '@angular/router';
import { PricingComponent } from './page/pricing/pricing.component';
import { FeaturesComponent } from './page/features/features.component';
import { HomeComponent } from './page/home/home.component';
import { ServiceComponent } from './page/service/service.component';

export const routes: Routes = [
    { path: '', redirectTo: 'app-home', pathMatch: 'full' },
    { path: 'app-home', component: HomeComponent, title: 'Home' },
    { path: 'app-service', component: ServiceComponent, title: 'Service' },
    { path: 'app-pricing', component: PricingComponent, title: 'Pricing' },
    {
        path: 'app-features',
        component: FeaturesComponent,
        title: 'Features',
    },
];

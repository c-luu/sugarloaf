import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { YieldFormulaComponent } from './heroes/heroes.component';
import { HydrationComponent } from './hydration/hydration.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: YieldFormulaComponent },
  { path: 'yield', component: YieldFormulaComponent },
  { path: 'hydration/:id', component: HydrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

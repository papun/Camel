import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OltDetailsComponent } from './components/olt-details/olt-details.component';
import { OltDetailsOverviewComponent } from './components/olt-details-overview/olt-details-overview.component';
import { OltDashboardComponent } from './components/olt-dashboard/olt-dashboard.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';


const routes: Routes = [
  {path: '', component:OltDashboardComponent,children:[
    {path: '',component:OltDetailsComponent},
    {path: 'olt/:id',component:OltDetailsOverviewComponent},
    {path:'jobs',component:JobDetailsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

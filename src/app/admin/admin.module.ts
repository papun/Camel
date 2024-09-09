import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OltDetailsComponent } from './components/olt-details/olt-details.component';
import { OltDetailsOverviewComponent } from './components/olt-details-overview/olt-details-overview.component';
import { AdminRoutingModule } from './admin-routing.module';
import { OltDashboardComponent } from './components/olt-dashboard/olt-dashboard.component';
import { MaterialModule } from '../material.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from 'ngx-flexible-layout';
import { JobDetailsComponent } from './components/job-details/job-details.component';
import { provideHttpClient } from '@angular/common/http';
import { LoginService } from '../services/login.service';

@NgModule({
  declarations: [
    OltDetailsComponent,
    OltDetailsOverviewComponent,
    OltDashboardComponent,
    JobDetailsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  providers: [provideHttpClient(),LoginService],
})
export class AdminModule { }

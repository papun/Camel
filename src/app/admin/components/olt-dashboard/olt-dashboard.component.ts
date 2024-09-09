import { AfterViewInit, Component, inject, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay, filter } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { LoginService } from '../../../services/login.service';
@UntilDestroy()
@Component({
  selector: 'app-olt-dashboard',
  templateUrl: './olt-dashboard.component.html',
  styleUrl: './olt-dashboard.component.scss'
})
export class OltDashboardComponent implements AfterViewInit   {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  // loginService=inject(LoginService);
  userName?:string;
  constructor(private observer: BreakpointObserver, private router: Router,private loginService: LoginService) {
    this.userName = this.loginService.getUserName()!;
    console.log(this.loginService.username1);
  }
  ngAfterViewInit() {
    
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1), untilDestroyed(this))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });

    this.router.events
      .pipe(
        untilDestroyed(this),
        filter((e) => e instanceof NavigationEnd)
      )
      .subscribe(() => {
        if (this.sidenav.mode === 'over') {
          this.sidenav.close();
        }
      });
  }

  onLogout(){
    console.log('Logged Out');
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
}

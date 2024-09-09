import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OltDashboardComponent } from './olt-dashboard.component';

describe('OltDashboardComponent', () => {
  let component: OltDashboardComponent;
  let fixture: ComponentFixture<OltDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OltDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OltDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

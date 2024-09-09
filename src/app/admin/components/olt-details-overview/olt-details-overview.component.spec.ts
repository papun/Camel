import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OltDetailsOverviewComponent } from './olt-details-overview.component';

describe('OltDetailsOverviewComponent', () => {
  let component: OltDetailsOverviewComponent;
  let fixture: ComponentFixture<OltDetailsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OltDetailsOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OltDetailsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

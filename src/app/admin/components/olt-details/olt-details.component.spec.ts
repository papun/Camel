import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OltDetailsComponent } from './olt-details.component';

describe('OltDetailsComponent', () => {
  let component: OltDetailsComponent;
  let fixture: ComponentFixture<OltDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OltDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OltDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

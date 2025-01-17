import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OppDetailsComponent } from './opp-details.component';

describe('OppDetailsComponent', () => {
  let component: OppDetailsComponent;
  let fixture: ComponentFixture<OppDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OppDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OppDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

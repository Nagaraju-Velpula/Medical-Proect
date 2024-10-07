import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OppListComponent } from './opp-list.component';

describe('OppListComponent', () => {
  let component: OppListComponent;
  let fixture: ComponentFixture<OppListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OppListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OppListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

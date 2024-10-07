import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtodetailsComponent } from './protodetails.component';

describe('ProtodetailsComponent', () => {
  let component: ProtodetailsComponent;
  let fixture: ComponentFixture<ProtodetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProtodetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtodetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

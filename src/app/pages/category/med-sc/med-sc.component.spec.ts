import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedScComponent } from './med-sc.component';

describe('MedScComponent', () => {
  let component: MedScComponent;
  let fixture: ComponentFixture<MedScComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedScComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedScComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

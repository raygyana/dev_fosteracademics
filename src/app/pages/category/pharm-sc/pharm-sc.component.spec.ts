import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmScComponent } from './pharm-sc.component';

describe('PharmScComponent', () => {
  let component: PharmScComponent;
  let fixture: ComponentFixture<PharmScComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmScComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmScComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

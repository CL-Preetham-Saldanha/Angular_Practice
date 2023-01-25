import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleEmployeeComponentComponent } from './single-employee-component.component';

describe('SingleEmployeeComponentComponent', () => {
  let component: SingleEmployeeComponentComponent;
  let fixture: ComponentFixture<SingleEmployeeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleEmployeeComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleEmployeeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

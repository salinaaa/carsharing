import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormordersComponent } from './formorders.component';

describe('FormordersComponent', () => {
  let component: FormordersComponent;
  let fixture: ComponentFixture<FormordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormordersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

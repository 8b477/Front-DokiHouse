import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormErrorInfoComponent } from './form-error-info.component';

describe('FormErrorInfoComponent', () => {
  let component: FormErrorInfoComponent;
  let fixture: ComponentFixture<FormErrorInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormErrorInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormErrorInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

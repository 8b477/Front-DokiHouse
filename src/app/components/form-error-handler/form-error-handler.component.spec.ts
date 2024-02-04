import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormErrorHandlerComponent } from './form-error-handler.component';

describe('FormErrorHandlerComponent', () => {
  let component: FormErrorHandlerComponent;
  let fixture: ComponentFixture<FormErrorHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormErrorHandlerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormErrorHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

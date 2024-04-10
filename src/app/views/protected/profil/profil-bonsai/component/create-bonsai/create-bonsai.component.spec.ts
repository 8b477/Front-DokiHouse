import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBonsaiComponent } from './create-bonsai.component';

describe('CreateBonsaiComponent', () => {
  let component: CreateBonsaiComponent;
  let fixture: ComponentFixture<CreateBonsaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateBonsaiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateBonsaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

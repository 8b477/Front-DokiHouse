import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBonsaiComponent } from '../view/card-bonsai.component';

describe('CardBonsaiComponent', () => {
  let component: CardBonsaiComponent;
  let fixture: ComponentFixture<CardBonsaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardBonsaiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardBonsaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

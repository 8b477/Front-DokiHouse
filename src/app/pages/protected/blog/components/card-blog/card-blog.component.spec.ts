import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBlogComponent } from './card-blog.component';

describe('CardBlogComponent', () => {
  let component: CardBlogComponent;
  let fixture: ComponentFixture<CardBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardBlogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

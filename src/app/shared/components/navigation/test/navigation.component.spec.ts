import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationComponent } from '../view/navigation.component';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilPostComponent } from '../view/profil-post.component';

describe('ProfilPostComponent', () => {
  let component: ProfilPostComponent;
  let fixture: ComponentFixture<ProfilPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfilPostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfilPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

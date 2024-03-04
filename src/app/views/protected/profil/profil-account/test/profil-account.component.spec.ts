import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilAccountComponent } from '../view/profil-account.component';

describe('ProfilAccountComponent', () => {
  let component: ProfilAccountComponent;
  let fixture: ComponentFixture<ProfilAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfilAccountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfilAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

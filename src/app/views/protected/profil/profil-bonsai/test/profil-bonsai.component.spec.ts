import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilBonsaiComponent } from '../view/profil-bonsai.component';

describe('ProfilBonsaiComponent', () => {
  let component: ProfilBonsaiComponent;
  let fixture: ComponentFixture<ProfilBonsaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfilBonsaiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfilBonsaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

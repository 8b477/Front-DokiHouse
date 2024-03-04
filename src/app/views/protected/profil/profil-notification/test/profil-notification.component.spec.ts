import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilNotificationComponent } from '../view/profil-notification.component';

describe('ProfilNotificationComponent', () => {
  let component: ProfilNotificationComponent;
  let fixture: ComponentFixture<ProfilNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfilNotificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfilNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

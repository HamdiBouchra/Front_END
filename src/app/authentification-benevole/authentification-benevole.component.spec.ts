import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthentificationBenevoleComponent } from './authentification-benevole.component';

describe('AuthentificationBenevoleComponent', () => {
  let component: AuthentificationBenevoleComponent;
  let fixture: ComponentFixture<AuthentificationBenevoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthentificationBenevoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthentificationBenevoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

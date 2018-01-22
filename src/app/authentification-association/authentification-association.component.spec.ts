import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthentificationAssociationComponent } from './authentification-association.component';

describe('AuthentificationAssociationComponent', () => {
  let component: AuthentificationAssociationComponent;
  let fixture: ComponentFixture<AuthentificationAssociationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthentificationAssociationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthentificationAssociationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

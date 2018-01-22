import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthentifEntrepriseComponent } from './authentif-entreprise.component';

describe('AuthentifEntrepriseComponent', () => {
  let component: AuthentifEntrepriseComponent;
  let fixture: ComponentFixture<AuthentifEntrepriseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthentifEntrepriseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthentifEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

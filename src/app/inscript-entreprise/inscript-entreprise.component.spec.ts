import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptEntrepriseComponent } from './inscript-entreprise.component';

describe('InscriptEntrepriseComponent', () => {
  let component: InscriptEntrepriseComponent;
  let fixture: ComponentFixture<InscriptEntrepriseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscriptEntrepriseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

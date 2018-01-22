import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionAssociationComponent } from './inscription-association.component';

describe('InscriptionAssociationComponent', () => {
  let component: InscriptionAssociationComponent;
  let fixture: ComponentFixture<InscriptionAssociationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscriptionAssociationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionAssociationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

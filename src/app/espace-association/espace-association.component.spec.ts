import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceAssociationComponent } from './espace-association.component';

describe('EspaceAssociationComponent', () => {
  let component: EspaceAssociationComponent;
  let fixture: ComponentFixture<EspaceAssociationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspaceAssociationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspaceAssociationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceBenevoleComponent } from './espace-benevole.component';

describe('EspaceBenevoleComponent', () => {
  let component: EspaceBenevoleComponent;
  let fixture: ComponentFixture<EspaceBenevoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspaceBenevoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspaceBenevoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

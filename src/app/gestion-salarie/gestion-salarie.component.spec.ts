import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionSalarieComponent } from './gestion-salarie.component';

describe('GestionSalarieComponent', () => {
  let component: GestionSalarieComponent;
  let fixture: ComponentFixture<GestionSalarieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionSalarieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionSalarieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistiqueBenevoleComponent } from './statistique-benevole.component';

describe('StatistiqueBenevoleComponent', () => {
  let component: StatistiqueBenevoleComponent;
  let fixture: ComponentFixture<StatistiqueBenevoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatistiqueBenevoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatistiqueBenevoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

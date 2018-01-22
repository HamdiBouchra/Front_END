import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistiqueMissionComponent } from './statistique-mission.component';

describe('StatistiqueMissionComponent', () => {
  let component: StatistiqueMissionComponent;
  let fixture: ComponentFixture<StatistiqueMissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatistiqueMissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatistiqueMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

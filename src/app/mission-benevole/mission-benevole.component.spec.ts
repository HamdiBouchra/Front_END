import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionBenevoleComponent } from './mission-benevole.component';

describe('MissionBenevoleComponent', () => {
  let component: MissionBenevoleComponent;
  let fixture: ComponentFixture<MissionBenevoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissionBenevoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionBenevoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

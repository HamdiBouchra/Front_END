import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMissBenComponent } from './modal-miss-ben.component';

describe('ModalMissBenComponent', () => {
  let component: ModalMissBenComponent;
  let fixture: ComponentFixture<ModalMissBenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalMissBenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalMissBenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

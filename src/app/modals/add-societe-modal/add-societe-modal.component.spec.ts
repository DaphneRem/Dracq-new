import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSocieteModalComponent } from './add-societe-modal.component';

describe('AddSocieteModalComponent', () => {
  let component: AddSocieteModalComponent;
  let fixture: ComponentFixture<AddSocieteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSocieteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSocieteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

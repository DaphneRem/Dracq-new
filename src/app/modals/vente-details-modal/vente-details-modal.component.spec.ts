import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenteDetailsModalComponent } from './vente-details-modal.component';

describe('VenteDetailsModalComponent', () => {
  let component: VenteDetailsModalComponent;
  let fixture: ComponentFixture<VenteDetailsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenteDetailsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenteDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CypagoCardComponent } from './cypago-card.component';

describe('CypagoCardComponent', () => {
  let component: CypagoCardComponent;
  let fixture: ComponentFixture<CypagoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CypagoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CypagoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

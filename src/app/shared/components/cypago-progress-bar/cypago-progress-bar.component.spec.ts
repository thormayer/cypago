import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CypagoProgressBarComponent } from './cypago-progress-bar.component';

describe('CypagoProgressBarComponent', () => {
  let component: CypagoProgressBarComponent;
  let fixture: ComponentFixture<CypagoProgressBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CypagoProgressBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CypagoProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

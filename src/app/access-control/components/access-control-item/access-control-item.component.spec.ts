import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessControlItemComponent } from './access-control-item.component';

describe('AccessControlItemComponent', () => {
  let component: AccessControlItemComponent;
  let fixture: ComponentFixture<AccessControlItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessControlItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessControlItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

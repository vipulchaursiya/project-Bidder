import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsershowplanComponent } from './usershowplan.component';

describe('UsershowplanComponent', () => {
  let component: UsershowplanComponent;
  let fixture: ComponentFixture<UsershowplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsershowplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsershowplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

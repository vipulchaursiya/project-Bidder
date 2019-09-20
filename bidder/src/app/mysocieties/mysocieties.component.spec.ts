import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MysocietiesComponent } from './mysocieties.component';

describe('MysocietiesComponent', () => {
  let component: MysocietiesComponent;
  let fixture: ComponentFixture<MysocietiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MysocietiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MysocietiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

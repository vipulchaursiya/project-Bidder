import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowsocietiesComponent } from './showsocieties.component';

describe('ShowsocietiesComponent', () => {
  let component: ShowsocietiesComponent;
  let fixture: ComponentFixture<ShowsocietiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowsocietiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowsocietiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

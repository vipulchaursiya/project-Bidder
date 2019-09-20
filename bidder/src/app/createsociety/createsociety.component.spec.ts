import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatesocietyComponent } from './createsociety.component';

describe('CreatesocietyComponent', () => {
  let component: CreatesocietyComponent;
  let fixture: ComponentFixture<CreatesocietyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatesocietyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatesocietyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

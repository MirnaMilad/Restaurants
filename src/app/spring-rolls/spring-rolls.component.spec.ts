import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringRollsComponent } from './spring-rolls.component';

describe('springRollsComponent', () => {
  let component: SpringRollsComponent;
  let fixture: ComponentFixture<SpringRollsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpringRollsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringRollsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

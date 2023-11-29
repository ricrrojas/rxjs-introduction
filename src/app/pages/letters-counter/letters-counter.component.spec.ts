import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LettersCounterComponent } from './letters-counter.component';

describe('LettersCounterComponent', () => {
  let component: LettersCounterComponent;
  let fixture: ComponentFixture<LettersCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LettersCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LettersCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

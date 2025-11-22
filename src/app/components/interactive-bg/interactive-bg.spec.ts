import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractiveBg } from './interactive-bg';

describe('InteractiveBg', () => {
  let component: InteractiveBg;
  let fixture: ComponentFixture<InteractiveBg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InteractiveBg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteractiveBg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

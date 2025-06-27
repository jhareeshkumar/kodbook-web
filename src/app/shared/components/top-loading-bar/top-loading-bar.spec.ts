import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopLoadingBar } from './top-loading-bar';

describe('TopLoadingBar', () => {
  let component: TopLoadingBar;
  let fixture: ComponentFixture<TopLoadingBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopLoadingBar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopLoadingBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

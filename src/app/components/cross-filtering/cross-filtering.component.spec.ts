import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossFilteringComponent } from './cross-filtering.component';

describe('CrossFilteringComponent', () => {
  let component: CrossFilteringComponent;
  let fixture: ComponentFixture<CrossFilteringComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrossFilteringComponent]
    });
    fixture = TestBed.createComponent(CrossFilteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

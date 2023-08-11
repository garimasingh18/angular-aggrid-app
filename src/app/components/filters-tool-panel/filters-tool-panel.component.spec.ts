import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersToolPanelComponent } from './filters-tool-panel.component';

describe('FiltersToolPanelComponent', () => {
  let component: FiltersToolPanelComponent;
  let fixture: ComponentFixture<FiltersToolPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiltersToolPanelComponent]
    });
    fixture = TestBed.createComponent(FiltersToolPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

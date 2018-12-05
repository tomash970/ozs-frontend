import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkplaceDataComponent } from './workplace-data.component';

describe('WorkplaceDataComponent', () => {
  let component: WorkplaceDataComponent;
  let fixture: ComponentFixture<WorkplaceDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkplaceDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkplaceDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

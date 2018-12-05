import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OzsDataComponent } from './ozs-data.component';

describe('OzsDataComponent', () => {
  let component: OzsDataComponent;
  let fixture: ComponentFixture<OzsDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OzsDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OzsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

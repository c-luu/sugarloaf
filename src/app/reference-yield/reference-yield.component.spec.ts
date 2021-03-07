import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceYieldComponent } from './reference-yield.component';

describe('ReferenceYieldComponent', () => {
  let component: ReferenceYieldComponent;
  let fixture: ComponentFixture<ReferenceYieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferenceYieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenceYieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

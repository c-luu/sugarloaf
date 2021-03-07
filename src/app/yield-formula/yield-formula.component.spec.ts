import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YieldFormulaComponent } from './yield-formula.component';

describe('YieldFormulaComponent', () => {
  let component: YieldFormulaComponent;
  let fixture: ComponentFixture<YieldFormulaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YieldFormulaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YieldFormulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

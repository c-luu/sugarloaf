import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { YieldFormulaService } from '../hero.service';
import { YieldFormula } from '../hero';

@Component({
  selector: 'app-yield-formula',
  templateUrl: './yield-formula.component.html',
  styleUrls: ['./yield-formula.component.css'],
})
export class YieldFormulaComponent implements OnInit {
  refYield: YieldFormula;
  yield: YieldFormula;

  constructor(
    private route: ActivatedRoute,
    private yieldFormulaService: YieldFormulaService,
    private location: Location
  ) {
    this.refYield = new YieldFormula();
    this.yield = new YieldFormula();
  }

  ngOnInit(): void {
    this.getFormula();
  }

  getFormula(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.yieldFormulaService.getFormula(id).subscribe((yf) => (this.refYield = yf));
  }

  goBack(): void {
    this.location.back();
  }

  update(): void {
    this.yieldFormulaService
      .updateYieldFormula(this.refYield)
      .subscribe(() => this.goBack());
  }

  save(): void {
    this.yieldFormulaService.addYieldFormula(this.yield).subscribe((y) => {
      this.yield = y;
    });
  }

  calculate(): void {
    this.yield.calculate(this.refYield);
  }
}

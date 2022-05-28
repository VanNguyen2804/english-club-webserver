import { Component, OnInit } from '@angular/core';
import { BaseHeader } from '../base_header/base_header.component';

@Component({
  selector: 'boostrap-header',
  templateUrl: './boostrap-header.component.html',
  styleUrls: ['./boostrap-header.component.scss']
})
export class BoostrapHeaderComponent extends BaseHeader implements OnInit {

  constructor() {
    super();
   }

  public override ngOnInit(): void {
  }

}

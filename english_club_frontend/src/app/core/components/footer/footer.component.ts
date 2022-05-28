import { Component, OnInit } from '@angular/core';
import { BaseFooter } from './base_footer/base_footer.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent extends BaseFooter implements OnInit {

  constructor() {
    super();
   }

   public override ngOnInit(): void {
  }

}

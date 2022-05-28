import {Component, OnInit} from '@angular/core'

@Component({
  template: ''
})
export abstract class BaseHeader implements OnInit {
  public logo: any;
  public username: string = '';
  constructor() {
  }

  ngOnInit(): void {

  }
}

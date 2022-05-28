import {Component, Input, OnInit} from '@angular/core'

@Component({
  template: ''
})
export abstract class BaseFooter implements OnInit {
  @Input() public projectName : string = '';
  @Input() public version: string = '';
  constructor() {
  }

  ngOnInit(): void {

  }
}

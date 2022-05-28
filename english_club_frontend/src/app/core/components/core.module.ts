import { CUSTOM_ELEMENTS_SCHEMA, NgModule, Optional, SkipSelf } from "@angular/core";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { BoostrapHeaderComponent } from './header/boostrap-header/boostrap-header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BoostrapHeaderComponent,
    PageNotFoundComponent,
    AboutComponent
  ],
  imports: [
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    AboutComponent
  ],
  providers: [

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})

export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('Core Module is already loaded');
    }
  }
}

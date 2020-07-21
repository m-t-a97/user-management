import { NgModule } from '@angular/core';
import { SharedCommonModule } from 'src/app/modules/shared-common.module';
import { NavbarComponent } from './navbar/navbar.component';

const PUBLIC_COMPONENTS = [NavbarComponent];

@NgModule({
  imports: [SharedCommonModule],
  exports: [...PUBLIC_COMPONENTS],
  declarations: [...PUBLIC_COMPONENTS],
  providers: [],
})
export class CoreComponentsModule {}

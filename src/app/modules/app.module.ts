import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { SharedCommonModule } from './shared-common.module';
import { AngularFireModule } from '@angular/fire';
import { REGION } from '@angular/fire/functions';
import { environment } from 'src/environments/environment';
import { CoreComponentsModule } from '../components/core/exports';
import { UsersModule } from '../components/users/exports';
import { AppComponent } from '../components/core/app-component/app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    SharedCommonModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseKey),
    CoreComponentsModule,
    UsersModule,
  ],
  providers: [{ provide: REGION, useValue: 'europe-west2' }],
  bootstrap: [AppComponent],
})
export class AppModule {}

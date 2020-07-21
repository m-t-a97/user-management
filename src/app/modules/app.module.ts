import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { SharedCommonModule } from './shared-common.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { CoreComponentsModule } from '../components/core-components/exports';
import { UsersModule } from '../components/users/exports';
import { AppComponent } from '../components/core-components/app-component/app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    SharedCommonModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseKey),
    AngularFirestoreModule,
    CoreComponentsModule,
    UsersModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

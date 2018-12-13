import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AccountData } from 'projects/account-sub-project/src/app/account/account-data';
import { AccountModule } from 'projects/account-sub-project/src/app/account/account.module';
// tslint:disable-next-line:max-line-length
import { AccountContainerComponent } from 'projects/account-sub-project/src/app/account/containers/account-container/account-container.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './home/components/menu.component';
import { WelcomeComponent } from './home/components/welcome.component';
import { HomeContainerComponent } from './home/containers/home-container/home-container.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeContainerComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    // AccountModule,
    AppRoutingModule,
    UserModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(AccountData),
  ],
  providers: [],
  // entryComponents: [
  //   AccountContainerComponent
  // ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {
  // constructor(private injector: Injector) {
  //   const accountContainer = createCustomElement(AccountContainerComponent, { injector: this.injector });
  //   customElements.define('account-container', accountContainer);
  // }
}

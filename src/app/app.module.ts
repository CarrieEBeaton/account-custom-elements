import { HttpClientModule } from '@angular/common/http';
import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AccountModule } from 'projects/account-sub-project/src/app/account/account.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AccountData } from 'projects/account-sub-project/src/app/account/account-data';
// tslint:disable-next-line:max-line-length
import { AccountContainerComponent } from 'projects/account-sub-project/src/app/account/containers/account-container/account-container.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccountModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(AccountData),
  ],
  providers: [],
  entryComponents: [
    AccountContainerComponent
  ],
  bootstrap: []
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
      const accountContainer = createCustomElement(AccountContainerComponent, { injector: this.injector });
      customElements.define('account-container', accountContainer);
  }
}

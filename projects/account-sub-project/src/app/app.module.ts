import { HttpClientModule } from '@angular/common/http';
import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AccountData } from './account/account-data';
import { AccountModule } from './account/account.module';
import { AccountContainerComponent } from './account/containers/account-container/account-container.component';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    AccountModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(AccountData),
  ],
  providers: [],
  entryComponents: [
    AccountContainerComponent
  ]
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const accountContainer = createCustomElement(AccountContainerComponent, { injector: this.injector });
    customElements.define('account-container', accountContainer);
  }
}

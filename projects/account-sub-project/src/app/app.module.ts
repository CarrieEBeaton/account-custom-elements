import { HttpClientModule } from '@angular/common/http';
import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AccountData } from './account/account-data';
import { AccountModule } from './account/account.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { createCustomElement } from '@angular/elements';
import { AccountContainerComponent } from './account/containers/account-container/account-container.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AccountModule,
    AppRoutingModule,
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

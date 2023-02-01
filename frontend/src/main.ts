/// <reference types="@angular/localize" />

import { ApplicationRef, enableProdMode, ViewEncapsulation } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from "./environments/environment";
import { enableDebugTools } from "@angular/platform-browser";

if (environment.production) {
  enableProdMode()
}

platformBrowserDynamic()
  .bootstrapModule(AppModule, {
    defaultEncapsulation: ViewEncapsulation.None
  })
  .then(moduleRef => {
    if (!environment.production) {
      const applicationRef = moduleRef.injector.get(ApplicationRef);
      const appComponent = applicationRef.components[0];
      enableDebugTools(appComponent);
    }
  })
  .catch(err => console.error(err));

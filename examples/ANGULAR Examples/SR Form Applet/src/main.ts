import 'hammerjs';
import { enableProdMode, NgModuleRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

declare const SiebelAppFacade;

if (environment.production) {
  enableProdMode();
}

var m: NgModuleRef<AppModule>;

const createExample = (id: string, pm: any) => {
  let n19Helper: any;
  if (window["SiebelAppFacade"]) {
    n19Helper = new SiebelAppFacade.NexusBridge({ pm });
  }
  document.getElementById(id).insertAdjacentHTML("beforeend", "<app-root></app-root>");
  platformBrowserDynamic([{provide: "N19", useValue: n19Helper}]).bootstrapModule(AppModule)
    .then(module => {
      m = module;
    })
    .catch(err => console.error(err));
}

const unmountComponent = () => {
  m.destroy();
}

let extendedWindow = window as any;

extendedWindow.SiebelNG = {
  createExample,
  unmountComponent
}
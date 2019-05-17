import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
 
 
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ConfigModule } from '@spartacus/core';
import { StorefrontModule, translations, defaultCmsContentConfig } from '@spartacus/storefront';
 
@NgModule({
  imports:      [ BrowserModule, FormsModule, StorefrontModule.withConfig ({
  site: {
    baseSite: 'electronics-spa'   
  }, i18n: {
    resources: translations
  }
}),
ConfigModule.withConfigFactory(defaultCmsContentConfig)
 ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome.component';
import { GeneratorComponent } from './generator.component';
import { VerticalBarComponent } from './vertical-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    VerticalBarComponent,
    WelcomeComponent,
    GeneratorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

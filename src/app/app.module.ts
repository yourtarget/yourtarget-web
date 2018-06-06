import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome.component';
import { GeneratorComponent } from './generator.component';
import { VerticalBarComponent } from './vertical-bar.component';
import { ApiService } from './api.service';
import { FormsModule } from '@angular/forms';
import { StepComponent } from './step.component';
import { MembersComponent } from './members.component';


@NgModule({
  declarations: [
    AppComponent,
    VerticalBarComponent,
    WelcomeComponent,
    GeneratorComponent,
    StepComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

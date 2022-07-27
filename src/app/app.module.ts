import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExponentialStrengthPipe } from './pipes/exponential-strength.pipe';
import { CustomPipeComponent } from './components/custom-pipe/custom-pipe.component';
import { FlyingHeroesPipe } from './pipes/flying-heroes.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { CustomdirectiveComponent } from './components/customdirective/customdirective.component';

@NgModule({
  declarations: [
    AppComponent,
    ExponentialStrengthPipe,
    CustomPipeComponent,
    FlyingHeroesPipe,
    HighlightDirective,
    CustomdirectiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

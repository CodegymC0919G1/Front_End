import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShareModule} from 'src/app/share/share.module';
import { HeaderComponent } from './client/layout/header/header.component';
import { FooterComponent } from './client/layout/footer/footer.component';
import { SlideComponent } from './client/layout/slide/slide.component';

import { FormsModule } from '@angular/forms';
import { DangkiComponent } from './client/dangki/dangki.component';
import { KhoitaothongtinComponent } from './client/khoitaothongtin/khoitaothongtin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SlideComponent,
    DangkiComponent,
    KhoitaothongtinComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShareModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

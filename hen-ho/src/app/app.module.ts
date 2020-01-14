import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShareModule} from 'src/app/share/share.module';
import { HeaderComponent } from './client/layout/header/header.component';
import { FooterComponent } from './client/layout/footer/footer.component';
import { SlideComponent } from './client/layout/slide/slide.component';
import { QuanlyhopthuComponent } from './client/HopThu-Component/quanlyhopthu/quanlyhopthu.component';
import { XemthuComponent } from './client/HopThu-Component/xemthu/xemthu.component';
import { GuithuComponent } from './client/HopThu-Component/guithu/guithu.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SlideComponent,
    QuanlyhopthuComponent,
    XemthuComponent,
    GuithuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShareModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

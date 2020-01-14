import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShareModule} from 'src/app/share/share.module';
import { HeaderComponent } from './client/layout/header/header.component';
import { FooterComponent } from './client/layout/footer/footer.component';
import { SlideComponent } from './client/layout/slide/slide.component';
import { DanhSachHoiNhomComponent } from './quantrivien/quanlihoinhom/danh-sach-hoi-nhom/danh-sach-hoi-nhom.component';
import { ChiTietHoiNhomComponent } from './quantrivien/quanlihoinhom/chi-tiet-hoi-nhom/chi-tiet-hoi-nhom.component';
import { ThongTinCuaNhomComponent } from './quantrivien/quanlihoinhom/thong-tin-cua-nhom/thong-tin-cua-nhom.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SlideComponent,
    DanhSachHoiNhomComponent,
    ChiTietHoiNhomComponent,
    ThongTinCuaNhomComponent,
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

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



import { FormsModule } from '@angular/forms';
import { DangkiComponent } from './client/dangki/dangki.component';
import { KhoitaothongtinComponent } from './client/khoitaothongtin/khoitaothongtin.component';

import { DanhSachHoiNhomComponent } from './quantrivien/quanlihoinhom/danh-sach-hoi-nhom/danh-sach-hoi-nhom.component';
import { ChiTietHoiNhomComponent } from './quantrivien/quanlihoinhom/chi-tiet-hoi-nhom/chi-tiet-hoi-nhom.component';
import { ThongTinCuaNhomComponent } from './quantrivien/quanlihoinhom/thong-tin-cua-nhom/thong-tin-cua-nhom.component';
import { DangNhapComponent } from './client/login/dang-nhap/dang-nhap.component';
import { TopComponent } from './client/top100/top/top.component';
import { DangThongBaoComponent } from './quantrivien/thong-bao/dang-thong-bao/dang-thong-bao.component';
import { LoginAdminComponent } from './quantrivien/login-admin/login-admin/login-admin.component';
import { HeaderQTVComponent } from './quantrivien/layout/header-qtv/header-qtv.component';
import { FooterQTVComponent } from './quantrivien/layout/footer-qtv/footer-qtv.component';
import { DangbaiComponent } from './client/dangbai/dangbai/dangbai.component';
import { XembaidangComponent } from './quantrivien/quanlybaidang/xembaidang/xembaidang.component';
import { SuabaidangComponent } from './quantrivien/quanlybaidang/suabaidang/suabaidang.component';
import { DanhsachbaidangComponent } from './quantrivien/quanlybaidang/danhsachbaidang/danhsachbaidang.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SlideComponent,

    QuanlyhopthuComponent,
    XemthuComponent,
    GuithuComponent,


    DangkiComponent,
    KhoitaothongtinComponent,

    DanhSachHoiNhomComponent,
    ChiTietHoiNhomComponent,
    ThongTinCuaNhomComponent,
    DangNhapComponent,
    TopComponent,
    DangThongBaoComponent,
    LoginAdminComponent,

    HeaderQTVComponent,
    FooterQTVComponent,
    DangbaiComponent,
    XembaidangComponent,
    SuabaidangComponent,
    DanhsachbaidangComponent




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

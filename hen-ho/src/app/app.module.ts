import { BrowserModule } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShareModule} from 'src/app/share/share.module';
import { HeaderComponent } from './client/layout/header/header.component';
import { FooterComponent } from './client/layout/footer/footer.component';
import { SlideComponent } from './client/layout/slide/slide.component';
import { QuanlyhopthuComponent } from './client/HopThu-Component/quanlyhopthu/quanlyhopthu.component';
import { XemthuComponent } from './client/HopThu-Component/xemthu/xemthu.component';
import { GuithuComponent } from './client/HopThu-Component/guithu/guithu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DangkiComponent } from './client/dangki/dangki.component';
import { KhoitaothongtinComponent } from './client/khoitaothongtin/khoitaothongtin.component';
import { DanhSachHoiNhomComponent } from './quantrivien/quanlihoinhom/danh-sach-hoi-nhom/danh-sach-hoi-nhom.component';
import { ChiTietHoiNhomComponent } from './quantrivien/quanlihoinhom/chi-tiet-hoi-nhom/chi-tiet-hoi-nhom.component';
import { ThongTinCuaNhomComponent } from './quantrivien/quanlihoinhom/thong-tin-cua-nhom/thong-tin-cua-nhom.component';
import { TopComponent } from './client/top100/top/top.component';
import { DangThongBaoComponent } from './quantrivien/thong-bao/dang-thong-bao/dang-thong-bao.component';
import { LoginAdminComponent } from './quantrivien/login-admin/login-admin/login-admin.component';
import { HeaderQTVComponent } from './quantrivien/layout/header-qtv/header-qtv.component';
import { FooterQTVComponent } from './quantrivien/layout/footer-qtv/footer-qtv.component';
import { DangbaiComponent } from './client/dangbai/dangbai/dangbai.component';
import { XembaidangComponent } from './quantrivien/quanlybaidang/xembaidang/xembaidang.component';
import { SuabaidangComponent } from './quantrivien/quanlybaidang/suabaidang/suabaidang.component';
import { DanhsachbaidangComponent } from './quantrivien/quanlybaidang/danhsachbaidang/danhsachbaidang.component';

import { XemloimoiketbanComponent } from './client/ketban/xemloimoiketban/xemloimoiketban.component';
import { GuiloimoiketbanComponent } from './client/ketban/guiloimoiketban/guiloimoiketban.component';
import { XemdanhsachbanbeComponent } from './client/ketban/xemdanhsachbanbe/xemdanhsachbanbe.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MDBBootstrapModule, DropdownModule  } from 'angular-bootstrap-md';
import { ThongtinchokhachComponent } from './client/XemThongTinWebsite/thongtinchokhach/thongtinchokhach.component';
import { ThongtinchothanhvienComponent } from './client/XemThongTinWebsite/thongtinchothanhvien/thongtinchothanhvien.component';
import { ThongtinchoquantrivienComponent } from './client/XemThongTinWebsite/thongtinchoquantrivien/thongtinchoquantrivien.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DangNhapComponent } from './client/login/dang-nhap/dang-nhap.component';
import { AuthServiceConfig } from 'angular-6-social-login';
import { httpInterceptorProviders } from './auth/auth-interceptor';
import { HttpClientModule } from '@angular/common/http';
import { ListThongbaoComponent } from './quantrivien/thong-bao/list-thongbao/list-thongbao.component';
import { QuanLyThanhVienComponent } from './quantrivien/quanlythanhvien/quan-ly-thanh-vien/quan-ly-thanh-vien.component';
import { PhanHoiComponent } from './quantrivien/quanlythanhvien/phan-hoi/phan-hoi.component';
import { LayoutAdminComponent } from './quantrivien/layout/layout-admin/layout-admin.component';
import { ThongbaoDetalComponent } from './quantrivien/thong-bao/thongbao-detal/thongbao-detal.component';


export function getAuthServiceConfigs() {
  const config = new AuthServiceConfig(
    []
  );
  return config;
}
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
    DanhsachbaidangComponent,
    ThongtinchokhachComponent,
    ThongtinchothanhvienComponent,
    ThongtinchoquantrivienComponent,
    ListThongbaoComponent,
    QuanLyThanhVienComponent,
    PhanHoiComponent,
    LayoutAdminComponent,
    XemloimoiketbanComponent,
    GuiloimoiketbanComponent,
    XemdanhsachbanbeComponent,
    LayoutAdminComponent,
    ThongbaoDetalComponent
  ],

  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ShareModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    DropdownModule.forRoot(),
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  bootstrap: [AppComponent],
  entryComponents: [GuithuComponent],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs,
    },
    httpInterceptorProviders
  ]

})
export class AppModule { }

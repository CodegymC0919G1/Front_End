import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShareModule} from 'src/app/share/share.module';
import { HeaderComponent } from './client/layout/header/header.component';
import { FooterComponent } from './client/layout/footer/footer.component';
import { SlideComponent } from './client/layout/slide/slide.component';
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

    DangNhapComponent,
    TopComponent,
    DangThongBaoComponent,
    LoginAdminComponent

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
    ShareModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DangNhapComponent } from './client/login/dang-nhap/dang-nhap.component';
import { TopComponent } from './client/top100/top/top.component';
import { DangThongBaoComponent } from './quantrivien/thong-bao/dang-thong-bao/dang-thong-bao.component';



const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

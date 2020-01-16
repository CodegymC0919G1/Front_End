import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DangNhapComponent } from './client/login/dang-nhap/dang-nhap.component';
import { TopComponent } from './client/top100/top/top.component';
import { DangThongBaoComponent } from './quantrivien/thong-bao/dang-thong-bao/dang-thong-bao.component';

<<<<<<< HEAD


const routes: Routes = [];
=======
const routes: Routes = [
];
>>>>>>> 4c636767d660bfbc41215940533e3bc7e18459b6

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DangkiComponent } from './client/dangki/dangki.component';
import { KhoitaothongtinComponent } from './client/khoitaothongtin/khoitaothongtin.component';

const routes: Routes = [
  { path: '', redirectTo: 'thanhvien', pathMatch: 'full' },
  { path: 'register', component: DangkiComponent },
  { path: 'updateInfor', component: KhoitaothongtinComponent},
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

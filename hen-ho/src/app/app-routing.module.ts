import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuithuComponent } from './client/HopThu-Component/guithu/guithu.component';
import { XemthuComponent } from './client/HopThu-Component/xemthu/xemthu.component';
import { QuanlyhopthuComponent } from './client/HopThu-Component/quanlyhopthu/quanlyhopthu.component';


const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

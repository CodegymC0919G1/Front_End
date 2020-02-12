import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuanlyhopthuComponent } from './client/HopThu-Component/quanlyhopthu/quanlyhopthu.component';
import { XemthuComponent } from './client/HopThu-Component/xemthu/xemthu.component';
import { ThongtinchokhachComponent } from './client/XemThongTinWebsite/thongtinchokhach/thongtinchokhach.component';

const routes: Routes = [
  {
    path: "listthu", component: QuanlyhopthuComponent
  }, {
    path: "xemthu/:id", component: XemthuComponent
  },
  {
    path: "thongtinchokhach",component: ThongtinchokhachComponent
  }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

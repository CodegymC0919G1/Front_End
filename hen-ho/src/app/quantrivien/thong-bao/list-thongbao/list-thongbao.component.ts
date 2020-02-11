import { Component, OnInit } from '@angular/core';
import { ThongBaoService } from './../../../service/thongbao/thongbao.service';
import { ThongBao } from './../../../model/thongbao';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ThongbaoDetalComponent } from '../thongbao-detal/thongbao-detal.component';


@Component({
  selector: 'app-list-thongbao',
  templateUrl: './list-thongbao.component.html',
  styleUrls: ['./list-thongbao.component.scss']
})
export class ListThongbaoComponent implements OnInit {
  thongbao: ThongBao;
  thongbaoForm: FormGroup;
  thongbaoList: ThongBao[] = [];
  keyword: string;

  constructor(
    private thongbaoService: ThongBaoService,
    private fb: FormBuilder,
    private activatedRouter: ActivatedRoute
  ) {}

  ngOnInit() {
    this.thongbaoService.getAllThongBao().subscribe(
      next => (this.thongbaoList = next),
      error => (this.thongbaoList = [])
    );
  }

  // xemChiTiet() {
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.disableClose = true;
  //   dialogConfig.id = 'modal-component';
  //   dialogConfig.height = '100%';
  //   dialogConfig.width = '40%';
  //   const modalDialog = this.matDialog.open(ThongbaoDetalComponent, dialogConfig);
  // }

}

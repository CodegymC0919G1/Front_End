import { ThongBaoService } from './../../../service/thongbao/thongbao.service';
import { ThongBao } from './../../../model/thongbao';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-thongbao-detal',
  templateUrl: './thongbao-detal.component.html',
  styleUrls: ['./thongbao-detal.component.scss']
})
export class ThongbaoDetalComponent implements OnInit {
  thongbao: ThongBao;
  tbForm: FormGroup;

  constructor(
    private tbService: ThongBaoService,
    private activatedRouter: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = +this.activatedRouter.snapshot.paramMap.get('id');
    this.tbService.getThongBao(id).subscribe(
      next => (this.thongbao = next),
      error => {
          console.log(error);
          this.thongbao = null;
      }
  );
  }

}

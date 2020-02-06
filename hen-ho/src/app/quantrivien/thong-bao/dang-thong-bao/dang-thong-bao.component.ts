import { ThongBaoService } from './../../../service/thongbao/thongbao.service';
import { ThongBao } from './../../../model/thongbao';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dang-thong-bao',
  templateUrl: './dang-thong-bao.component.html',
  styleUrls: ['./dang-thong-bao.component.scss']
})
export class DangThongBaoComponent implements OnInit {
  thongbao: ThongBao;
  thongbaoForm: FormGroup;

  constructor(
    private thongbaoService: ThongBaoService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.thongbaoForm = this.fb.group({
      tieuDe: ['', [Validators.required]],
      noiDung: ['', [Validators.required]]
    });
  }
  onSubmit() {
    if (this.thongbaoForm.valid) {
        const { value } = this.thongbaoForm;
        const data = {
            ...this.thongbao,
            ...value,
            ...this.thongbao.thoiGianThongBao = new Date()
        };
        this.thongbaoService.createThongBao(data).subscribe(
            next => {
                this.router.navigate(['thongbao/list']);
            },
            error => console.log(error)
        );
    }
}

}

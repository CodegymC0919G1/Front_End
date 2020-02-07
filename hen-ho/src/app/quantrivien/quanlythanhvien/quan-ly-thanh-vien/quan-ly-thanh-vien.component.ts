import { Component, OnInit } from '@angular/core';
import { QlThanhVien } from 'src/app/model/qlThanhVien';
import { QuanlythanhvienService } from 'src/app/service/quanlythanhvien/quanlythanhvien.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-quan-ly-thanh-vien',
  templateUrl: './quan-ly-thanh-vien.component.html',
  styleUrls: ['./quan-ly-thanh-vien.component.scss']
})
export class QuanLyThanhVienComponent implements OnInit {
  thanhviens: Array<QlThanhVien>;
  thanhvien: QlThanhVien = new QlThanhVien();
  formRadio: FormGroup;
  constructor(private thanhVienService: QuanlythanhvienService, private fb: FormBuilder) { }

  ngOnInit() {
    this.onSubmit('a');
    this.formRadio = this.fb.group({
      isVip: ['all']
    });
  }
  changeVip(id: number) {
    this.thanhVienService.getThanhVien(id).subscribe(
      data => {
        this.thanhvien = data;
        this.thanhvien.vip = !this.thanhvien.vip;
        this.thanhVienService.changeVip(this.thanhvien).subscribe(
          data1 => console.log(this.thanhvien.vip)
        );
      });
  }
  onSubmit(form) {
    console.log(form);
    this.thanhVienService.getAll(form.isVip).subscribe(
      data => this.thanhviens = data
    );

  }
}


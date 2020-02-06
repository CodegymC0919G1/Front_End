import { NhomThanhVien } from './../../../model/hoinhom/nhomthanhvien';
import { Component, OnInit } from "@angular/core";
import { HoiNhomService } from "./../../../service/hoinhom/hoinhom.service";
import { HoiNhom } from '../../../model/hoinhom/hoinhom';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: "app-thong-tin-cua-nhom",
  templateUrl: "./thong-tin-cua-nhom.component.html",
  styleUrls: ["./thong-tin-cua-nhom.component.scss"]
})
export class ThongTinCuaNhomComponent implements OnInit {

  constructor(
    private hoiNhomService: HoiNhomService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
    ) {}
    nhomThanhVien:NhomThanhVien;
    hoiNhom: HoiNhom;
  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.hoiNhomService.getHoiNhom(id).subscribe(
      next => {
        this.hoiNhom=next;
      },
    );
  }
  deleteNhomThanhVien(i) {
      this.hoiNhomService.deleteNhomThanhVien(i).subscribe(
        next => {
          this.router.navigate(["/danhsachhoinhom"]);
        },
       );
  }
  canhBaoHoiNhom() {
       this.hoiNhom.soLanCanhCao++;
       this.hoiNhomService.updateSoLanCanhCao(this.hoiNhom).subscribe(
        next => {
          this.router.navigate(["/danhsachhoinhom"]);
        },
       );
    }
  }


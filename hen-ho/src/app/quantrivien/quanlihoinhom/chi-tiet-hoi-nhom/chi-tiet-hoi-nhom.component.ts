import { HoiNhom } from './../../../model/hoinhom/hoinhom';
import { NhomThanhVien } from "./../../../model/hoinhom/nhomthanhvien";
import { Component, OnInit } from "@angular/core";
import { HoiNhomService } from "./../../../service/hoinhom/hoinhom.service";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-chi-tiet-hoi-nhom",
  templateUrl: "./chi-tiet-hoi-nhom.component.html",
  styleUrls: ["./chi-tiet-hoi-nhom.component.scss"]
})
export class ChiTietHoiNhomComponent implements OnInit {
  constructor(
    private hoiNhomService: HoiNhomService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  hoiNhom:HoiNhom;
  nhomThanhVien: NhomThanhVien;
  // nhomThanhVienList:NhomThanhVien[]=[];
  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get("id");
    this.hoiNhomService.getNhomThanhVien(id).subscribe(
      data => {
        this.nhomThanhVien=data;
        console.log(data);
      },
    );
    this.hoiNhomService.getHoiNhom(id).subscribe(
      data => {
        this.hoiNhom=data;
        console.log(data);
      },
    );
  }
}

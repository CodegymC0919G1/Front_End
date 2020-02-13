import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ThanhvienService } from 'src/app/service/thanhvien/thanhvien.service';
import { Thanhvien } from 'src/app/model/thanhvien';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';

function comparePassword(c: AbstractControl) {
  const v = c.value;
  return (v.password === v.confirmPassword) ? null : {
    passwordnotmatch: true
  };
}

function compareEmail(c: AbstractControl) {
  const v = c.value;
  return (v.email === v.confirmEmail) ? null : {
    emailnotmatch: true
  };
}
declare var require: any




@Component({
  selector: 'app-dangki',
  templateUrl: './dangki.component.html',
  styleUrls: ['./dangki.component.scss']
})
export class DangkiComponent implements OnInit {

  registerForm: FormGroup;

  thanhvien: Thanhvien = new Thanhvien();

  user: User;
  submitted = false;

  constructor(private thanhvienService: ThanhvienService, private fb: FormBuilder, private router: Router,) { }



  ngOnInit() {

    this.registerForm = this.fb.group({
      hoTen: ['', [Validators.required,]],
      ngaySinh: ['', [Validators.required, Validators.pattern(/^(19[4-9][0-9]|2001|2000)\-(0[1-9]|1[0-2])\-((0[1-9])|([1-2][0-9])|(3[0-1]))$/)]],
      diaChi: ['', [Validators.required,]],
      ngheNghiep: ['', [Validators.required,]],
      gioiTinh: ['', [Validators.required,]],
      userName: ['', [Validators.required,]],



      pwGroup: this.fb.group({
        password: ['', [Validators.required, Validators.pattern(/^[A-Za-z]\w{7,14}$/)]],
        confirmPassword: ['', [Validators.required,]],

      }, {
        validators: comparePassword,
      }),
      pfGroup: this.fb.group({
        email: ['', [Validators.required, Validators.email, Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]],
        confirmEmail: ['', [Validators.required,]],
      }, {
        validators: compareEmail,
      })
    });
  }
  newThanhvien(): void {
    this.submitted = false;
    this.router.navigate(['updateInfor', { id: this.thanhvien.idThanhVien }]);
  }
  save() {
    const bcrypt = require("bcryptjs");
    bcrypt.hash(this.registerForm.value.pwGroup.password, 12, (err, hashedPassword) => {
      if (err) {
        return err;
      }
      this.user=new User(this.registerForm.value.userName,hashedPassword)
    });
    this.thanhvien.user=this.user;
    this.thanhvien.email = this.registerForm.value.pfGroup.email;
    this.thanhvien.hoTen = this.registerForm.value.hoTen
    this.thanhvien.diaChi = this.registerForm.value.diaChi;
    this.thanhvien.ngheNghiep = this.registerForm.value.ngheNghiep;
    this.thanhvien.ngaySinh = new Date(this.registerForm.value.ngaySinh);
    this.thanhvien.gioiTinh = this.registerForm.value.gioiTinh;
    this.thanhvien.ngayThamGia = new Date();


    this.thanhvienService.createThanhvien(this.thanhvien)
      .subscribe(
        data => {
          console.log(data)
          this.thanhvien.idThanhVien = data.idThanhVien;
          this.submitted = true;
        },
        error => console.log(error));
    this.thanhvien = new Thanhvien();
  }

  onSubmit() {
    this.save();
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Thanhvien } from 'src/app/model/thanhvien';
import { ThanhvienService } from 'src/app/service/thanhvien/thanhvien.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-khoitaothongtin',
  templateUrl: './khoitaothongtin.component.html',
  styleUrls: ['./khoitaothongtin.component.scss']
})
export class KhoitaothongtinComponent implements OnInit {

  id:number;
  public selectedFile;
  public event1;
  imgURL: any;
  receivedImageData: any;
  base64Data: any;
  convertedImage: any;


  registerForm: FormGroup;
  thanhvien: Thanhvien = new Thanhvien();
  submitted = false;
  

  constructor(private thanhvienService:ThanhvienService,private fb: FormBuilder,private httpClient: HttpClient,private route:ActivatedRoute) {
    this.id =parseInt(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    this.thanhvienService.getThanhvien(this.id).subscribe(data=>{
      console.log(data);
      this.thanhvien=data;
    })
    this.registerForm = this.fb.group({
      tinhTrangHonNhan: [''],
      mucDichThamGia: [''],
      anhDaiDien:['']
    });
  }
  newThanhvien(): void {
    this.submitted = false;
 
  }
  save() {
    const uploadData = new FormData();
  uploadData.append('myFile', this.selectedFile, this.selectedFile.name);


 this.thanhvienService.uploadImg( uploadData,this.id).subscribe(
               res => {console.log(res);
                       this.receivedImageData = res;
                       this.base64Data = this.receivedImageData.pic;
                       this.convertedImage = 'data:image/jpeg;base64,' + this.base64Data; 
                       this.thanhvien.anhDaiDien=this.registerForm.value.anhDaiDien
                       this.thanhvien.tinhTrangHonNhan=this.registerForm.value.tinhTrangHonNhan
                      
                       alert(this.thanhvien.tinhTrangHonNhan);
                       alert(this.thanhvien.mucDichThamGia);
                   
                       this.thanhvienService.putThanhvien(this.thanhvien)
                         .subscribe(
                           data => {
                             console.log(data);
                             this.submitted = true;
                           },
                           error => console.log(error));
                      },
               err => console.log('Error Occured duringng saving: ' + err)
            );

 }

  onSubmit() {
    this.save();
  }
  click(ev){
    this.thanhvien.mucDichThamGia = ev.target.defaultValue;
 }
 //ảnh đại diện

 public  onFileChanged(event) {
  console.log(event);
  this.selectedFile = event.target.files[0];

  // Below part is used to display the selected image
  let reader = new FileReader();
  reader.readAsDataURL(event.target.files[0]);
  reader.onload = (event2) => {
    this.imgURL = reader.result;
 };
}
}


import { HoiNhom } from './hoinhom/hoinhom';
import { QlThanhVien } from 'src/app/model/qlThanhVien';

export class Baidang {
  idBaiDang: number;
  tieuDe: string;
  anh: string;
  noiDung: string;
  xoa: boolean;
  thoiGianDang: Date;
  thanhVienDang: QlThanhVien;
  idHoiNhom: HoiNhom;
  // contructor( idBaiDang,tieuDe,anh,noiDung,xoa,thoiGianDang,thanhVienDang,idHoiNhom) {
  //     this.idBaiDang=idBaiDang;
  //     this.tieuDe=tieuDe;
  //     this.anh=anh;
  //     this.noiDung=noiDung;
  //     this.xoa=xoa;
  //     this.thoiGianDang=thoiGianDang;
  //     this.thanhVienDang=thanhVienDang;
  //     this.idHoiNhom=idHoiNhom;
  // }
}


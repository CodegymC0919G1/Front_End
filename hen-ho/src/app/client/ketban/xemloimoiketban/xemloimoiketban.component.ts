import { KetbanService } from './../../../service/ketban/ketban.service';
import { Component, OnInit } from '@angular/core';
import { KetBan } from 'src/app/model/ketban';

@Component({
  selector: 'app-xemloimoiketban',
  templateUrl: './xemloimoiketban.component.html',
  styleUrls: ['./xemloimoiketban.component.scss']
})
export class XemloimoiketbanComponent implements OnInit {
  ketBan:KetBan;
  ketBanList : KetBan[]=[];
  constructor(private ketBanService: KetbanService) { }

  ngOnInit() {
    this.ketBanService.getAllKetBan().subscribe(data=>{
      this.ketBanList=data;
      console.log(data)
    });
  }

}

import { Top100Service } from './../../../service/top100/top100.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {
  TopForm: FormGroup;
  topList = [];

  constructor(
    private top100: Top100Service,
    private fb: FormBuilder,
    private activatedRouter: ActivatedRoute
  ) { }

  ngOnInit() {
    this.top100.getTop100().subscribe(
      next => (this.topList = next),
      error => (this.topList = [])
    );
  }

}

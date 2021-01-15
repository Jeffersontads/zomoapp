import { async } from '@angular/core/testing';
import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController, NavParams } from '@ionic/angular';
import { getLocaleDateFormat } from '@angular/common';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-essencia',
  templateUrl: './essencia.page.html',
  styleUrls: ['./essencia.page.scss'],
})
export class EssenciaPage implements OnInit {
  essencesData: any;
  
  constructor(
    private apiService: ApiService,
    private router: Router,
    private storage: Storage,
  ) { }

  ngOnInit() {
    this.getData();
  }

  
  async essenceView(id: any) {
    await this.storage.set('id', id);
    await this.router.navigateByUrl('single-post');
  }

  async getData() {
    await this.apiService.getAPIDataEssences().subscribe(res => {
      console.log(res);
      this.essencesData = res;
      console.log(this.essencesData);
    }, err => {
      console.log(err);
    });
  }
}
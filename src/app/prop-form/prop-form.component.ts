import { Router } from '@angular/router';
import { GriddataService } from './../_services/griddata.service';
import { Property } from './../_models/property';
import { AlertService } from './../_services/alert.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prop-form',
  templateUrl: './prop-form.component.html',
  styleUrls: ['./prop-form.component.css']
})
export class PropFormComponent implements OnInit {
  model: any = {};
  loading=false;
  

  constructor(
      private router: Router,
      private userService: GriddataService,
      private alertService: AlertService) { }
  

  ngOnInit() {
  }

  register()
  {
    this.loading = true;
      
        this.userService.create(this.model).subscribe(
            data => {
                this.alertService.success('Registration successful', true);
                this.router.navigate(['register']);
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
  }

}

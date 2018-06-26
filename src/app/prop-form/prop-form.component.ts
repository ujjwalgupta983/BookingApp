import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prop-form',
  templateUrl: './prop-form.component.html',
  styleUrls: ['./prop-form.component.css']
})
export class PropFormComponent implements OnInit {
  model: any = {};
  loading="false";
  edit="false";
  public fieldArray: Array<any> = [];
  public newAttribute: any = {};
    

    addFieldValue() {
        this.fieldArray.push(this.newAttribute)
        this.newAttribute = {};
    }

    EditFieldValue(index) {
      
      this.fieldArray.push(this.newAttribute)
      this.newAttribute = {};
    }
  constructor() { }

  ngOnInit() {
  }

}

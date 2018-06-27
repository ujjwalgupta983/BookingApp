import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Property } from './../_models/property';
import { GriddataService } from './../_services/griddata.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablelist',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
    datas:any;
    private data_url:"http://localhost:57055/api/Assests"
    public gridservice:GriddataService;
    public prop:Property[]=[];
    public pro:any;
    testResponse;
      
getdata(){
   return this.http.get('http://localhost:57055/api/Assests');
}
getValues()
{
    this.getdata().subscribe(data=>{
        console.log(data);
        let obj=JSON.stringify(data);
        console.log(obj);
        this.prop=JSON.parse(obj);
        console.log(this.prop);
        console.log(this.prop[0].propName);
    

    });
}
GenerateTablelist() {
    //Build an array containing Customer records.
    console.log("Hello");
    
    let customers = new Array();
    customers.push(["Customer Id", "Name", "Country","Abhinav"])
    
    //Create a HTML Table element.
    let table:HTMLTableElement;
    table = document.createElement('table');
    table.border = "1";
 
    //Get the count of columns.
    let columnCount = customers[0].length;
 
    //Add the header row.
    let row = table.insertRow(-1);
    for (let i = 0; i < columnCount; i++) {
        let headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }
 
    //Add the data rows.
    for (let i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (let j = 0; j < columnCount; j++) {
            let cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
 
    let dvTable = document.getElementById("dvTable");
    dvTable.innerHTML = "";
    dvTable.appendChild(table);
}
constructor(private http: HttpClient) { }
  ngOnInit() {
     this.getdata();
     this.getValues();
    this.GenerateTablelist();
  }

}

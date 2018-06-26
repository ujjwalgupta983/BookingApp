import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablelist',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
   GenerateTablelist() {
    //Build an array containing Customer records.
    let customers = new Array();
    customers.push(["Customer Id", "Name", "Country","Abhinav"]);
   
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
  constructor() { }

  ngOnInit() {
    this.GenerateTablelist();
  }

}

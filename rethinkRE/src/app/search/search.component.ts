import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  constructor() { }

  ngOnInit(): void {

  }

  // fs:require('fs');
  // parse = require('csv-parse');
  // parser = this.parse({columns: true}, function (err: any, records: any) {
	// console.log(records);
  // });

  //fs.createReadStream("rethinkRE/src/assets/Metro_invt_fs_uc_sfrcondo_sm_month.csv").pipe(this.parser); //.createReadStream(__dirname+'/chart-of-accounts.csv').pipe(parser);

}

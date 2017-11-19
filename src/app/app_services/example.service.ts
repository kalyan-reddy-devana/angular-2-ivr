import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()

export class exampleService{
	constructor(private http : Http ){}

	getSampleData(){
		alert();
		return this.http.get('mock_data/sample.get.json',{observe:'response'}).subscribe(res=>{console.log(res);})
	}
}
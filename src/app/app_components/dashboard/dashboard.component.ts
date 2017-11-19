import { Component } from '@angular/core';
import { exampleService } from 'app/app_services/example.service';

@Component({
	selector : 'dashboard',
	templateUrl : './dashboard.component.html',
	styles : ['./dashboard.component.css']
})

export class DashboardComponent{
	title = 'dashboard';

	constructor( private exSer : exampleService){
		console.log(exSer.getSampleData());
	}
}
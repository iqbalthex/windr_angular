import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
		'./app.component.css',
		'../../../../../bs/css/bootstrap.min.css'
	]
})

export class AppComponent {
  title = 'windrose';

	currYear: number = 2022;
	currMonth: string = "Mei";
	years: number[] = [2015,2016,2017,2018,2019,2020,2021,2022];
	months: string[] = ['Januari','Februari','Maret','April','Mei','Juni',
		'Juli','Agustus','September','Oktober','November','Desember'];
	daysOfMonth: {[key: string]: any} = { "Januari": 31, "Maret": 31,
		"April": 30, "Mei": 31, "Juni": 30, "Juli": 31, "Agustus": 31,
		"September": 30, "Oktober": 31, "November": 30, "Desember": 31,
		"Februari": (year: number = this.currYear) => year % 4 == 0 ? 29 : 28
	};
	setDay = (month: string,arr: boolean = true): number[] => {
		let tgl: number[] = [];
		let days: number;
		days = month == "Februari" ? this.daysOfMonth[month]() : this.daysOfMonth[month];
		for (let i=0;i<days;i++){
			tgl.push(arr ? i+1 : 0);
		}
		return tgl;
	}

	setCurrYear = (year: number): void => {
		this.currYear = year;
		this.tgl = this.setDay(this.currMonth);
	}

	setCurrMonth = (month: string): void => {
		this.currMonth = month;
		this.tgl = this.setDay(this.currMonth);
	}

	tgl: number[] = this.setDay(this.currMonth);

	velData: {[key:string]: number[]} = {};
	tblLoad = () => {
		for (let i=0;i<this.years.length;i++){
			for (let j=0;j<this.months.length;j++){
				this.velData[this.years[i]+'-'+this.months[j]] = [1,2,3];
			}			
		}
	}

}

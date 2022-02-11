import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Employee } from 'src/app/classes/employee';
import { Globalconstants } from 'src/app/common/global/globalconstants';
import { SharedComponent } from 'src/app/common/global/shared/shared.component';
import { EmployeeService } from 'src/app/services/employee.service';
@Component({
	selector: 'app-users',
	templateUrl: './users.component.html',
	styleUrls: ['./users.component.css'],

})
export class UsersComponent implements OnInit {
	//  @ViewChild('input_ime') input_ime!:string;
	@ViewChild('input_ime') inputIme!: ElementRef;
	@ViewChild('input_priimek') inputPriimek!: ElementRef;
	@ViewChild('input_email') inputEmail!: ElementRef;
	@ViewChild('input_maticna') inputMaticna!: ElementRef;
	dataAdapter: any;
	columns: any;
	sourceuser: any;

	onInputImeChanged() {
		if (!(typeof this.inputIme.nativeElement.value === 'undefined' ||
			typeof this.inputPriimek.nativeElement.value === 'undefined' ||
			typeof this.inputEmail.nativeElement.value === 'undefined' ||
			typeof this.inputMaticna.nativeElement.value === 'undefined')) {
			let result =
				this.inputIme.nativeElement.value +
				this.inputPriimek.nativeElement.value +
				this.inputEmail.nativeElement.value +
				this.inputMaticna.nativeElement.value;
			console.log(result);
		};
	}

	onAddNewEmployee() {
		//this.onAddEmployee();
		if (!(typeof this.inputIme.nativeElement.value === 'undefined' ||
			typeof this.inputPriimek.nativeElement.value === 'undefined' ||
			typeof this.inputEmail.nativeElement.value === 'undefined' ||
			typeof this.inputMaticna.nativeElement.value === 'undefined')) {

			let _ime = this.inputIme.nativeElement.value;
			let _priimek = this.inputPriimek.nativeElement.value;
			let _email = this.inputEmail.nativeElement.value;
			let _maticna = this.inputMaticna.nativeElement.value;
			this.onAddEmployee(_ime, _priimek, _email, _maticna);
		};
	}

	constructor(private sc: SharedComponent, private employeeService: EmployeeService) 
	{ 
		this.dataAdapter = sc.dataAdapterPresence;
		this.columns = sc.columnsPresence;
		this.sourceuser = sc.sourceuser;
	}

	ngOnInit(): void {
		//this.onGetSession();
		this.onGetEmployee();
		//console.log(t);
		//this.testLocalStorage();
		//this.ReLogin();
		// Globalconstants.ReLogin(() => this.onGetSession());
		//this.source.localdata = this.onGetEmployee();
		//this.dataAdapter = new jqx.dataAdapter(this.source);
	}

	onGetSession() {
		//console.log("onGetSession(): void");
		this.employeeService.requestSessionToken().subscribe(
			{
				next: (response) => {
					let jsonData = JSON.stringify(response.Token).slice(1, -1);
					localStorage.setItem('SpicaApi_Session_Token', jsonData);
					localStorage.setItem('SpicaApi_Session_Timestamp', new Date().toString());
				},
				error: (e) => console.error('e'),
				complete: () => console.info('complete'),
			}
		);
	}

	onGetEmployee(): Employee[] {
		Globalconstants.ReLogin(() => this.onGetSession());
		let result: Employee[] = [];
		this.employeeService.getEmployees().subscribe(
			{
				next: (employeeList) => {
					result = employeeList;
					this.sourceuser.localdata = employeeList.map(employee => [employee.Id, employee.FirstName, employee.LastName, employee.Email, employee.AdditionalField1, employee.Active]);
					this.dataAdapter = new jqx.dataAdapter(this.sourceuser);
				},
				error: (e) => console.error('e'),
				complete: () => console.info('complete'),
			}
		)
		return result;
	}

	onAddEmployee(ime: string, priimek: string, email: string, maticna: string): Employee {
		Globalconstants.ReLogin(() => this.onGetSession());
		let result: Employee = new Employee();
		this.employeeService.addEmployee(ime, priimek, email, maticna).subscribe(
			{
				next: (employee) => {
					employee = result;
					this.onGetEmployee();
				},
				error: (e) => console.error('e'),
				complete: () => console.info('complete'),
			}
		)
		return result;
	}
}
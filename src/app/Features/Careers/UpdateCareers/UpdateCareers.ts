import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Career } from '../Careers';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-career-update',
	templateUrl: './UpdateCareers.html',
	standalone: true,
	imports: [CommonModule, FormsModule]
})
export class CareerUpdateComponent implements OnInit {
	careers: Career[] = [];

	constructor(private http: HttpClient) { }

	ngOnInit(): void {
		this.loadCareers();
	}

	loadCareers(): void {
		this.http.get<Career[]>('assets/Career/Career.json').subscribe(data => {
			this.careers = data.map(career => ({ ...career, editing: false }));
		});
	}

	toggleEdit(career: Career): void {
		career.editing = !career.editing;
	}

	submitChanges(): void {
		// Update JSON file
		this.http.post('update/career', this.careers).subscribe(() => {
			console.log('Changes submitted successfully.');
		});
	}
}

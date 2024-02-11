import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
	standalone: true,
	templateUrl: './About.html',
	styleUrls: ['About.scss'],
	imports: [FormsModule, CommonModule]
})
export class AboutComponent implements OnInit {
	constructor(
		private router: Router,
		private route: ActivatedRoute,
	) { }

	ngOnInit() { }
}

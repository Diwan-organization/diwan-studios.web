import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

export class Career {
	id!: number;
	career!: string;
	description!: string;
	editing: boolean = false;
}

@Component({
	standalone: true,
	templateUrl: './Careers.html',
	styleUrls: ['Careers.scss'],
	imports: [FormsModule, CommonModule]
})
export class CareersComponent implements OnInit {
	careers!: Career[];

	constructor(private http: HttpClient) { }

	ngOnInit(): void {
		this.http.get<Career[]>('assets/Career/Career.json').subscribe((data) => {
			this.careers = data;
		});
	}

	ngAfterViewInit() {
		this.Animation.Landing();
	}

	Animation = {
		Landing: () => {
			const landingImage = document.querySelector('.landing .image')!;
			landingImage.classList.remove('landing-img-transition');
			const landingImageObserver = new IntersectionObserver(entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						landingImage.classList.add('landing-img-transition');
						return;
					}

					landingImage.classList.remove('landing-img-transition');
				});
			});
			landingImageObserver.observe(landingImage);


			const landingTextDiv = document.querySelector('.landing .content')!;
			landingTextDiv.classList.remove('landing-text-transition');
			const landingTextObserver = new IntersectionObserver(entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						landingTextDiv.classList.add('landing-text-transition');
						return;
					}

					landingTextDiv.classList.remove('landing-text-transition');
				});
			});
			landingTextObserver.observe(landingTextDiv);
		},
	}
}

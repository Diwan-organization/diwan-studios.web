import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

class ValueItem {
	Title!: string;
}

@Component({
	standalone: true,
	templateUrl: './About.html',
	styleUrls: ['About.scss'],
	imports: [FormsModule, CommonModule]
})
export class AboutComponent implements OnInit {
	Values: ValueItem[] = [
		{
			Title: 'Quality <br> Integrity',
		},
		// {
		// 	Title: 'Integrity',
		// },
		{
			Title: 'Team work <br> Innovation',
		},
		// {
		// 	Title: 'Innovation',
		// },
		{
			Title: 'Creativity <br> Consistency',
		},
		// {
		// 	Title: 'Consistency',
		// }

	]

	constructor(
		private router: Router,
		private route: ActivatedRoute,
	) { }

	ngOnInit() { }

	ngAfterViewInit() {
		this.Animation.Landing();
		this.Animation.Story();
		this.Animation.Values();
		this.Animation.Provide();
		this.Animation.MissionVision();
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
			const landingText = document.querySelector('.landing .content h6')!;
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

		Story: () => {
			const story = document.querySelector('.our-story')!;
			const storyText = document.querySelector('.our-story .content')!;
			const storyObserver = new IntersectionObserver(entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						story.classList.add('story-transition');
						return;
					}

					story.classList.remove('story-transition');
				});
			});
			storyObserver.observe(story);
		},

		Values: () => {
			const values = document.querySelector('.our-values')!;
			values.classList.remove('values-transition');
			const valuesObserver = new IntersectionObserver(entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						values.classList.add('values-transition');
						return;
					}

					values.classList.remove('values-transition');
				});
			});
			valuesObserver.observe(values);
		},

		Provide: () => {
			const provide = document.querySelector('.provide')!;
			provide.classList.remove('provide-transition');
			const provideObserver = new IntersectionObserver(entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						provide.classList.add('provide-transition');
						return;
					}

					provide.classList.remove('provide-transition');
				});
			});
			provideObserver.observe(provide);
		},

		MissionVision: () => {
			const provide = document.querySelector('.mission-vision')!;
			provide.classList.remove('mission-vision-transition');
			const provideObserver = new IntersectionObserver(entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						provide.classList.add('mission-vision-transition');
						return;
					}

					provide.classList.remove('mission-vision-transition');
				});
			});
			provideObserver.observe(provide);
		}
	}
}

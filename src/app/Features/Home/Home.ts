import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { animate, stagger } from 'motion';
import { RoutePaths } from '@App/Common/Settings/RoutePaths';
import { Router, RouterModule } from '@angular/router';
import { CarouselComponent } from '@App/Common/Widgets/Carousel/Carousel';

class CategoryItem {
	ImgSrc!: string;
	ImgAlt!: string;
	Title!: string;
	Description!: string;
	OwnDescription!: string;
	Link!: string;
}

class NewsItem {
	ImgSrc!: string;
	ImgAlt!: string;
	Title!: string;
	Date!: Date;
	Description!: string;
	Link!: string;
}

class PartnerItem {
	ImgSrc!: string;
	ImgAlt!: string;
	Title!: string;
	Description!: string;
	Link!: string;
}

class StatsItem {
	ImgSrc!: string;
	ImgAlt!: string;
	Title!: string;
	Number!: string;
	Description!: string;
	Link!: string;
	TimeInterval!: number;
}

class ValueItem {
	Title!: string;
}


@Component({
	standalone: true,
	templateUrl: './Home.html',
	styleUrls: ['Home.scss'],
	imports: [FormsModule, CommonModule, RouterModule, CarouselComponent],
})
export class HomeComponent implements OnInit {

	RoutePaths = RoutePaths;
	observerOptions: {} = {
		root: null,
		rootMargin: '10px',
		threshold: 0.1, // Adjust this threshold based on your needs
	};

	Stats: StatsItem[] = [
		{
			ImgSrc: '',
			ImgAlt: '',
			Title: 'Years Of Experience',
			Number: '19+',
			Description: '',
			Link: '',
			TimeInterval: 100
		},
		{
			ImgSrc: '',
			ImgAlt: '',
			Title: 'Projects',
			Number: '500+',
			Description: '',
			Link: '',
			TimeInterval: 40
		},
		{
			ImgSrc: '',
			ImgAlt: '',
			Title: 'Countries',
			Number: '5+',
			Description: '',
			Link: '',
			TimeInterval: 300
		},
		{
			ImgSrc: '',
			ImgAlt: '',
			Title: 'Meters',
			Number: '6000+',
			Description: '',
			Link: '',
			TimeInterval: 25
		},
		{
			ImgSrc: '',
			ImgAlt: '',
			Title: 'Learn more',
			Number: '>',
			Description: '',
			Link: '/' + RoutePaths.About,
			TimeInterval: 0
		},
	]

	Categories: CategoryItem[] = [
		{
			ImgSrc: 'assets/Images/girl-wall.jpg',
			ImgAlt: '',
			Title: 'Entertainment',
			Description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat nemo, ullam quis corporis officia sint fugit, tempora quidem libero.',
			Link: 'fifa',
			OwnDescription: 'Entertainment Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt veritatis voluptates, saepe laudantium debitis illum voluptatibus assumenda, pariatur reprehenderit dolores facilis nam perferendis illo eum autem rerum ipsum quasi consectetur expedita. Mollitia, nesciunt! Eius ullam illo id quod repellat, ut error, laborum, maxime fuga sit eaque distinctio est? Aliquid, accusamus!'
		},
		{
			ImgSrc: 'assets/Images/girl-wall-3.jpg',
			ImgAlt: '',
			Title: 'Commercial',
			Description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat nemo, ullam quis corporis officia sint fugit, tempora quidem libero.',
			Link: 'hsbc',
			OwnDescription: 'Commercial Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt veritatis voluptates, saepe laudantium debitis illum voluptatibus assumenda, pariatur reprehenderit dolores facilis nam perferendis illo eum autem rerum ipsum quasi consectetur expedita. Mollitia, nesciunt! Eius ullam illo id quod repellat, ut error, laborum, maxime fuga sit eaque distinctio est? Aliquid, accusamus!'
		},
		{
			ImgSrc: 'assets/Images/girl-wall.jpg',
			ImgAlt: '',
			Title: 'Residential',
			Description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat nemo, ullam quis corporis officia sint fugit, tempora quidem libero.',
			Link: 'moussa',
			OwnDescription: 'Residential Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt veritatis voluptates, saepe laudantium debitis illum voluptatibus assumenda, pariatur reprehenderit dolores facilis nam perferendis illo eum autem rerum ipsum quasi consectetur expedita. Mollitia, nesciunt! Eius ullam illo id quod repellat, ut error, laborum, maxime fuga sit eaque distinctio est? Aliquid, accusamus!'
		},
		{
			ImgSrc: 'assets/Images/girl-wall-3.jpg',
			ImgAlt: '',
			Title: 'Corporate',
			Description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat nemo, ullam quis corporis officia sint fugit, tempora quidem libero.',
			Link: 'meryal',
			OwnDescription: 'Corporate Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt veritatis voluptates, saepe laudantium debitis illum voluptatibus assumenda, pariatur reprehenderit dolores facilis nam perferendis illo eum autem rerum ipsum quasi consectetur expedita. Mollitia, nesciunt! Eius ullam illo id quod repellat, ut error, laborum, maxime fuga sit eaque distinctio est? Aliquid, accusamus!'
		}

	];
	// CategoryOwnDescription: string= 'testtttttttttttttt';
	CurrentCategoryIndex: number = -1;

	Partners: PartnerItem[] = [
		{
			ImgSrc: 'assets/Logos/1.png ',
			ImgAlt: 'about the artist',
			Title: 'The Artist',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/2.png ',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/3.jpg ',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/4.jpg ',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/5.jpg',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/6.jpg',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/7.jpg',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/8.png',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/9.png ',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/10.png ',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/11.png',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		}
		,
		{
			ImgSrc: 'assets/Logos/12.png',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/13.png',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/14.jpeg',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/15.png',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/16.png',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/17.png',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/18.png',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/19.png',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/20.png',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/21.png',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/22.png',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/23.jpg',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/24.png',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/25.jpg',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		}
		,
		{
			ImgSrc: 'assets/Logos/26.png',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/27.png',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/28.jpg',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/29.png',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/30.png',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/31.png',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/32.png',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/33.png',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/34.png',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/35.png',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/36.jpg',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/37.jpg',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/38.png',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/39.png',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/40.jpg',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/41.png',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/42.png',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/43.png',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/44.png',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/45.png',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/46.png',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/47.png',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},

	]
	x = this.Partners.map(p => p.ImgSrc)

	Values: ValueItem[] = [
		{
			Title: 'Quality',
		},
		{
			Title: 'Integrity',

		},
		{
			Title: 'Team work',

		},
		{
			Title: 'Innovation',

		},
		{
			Title: 'Creativity',

		},
		{
			Title: 'Consistency',

		}

	]

	constructor(private Router: Router) { }

	ngOnInit(): void { }

	ngAfterViewInit() {
		this.Animation.LandingText();
		this.Animation.About();
		this.Animation.Stat();
		this.Animation.Categories();
		this.Animation.Values();
		this.Animation.Partners();
	}

	Animation = {
		LandingText: () => {
			const landingText = document.querySelector('.landing-text')!;
			landingText.classList.remove('landing-text-transition');
			const landingTextObserver = new IntersectionObserver(entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						landingText.classList.add('landing-text-transition');
						return;
					}

					landingText.classList.remove('landing-text-transition');
				});
			});
			landingTextObserver.observe(landingText);
		},

		About: () => {
			const about = document.querySelector('.about')!;
			about.classList.remove('about-transition');
			const aboutObserver = new IntersectionObserver(entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						about.classList.add('about-transition');
						return;
					}

					about.classList.remove('about-transition');
				});
			});
			aboutObserver.observe(about);
		},

		Stat: () => {
			const observer = new IntersectionObserver(entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						animateNumber(entry.target);
						// remove if you want it to repeat it on scroll again
						observer.unobserve(entry.target);
					}
				});
			});
			const stats = document.querySelectorAll('.stat');
			stats.forEach(stat => observer.observe(stat));

			function animateNumber(element: any) {
				return new Promise<void>(resolve => {
					const numberElement = element.querySelector('.number');
					const targetNumber = parseInt(numberElement.getAttribute('number'));
					const targetTimeInterval = parseInt(numberElement.getAttribute('timeinterval'));
					console.log(targetNumber);

					let currentNumber = 0;
					const interval = setInterval(() => {
						if (!targetNumber) {
							numberElement.innerText = numberElement.getAttribute('number');
							clearInterval(interval);
							resolve();
							return
						}
						if (numberElement.id == 3) {
							currentNumber = currentNumber + 100;
						} else if (numberElement.id == 1) {
							currentNumber = currentNumber + 10;
						} else {
							currentNumber++;
						}
						numberElement.innerText = currentNumber;
						if (currentNumber >= targetNumber) {
							if (numberElement.id != 4) {
								numberElement.innerText += '+'
							}
							clearInterval(interval);
							resolve();
						}
					}, targetTimeInterval);
				});
			}
		},


		Categories: () => {
			// categories list one by one
			const categories = document.querySelectorAll('.category')!;
			categories.forEach(category => {
				// console.log(category);
				category.classList.remove('category-transition');

				const observer = new IntersectionObserver(entries => {
					entries.forEach(entry => {
						if (entry.isIntersecting) {
							category.classList.add('category-transition');
							return;
						}
						category.classList.remove('category-transition');
					});
				});

				observer.observe(category);
			})

			// categories description in stationary section
			const categories1 = document.querySelectorAll('.category-description h1')!;
			const categoriesDesc = document.querySelectorAll('.own-description')!;

			categories1.forEach((category, i) => {
				const observer = new IntersectionObserver(entries => {
					entries.forEach(entry => {
						if (entry.isIntersecting) {
							// category.classList.add('category-transition');
							// console.log('index', i);

							// categoriesDesc.forEach(desc => desc.classList.remove('current'))
							// categoriesDesc[i].classList.add('current');
							this.CurrentCategoryIndex = i;
							return;
						}
						// categoriesDesc[i].classList.remove('current');
					});
				});
				observer.observe(category);
			})
		},

		Values: () => {
			const values = document.querySelector('.values')!;
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

		Partners: () => {
			const partners = document.querySelector('.partners')!;
			partners.classList.remove('partners-transition');
			const partnersObserver = new IntersectionObserver(entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						partners.classList.add('partners-transition');
						return;
					}

					partners.classList.remove('partners-transition');
				});
			});
			partnersObserver.observe(partners);
		}
	}

	GotoStat(link: string) {
		if (!link) return
		this.Router.navigateByUrl(link)
	}
}

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
	ImgSrc!: string;
	ImgAlt!: string;
	Title!: string;
	Description!: string;
	// Link!: string;
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
			Number: '15',
			Description: '',
			Link: '',
			TimeInterval: 100
		},
		{
			ImgSrc: '',
			ImgAlt: '',
			Title: 'Projects',
			Number: '25',
			Description: '',
			Link: '',
			TimeInterval: 70
		},
		{
			ImgSrc: '',
			ImgAlt: '',
			Title: 'Countries',
			Number: '4',
			Description: '',
			Link: '',
			TimeInterval: 200
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

	News: NewsItem[] = [
		{
			ImgSrc: 'https://nyc.carouselartgroup.com/wp-content/uploads/2022/11/CFA-Atlanta-Gallery-jpeg.webp',
			ImgAlt: 'news image 1',
			Title: 'News 1 title',
			Date: new Date('28/6/1996'),
			Description: 'Some representative placeholder content for the first slide.',
			Link: '',
		},
		{
			ImgSrc: 'https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/CHICAGO-GALLERY-jpg.webp',
			ImgAlt: 'news image 2',
			Title: 'News 2 title',
			Date: new Date('28/6/1996'),
			Description: 'Some representative placeholder content for the first slide.',
			Link: '',
		},
		{
			ImgSrc: 'https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/MIAMI-GALLERY-jpg.webp',
			ImgAlt: 'news image 3',
			Title: 'News 3 title',
			Date: new Date('28/6/1996'),
			Description: 'Some representative placeholder content for the first slide.',
			Link: '',
		}
	]

	Partners: PartnerItem[] = [
		{
			ImgSrc: 'assets/Logos/4seasons.png ',
			ImgAlt: 'about the artist',
			Title: 'The Artist',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/adidas.png ',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/amazon.png ',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/Careem2.png ',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/fifa.png ',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/hsbc.png ',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/moneyfellows.png ',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/opel.png ',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/oppo.png ',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/Orange.png ',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: 'assets/Logos/pubg.png',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: '',
			Link: '',
		}
	]
	x = this.Partners.map(p => p.ImgSrc)

	Values: ValueItem[] = [
		{
			ImgSrc: 'assets/Logos/4seasons.png ',
			ImgAlt: 'Quality',
			Title: 'Quality',
			Description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore explicabo quis consequuntur beatae quos obcaecati eius a accusamus maxime, totam ea? A animi voluptas sit libero fugiat, suscipit est sequi.',

		},
		{
			ImgSrc: 'assets/Logos/adidas.png ',
			ImgAlt: 'Integrity',
			Title: 'Integrity',
			Description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore explicabo quis consequuntur beatae quos obcaecati eius a accusamus maxime, totam ea? A animi voluptas sit libero fugiat.',

		},
		{
			ImgSrc: 'assets/Logos/amazon.png ',
			ImgAlt: 'Team work',
			Title: 'Team work',
			Description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore explicabo quis consequuntur beatae quos obcaecati eius a accusamus maxime, totam ea? A animi voluptas sit libero fugiat, suscipit est sequi.',

		},
		{
			ImgSrc: 'assets/Logos/Careem2.png ',
			ImgAlt: 'Innovation',
			Title: 'Innovation',
			Description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore explicabo quis consequuntur beatae quos obcaecati eius a accusamus maxime, totam ea?',

		},
		{
			ImgSrc: 'assets/Logos/Careem2.png ',
			ImgAlt: 'Creativity',
			Title: 'Creativity',
			Description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore explicabo quis consequuntur beatae quos obcaecati eius a accusamus maxime, totam ea?',

		},
		{
			ImgSrc: 'assets/Logos/Careem2.png ',
			ImgAlt: 'Consistency',
			Title: 'Consistency',
			Description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore explicabo quis consequuntur beatae quos obcaecati eius a accusamus maxime, totam ea?',

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
					// console.log(targetNumber);

					let currentNumber = 0;
					const interval = setInterval(() => {
						if (!targetNumber) {
							numberElement.innerText = numberElement.getAttribute('number');
							clearInterval(interval);
							resolve();
							return
						}
						currentNumber++;
						numberElement.innerText = currentNumber;
						if (currentNumber >= targetNumber) {
							if (numberElement.id == 0) {
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

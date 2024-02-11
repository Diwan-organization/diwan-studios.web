import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { animate, stagger } from 'motion';
import { RoutePaths } from '@App/Common/Settings/RoutePaths';
import { RouterModule } from '@angular/router';

class NewsItem {
	ImgSrc!: string;
	ImgAlt!: string;
	Title!: string;
	Date!: Date;
	Description!: string;
	Link!: string;
}


class AboutItem {
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
}


@Component({
	standalone: true,
	templateUrl: './Home.html',
	styleUrls: ['Home.scss'],
	imports: [FormsModule, CommonModule, RouterModule,],
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
		},
		{
			ImgSrc: '',
			ImgAlt: '',
			Title: 'Countries',
			Number: '4',
			Description: '',
			Link: '',
		},
		{
			ImgSrc: '',
			ImgAlt: '',
			Title: 'Projects',
			Number: '25',
			Description: '',
			Link: '',
		},
	]

	images: string[] = [
		'assets/Images/girl-wall.jpg',
		'assets/Images/dog-wall-2.jpg',
		// 'assets/Images/girl-wall-2.jpg',
		// 'assets/Images/girl-wall-3.jpg',
		// 'assets/Images/girl-wall-4.jpg',
		// 'assets/Images/girl-wall-5.jpg',

	]; // Add your image file names

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

	About: AboutItem[] = [
		{
			ImgSrc: 'https://nyc.carouselartgroup.com/wp-content/uploads/2022/11/CFA-Atlanta-Gallery-jpeg.webp',
			ImgAlt: 'about the artist',
			Title: 'The Artist',
			Description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
			Link: '',
		},
		{
			ImgSrc: 'https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/CHICAGO-GALLERY-jpg.webp',
			ImgAlt: 'about the company',
			Title: 'The Company',
			Description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
			Link: '',
		}
	]

	Partners: AboutItem[] = [
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


	ngAfterViewInit() {
		this.StatAnimation()
	}

	hoveredIndex: number | null = null;
	StatAnimation() {
		const number = document.querySelectorAll(".number");
		const title = document.querySelectorAll(".stat-title");
		const description = document.querySelectorAll(".description");

		const observerOptions = {
			root: null,
			rootMargin: '0px',
			threshold: 0.2
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					this.startAnimation(number, title, description);
					observer.disconnect();
				}
			});
		}, observerOptions);

		if (number && number[0]) {
			observer.observe(number[0]);
		}
	}

	startAnimation(number: any, title: any, description: any) {
		setTimeout(() => {
			number[0].setAttribute("style", "opacity:1");
			animate(
				(progress) => {
					number[0].innerHTML = (Math.round(progress * 15)).toString();

					if (progress === 1) {
						number[0].innerHTML += "+";
					}
				},
				{ duration: 0.5, easing: "ease-out" }
			);
			title[0].setAttribute("style", "opacity:1");
			description[0].setAttribute("style", "opacity:1");
			setTimeout(() => {
				number[1].setAttribute("style", "opacity:1");
				animate(
					(progress) => {
						number[1].innerHTML = (Math.round(progress * 4)).toString();
					},
					{ duration: 0.2, easing: "ease-out" }
				);
				title[1].setAttribute("style", "opacity:1");
				description[1].setAttribute("style", "opacity:1");

				setTimeout(() => {
					number[2].setAttribute("style", "opacity:1");
					animate(
						(progress) => {
							number[2].innerHTML = (Math.round(progress * 25)).toString();
						},
						{ duration: 0.5, easing: "ease-out" }
					);
					title[2].setAttribute("style", "opacity:1");
					description[2].setAttribute("style", "opacity:1");
				}, 500);
			}, 700);
		}, 700);
	}

	ngOnInit(): void {
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


		const projects = document.querySelectorAll('.project')!;
		projects.forEach(project => {
			console.log(project);

			project.classList.remove('project-transition');

			const observer = new IntersectionObserver(entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						project.classList.add('project-transition');
						return;
					}
					project.classList.remove('project-transition');
				});
			});

			observer.observe(project);
		})

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

		// ///3wza agrb a3ml 3l elemnt msh section
		// const sectionProjects: any = document.querySelector('.projects');
		// const observerprojects = new IntersectionObserver((entries) => {
		// 	entries.forEach((entry) => {
		// 		if (entry.isIntersecting) {
		// 			animate(
		// 				'.gallery-img',
		// 				{
		// 					opacity: [0, 1],
		// 					y: [-20, 0],

		// 				},
		// 				{
		// 					delay: stagger(0.2),
		// 					duration: 0.5,
		// 					easing: ['ease-in-out'],
		// 				}
		// 			);
		// 			animate(
		// 				'.browse-more',
		// 				{ opacity: [0, 1], y: [-40, 0] },
		// 				{
		// 					delay: stagger(0.6),
		// 					duration: 0.5,
		// 					easing: ['ease-in-out'],
		// 				}
		// 			);
		// 			observerprojects.disconnect();
		// 		}
		// 	});
		// }, this.observerOptions);
		// observerprojects.observe(sectionProjects);




		// // // Start observing the 'about' section
		// // const sectionAbout: any = document.querySelector('.about');
		// // const observerAbout = new IntersectionObserver((entries) => {
		// // 	entries.forEach((entry) => {
		// // 		if (entry.isIntersecting) {
		// // 			// The 'about' section is in view, trigger animations
		// // 			animate(
		// // 				'.browse-more',
		// // 				{ y: [-20, 0] },
		// // 				{ delay: stagger(0.1), duration: 0.2 }
		// // 			);
		// // 			animate(
		// // 				'.title',
		// // 				{ y: [-20, 0] },
		// // 				{ delay: stagger(0.1), duration: 0.2 }
		// // 			);
		// // 			animate(
		// // 				'.sub-title',
		// // 				{ y: [-20, 0] },
		// // 				{ delay: stagger(0.1), duration: 0.2 }
		// // 			);
		// // 			animate(
		// // 				'.tab-content',
		// // 				{ y: [-20, 0] },
		// // 				{ delay: stagger(0.1), duration: 0.9 }
		// // 			);

		// // 			// Disconnect the observer after triggering the animations once
		// // 			observerNews.disconnect();
		// // 		}
		// // 	});
		// // }, this.observerOptions);
		// // observerAbout.observe(sectionAbout);




		// // Start observing the 'latest-news' section
		// const sectionLatestNews: any = document.querySelector('.latest-news');
		// const observerNews = new IntersectionObserver((entries) => {
		// 	entries.forEach((entry) => {
		// 		if (entry.isIntersecting) {
		// 			// The 'about' section is in view, trigger animations
		// 			animate(
		// 				'.card',
		// 				{
		// 					opacity: [0, 1],
		// 					// x: [-20, 0],
		// 					rotateY: ['-90deg', '0deg']
		// 				},
		// 				{
		// 					delay: stagger(0.2),
		// 					duration: 0.5,
		// 					easing: ['ease-in-out'],
		// 				}
		// 			);
		// 			animate(
		// 				'.title',
		// 				{ y: [-20, 0] },
		// 			);
		// 			// Disconnect the observer after triggering the animations once
		// 			observerNews.disconnect();
		// 		}
		// 	});
		// }, this.observerOptions);
		// observerNews.observe(sectionLatestNews);
	}

	showVisibleDiv(index: number): void {
		this.hoveredIndex = index;
	}

	hideVisibleDiv(index: number): void {
		this.hoveredIndex = null;
	}

	BaseOpacity: number = 0.7;
	opacity: number = 0.7;
	@HostListener('window:scroll', ['$event'])
	onWindowScroll() {
		const scrollPosition: number = window.scrollY || document.documentElement.scrollTop;
		const viewportHeight: number = window.innerHeight;

		let ratio: number = scrollPosition / viewportHeight;
		this.opacity = Math.min(this.BaseOpacity + (ratio / 3), 1);
	}


	MinIndex = 8;
	loadMore() {
		this.MinIndex = Math.min(this.MinIndex + 5, this.Partners.length);
	}
}

import { SidebarAnimationService } from '@App/Common/Services/SidebarAnimation.Service';
import { RoutePaths } from '@App/Common/Settings/RoutePaths';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

export class Link {
	Title!: string;
	Link!: string;
}

export class ArtCategory {
	Title!: string;
	ImgSrc!: string;
	ImgAlt!: string;
	Links!: Link[];
}
@Component({
	selector: 'app-header',
	templateUrl: './Header.html',
	styleUrls: ['./Header.scss'],
})
export class HeaderComponent implements OnInit {
	@ViewChild('NavbarCollapse') NavbarCollapse!: ElementRef;
	RoutePaths = RoutePaths


	ArtCategories: ArtCategory[] = [
		{
			Title: 'KSA Projects',
			ImgAlt: '',
			ImgSrc: 'assets/Images/girl-wall.jpg',
			Links: [
				{
					Title: 'Project 1',
					Link: `${RoutePaths.ArtWorks}`
				},
				{
					Title: 'Project 2',
					Link: `${RoutePaths.ArtWorks}`
				},
				{
					Title: 'Project 3',
					Link: `${RoutePaths.ArtWorks}`
				}
			]
		}, {
			Title: 'Qatar Projects',
			ImgAlt: '',
			ImgSrc: 'assets/Images/girl-wall.jpg',
			Links: [
				{
					Title: 'Project 1',
					Link: `${RoutePaths.ArtWorks}`
				},
				{
					Title: 'Project 2',
					Link: `${RoutePaths.ArtWorks}`
				},
				{
					Title: 'Project 3',
					Link: `${RoutePaths.ArtWorks}`
				}
			]
		}, {
			Title: 'EGYPT Projects',
			ImgAlt: '',
			ImgSrc: 'assets/Images/girl-wall.jpg',
			Links: [
				{
					Title: 'Project 1',
					Link: `${RoutePaths.ArtWorks}`
				},
				{
					Title: 'Project 2',
					Link: `${RoutePaths.ArtWorks}`
				},
				{
					Title: 'Project 3',
					Link: `${RoutePaths.ArtWorks}`
				}, {
					Title: 'Project 4',
					Link: `${RoutePaths.ArtWorks}`
				},
				{
					Title: 'Project 5',
					Link: `${RoutePaths.ArtWorks}`
				},
				{
					Title: 'Project 6',
					Link: `${RoutePaths.ArtWorks}`
				}
			]
		}, {
			Title: 'France Projects',
			ImgAlt: '',
			ImgSrc: 'assets/Images/girl-wall.jpg',
			Links: [
				{
					Title: 'Project 1',
					Link: `${RoutePaths.ArtWorks}`
				},
				{
					Title: 'Project 2',
					Link: `${RoutePaths.ArtWorks}`
				},
				{
					Title: 'Project 3',
					Link: `${RoutePaths.ArtWorks}`
				}
			]
		}
	]

	constructor(private Router: Router, private Animation: SidebarAnimationService) { }

	ngOnInit(): void {
		this.ScrollChanges()
	}

	goToProfile() {
	}

	goToSettings() {
	}

	ScrollChanges() {
		const mainApp = document.querySelector('.main-app')!;

		mainApp.addEventListener('scroll', () => {
			this.toggleNavbarScrolled(false);
			this.toggleBackgroundScrolled();
		});
	}

	toggleNavbarScrolled(ishovered: boolean) {
		const navbar = document.querySelector('.navbar');
		const mainApp = document.querySelector('.main-app')!;
		if (mainApp.scrollTop > 1) {
			navbar?.classList.add('navbar-scrolled');
		} else {
			if (ishovered) {
				navbar?.classList.add('navbar-scrolled');
			} else {
				navbar?.classList.remove('navbar-scrolled');
			}
		}
	}

	toggleBackgroundScrolled() {
		const body = document.querySelector('body');
		if (window.scrollY > 1) {
			body!.style.backgroundColor = 'var(--primary-color1)';
		} else {
			body!.style.backgroundColor = '';
		}
	}



	OpenMenu() {

		this.Animation.animationflag = true;
		this.Animation.transform();


	}
	ScrollUp() {
		const mainApp = document.querySelector('.main-app');
		if (mainApp != null) {
			mainApp.scrollTop = 0;
		}
		this.Animation.animationflag = false;
		this.Animation.transform();
	}
}

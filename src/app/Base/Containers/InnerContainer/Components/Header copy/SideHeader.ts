import { SidebarAnimationService } from '@App/Common/Services/SidebarAnimation.Service';
import { RoutePaths } from '@App/Common/Settings/RoutePaths';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

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
	selector: 'app-side-header',
	templateUrl: './SideHeader.html',
	styleUrls: ['./SideHeader.scss'],
})
export class SideHeaderComponent implements OnInit {
	RoutePaths = RoutePaths
	@ViewChild('dropdownMenu') dropdownMenu!: ElementRef;
	@ViewChild('dropdownMenuDeft') dropdownMenuDeft!: ElementRef;

	constructor(private Animation: SidebarAnimationService) { }
	ngOnInit(): void {

	}

	ArtCategories: ArtCategory[] = [
		{
			Title: 'Painting',
			ImgAlt: '',
			ImgSrc: 'assets/Images/girl-wall.jpg',
			Links: [
				{
					Title: 'fifa',
					Link: `${RoutePaths.Deft}/Painting/fifa`
				},
				{
					Title: 'Project 2',
					Link: `${RoutePaths.Deft}/Painting/project2`
				},
				{
					Title: 'Project 3',
					Link: `${RoutePaths.Deft}/Painting/project3`
				}
			]
		}, {
			Title: 'Sculptures',
			ImgAlt: '',
			ImgSrc: 'assets/Images/girl-wall.jpg',
			Links: [
				{
					Title: 'FIFA',
					Link: `${RoutePaths.Deft}/Sculptures/fifa`
				},
				{
					Title: 'HSBC',
					Link: `${RoutePaths.Deft}/Sculptures/hsbc`
				},
				{
					Title: 'Project 3',
					Link: `${RoutePaths.Deft}/Sculptures/project3`
				}
			]
		}



	]

	toggleDropdown(event: MouseEvent, dropdown: string) {
		if (dropdown == 'dropdownMenu') {
			const dropdownMenuElement = this.dropdownMenu.nativeElement as HTMLElement;
			const secdropdownMenuElement = this.dropdownMenuDeft.nativeElement as HTMLElement;
			if (dropdownMenuElement.style.display === 'block') {
				dropdownMenuElement.style.display = 'none';
				document.getElementById('dropdownMenuLink')?.classList.remove('show');

			} else {
				dropdownMenuElement.style.display = 'block';
				secdropdownMenuElement.style.display = 'none';
				document.getElementById('dropdownMenuLinkDeft')?.classList.remove('show');
				document.getElementById('dropdownMenuLink')?.classList.add('show');



			}
		} else {
			const dropdownMenuElement = this.dropdownMenuDeft.nativeElement as HTMLElement;
			const secdropdownMenuElement = this.dropdownMenu.nativeElement as HTMLElement;

			if (dropdownMenuElement.style.display === 'block') {
				dropdownMenuElement.style.display = 'none';
				document.getElementById('dropdownMenuLinkDeft')?.classList.remove('show');

			} else {
				dropdownMenuElement.style.display = 'block';
				secdropdownMenuElement.style.display = 'none';
				document.getElementById('dropdownMenuLink')?.classList.remove('show');
				document.getElementById('dropdownMenuLinkDeft')?.classList.add('show');

			}
		}

		event.stopPropagation(); // Prevent event bubbling to parent elements
	}
	closemenu() {
		const mainApp = document.querySelector('.main-app');
		if (mainApp != null) {
			mainApp.scrollTop = 0;
		}
		this.Animation.animationflag = false;
		this.Animation.transform();
	}
	back() {
		this.Animation.animationflag = false;
		this.Animation.transform();

	}
}

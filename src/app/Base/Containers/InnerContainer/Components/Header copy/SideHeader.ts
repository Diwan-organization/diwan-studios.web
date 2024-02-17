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

	constructor() { }
	ngOnInit(): void {

	}
	ArtCategories: ArtCategory[] = [
		{
			Title: 'KSA Projects',
			ImgAlt: '',
			ImgSrc: 'assets/Images/kansas-wall-2.jpg',
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
			ImgSrc: 'assets/Images/kansas-wall-2.jpg',
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
			ImgSrc: 'assets/Images/kansas-wall-2.jpg',
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
			ImgSrc: 'assets/Images/kansas-wall-2.jpg',
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

	toggleDropdown(event: MouseEvent) {
		const dropdownMenuElement = this.dropdownMenu.nativeElement as HTMLElement;
		if (dropdownMenuElement.style.display === 'block') {
			dropdownMenuElement.style.display = 'none';
			document.getElementById('dropdownMenuLink')?.classList.remove('show');

		} else {
			dropdownMenuElement.style.display = 'block';
			document.getElementById('dropdownMenuLink')?.classList.add('show');

		}
		event.stopPropagation(); // Prevent event bubbling to parent elements
	}

}

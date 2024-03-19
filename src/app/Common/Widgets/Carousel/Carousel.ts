import { CommonModule } from '@angular/common';
import { Component, HostListener, Input, OnInit } from '@angular/core';


@Component({
    selector: 'app-Carousel',
    standalone: true,
    templateUrl: './Carousel.html',
    styleUrls: ['Carousel.scss'],
    imports: [CommonModule]
})
export class CarouselComponent implements OnInit {
    @Input('Images') Images!: string[];
    visibleImages: string[] = [];
    ImagesPerPage: number = 5;
    currentPage: number = 0;
    Pages: number = 0;

    ngOnInit(): void {
        this.updateVisibleImages();
    }

    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
        this.updateVisibleImages();
    }

    updateVisibleImages() {
        const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        const logoWidth = vw > 576 ? 150 : 75;
        this.ImagesPerPage = Math.floor((vw - 100) / logoWidth)
        this.currentPage = 0;
        this.Pages = Math.ceil(this.Images.length / this.ImagesPerPage);
        this.updateImagesToShow();
    }

    updateImagesToShow() {
        const startIndex = (this.currentPage) * this.ImagesPerPage;
        const endIndex = startIndex + this.ImagesPerPage;
        this.visibleImages = this.Images.slice(startIndex, endIndex);
    }

    prevPage() {
        if (this.currentPage > 0) {
            this.currentPage--;
            this.updateImagesToShow();
        }
    }

    nextPage() {
        const totalPages = Math.ceil(this.Images.length / this.ImagesPerPage);
        if (this.currentPage < totalPages) {
            this.currentPage++;
            this.updateImagesToShow();
        }
    }
}
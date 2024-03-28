import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-LandingCarousel',
    standalone: true,
    templateUrl: './LandingCarousel.html',
    styleUrls: ['LandingCarousel.scss'],
    imports: [CommonModule]
})

export class LandingCarouselComponent {
    @Input() slides: { image: string; title: string; description: string }[] = [
        { image: 'assets/Images/landing/7.webp', title: 'Tio Complex', description: 'Lorem ipsum dolor sit amet consectetur.' },
        { image: 'assets/Images/landing/2.webp', title: 'Title 2', description: 'description kjdc jkc jkdn 2' },
        { image: 'assets/Images/landing/3.webp', title: 'Title 3', description: 'description kjdc jkc jkdn 3' },
        { image: 'assets/Images/landing/4.webp', title: 'Title 4', description: 'description kjdc jkc jkdn 4' },
        { image: 'assets/Images/landing/5.webp', title: 'Title 5', description: 'description kjdc jkc jkdn 5' },
        { image: 'assets/Images/landing/6.webp', title: 'Title 6', description: 'description kjdc jkc jkdn 6' },
        { image: 'assets/Images/landing/1.webp', title: 'Title 7', description: 'description kjdc jkc jkdn 7' },
    ];
    currentIndex = 0;
    Caption = '';
    Intevral!: any;

    constructor() { }

    ngOnInit(): void {
        this.StartInterval();
    }

    onPrevSlide() {
        this.ClearInterval();
        this.prevSlide();
        this.StartInterval();
    }

    onNextSlide() {
        this.ClearInterval();
        this.nextSlide();
        this.StartInterval();
    }

    onGoToSlide(index: number) {
        this.ClearInterval();
        this.goToSlide(index);
        this.StartInterval();
    }

    StartInterval() {
        this.Intevral = setInterval(() => { this.nextSlide() }, 5000);
    }

    ClearInterval() {
        clearInterval(this.Intevral);
    }


    private prevSlide() {
        this.currentIndex = (this.currentIndex === 0) ? (this.slides.length - 1) : (this.currentIndex - 1);
        this.Caption = this.slides[this.currentIndex].title;
    }

    private nextSlide() {
        this.currentIndex = (this.currentIndex === this.slides.length - 1) ? 0 : (this.currentIndex + 1);
        this.Caption = this.slides[this.currentIndex].title;
    }

    private goToSlide(index: number) {
        this.currentIndex = index;
        this.Caption = this.slides[this.currentIndex].title;
    }
}

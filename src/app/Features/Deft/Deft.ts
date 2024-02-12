import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { animate, stagger } from 'motion';


class ProjectItem {
    Name!: string;
    Description!: string;
    Images!: string[];
    Location!: string;
}


@Component({
    standalone: true,
    templateUrl: './Deft.html',
    styleUrls: ['Deft.scss'],
    imports: [CommonModule, FormsModule],

})
export class DeftComponent {
    private animatedSections: Set<string> = new Set();
    SearchText: string = '';
    Projects: ProjectItem[] = [
        {
            Name: 'FIFA',
            Description: 'kmldsvfnkjclsmn jckc danlkx dsjkndwk scd',
            Location: 'Qatar',
            Images: [
                'https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/MIAMI-GALLERY-jpg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2022/11/CFA-Atlanta-Gallery-jpeg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2022/11/CFA-Atlanta-Gallery-jpeg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/CHICAGO-GALLERY-jpg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2022/11/CFA-Atlanta-Gallery-jpeg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/CHICAGO-GALLERY-jpg.webp'
            ]

        },
        {
            Name: 'HSBC',
            Description: 'description 1',
            Location: 'Egypt',
            Images: [
                'https://nyc.carouselartgroup.com/wp-content/uploads/2022/11/CFA-Atlanta-Gallery-jpeg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/CHICAGO-GALLERY-jpg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2022/11/CFA-Atlanta-Gallery-jpeg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/CHICAGO-GALLERY-jpg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2022/11/CFA-Atlanta-Gallery-jpeg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/CHICAGO-GALLERY-jpg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2022/11/CFA-Atlanta-Gallery-jpeg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/CHICAGO-GALLERY-jpg.webp'
            ]
        },
        {
            Name: 'Moussa',
            Description: 'description 3',
            Location: 'KSA',
            Images: ['https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/CHICAGO-GALLERY-jpg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/MIAMI-GALLERY-jpg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2022/11/CFA-Atlanta-Gallery-jpeg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/CHICAGO-GALLERY-jpg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2022/11/CFA-Atlanta-Gallery-jpeg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/CHICAGO-GALLERY-jpg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2022/11/CFA-Atlanta-Gallery-jpeg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/CHICAGO-GALLERY-jpg.webp']
        },
        {
            Name: 'Meryal',
            Description: 'description 3',
            Location: 'KSA',
            Images: ['https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/CHICAGO-GALLERY-jpg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/MIAMI-GALLERY-jpg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2022/11/CFA-Atlanta-Gallery-jpeg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/CHICAGO-GALLERY-jpg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2022/11/CFA-Atlanta-Gallery-jpeg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/CHICAGO-GALLERY-jpg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2022/11/CFA-Atlanta-Gallery-jpeg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/CHICAGO-GALLERY-jpg.webp']
        },
        {
            Name: 'Adidas',
            Description: 'description 3',
            Location: 'KSA',
            Images: ['https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/CHICAGO-GALLERY-jpg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/MIAMI-GALLERY-jpg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2022/11/CFA-Atlanta-Gallery-jpeg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/CHICAGO-GALLERY-jpg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2022/11/CFA-Atlanta-Gallery-jpeg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/CHICAGO-GALLERY-jpg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2022/11/CFA-Atlanta-Gallery-jpeg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/CHICAGO-GALLERY-jpg.webp']
        }

    ];

    MoreProjects: ProjectItem[] = [
        {
            Name: 'Project 1',
            Description: 'description 1',
            Location: 'KSA',
            Images: [
                'https://nyc.carouselartgroup.com/wp-content/uploads/2022/11/CFA-Atlanta-Gallery-jpeg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/CHICAGO-GALLERY-jpg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2022/11/CFA-Atlanta-Gallery-jpeg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/CHICAGO-GALLERY-jpg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2022/11/CFA-Atlanta-Gallery-jpeg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/CHICAGO-GALLERY-jpg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2022/11/CFA-Atlanta-Gallery-jpeg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/CHICAGO-GALLERY-jpg.webp'
            ]
        },

        {
            Name: 'Project 2',
            Description: 'description 2',
            Location: 'Qatar',
            Images: ['https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/MIAMI-GALLERY-jpg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2022/11/CFA-Atlanta-Gallery-jpeg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2022/11/CFA-Atlanta-Gallery-jpeg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/CHICAGO-GALLERY-jpg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2022/11/CFA-Atlanta-Gallery-jpeg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/CHICAGO-GALLERY-jpg.webp']

        },

        {
            Name: 'Project 3',
            Description: 'description 3',
            Location: 'Egypt',
            Images: ['https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/CHICAGO-GALLERY-jpg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/MIAMI-GALLERY-jpg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2022/11/CFA-Atlanta-Gallery-jpeg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/CHICAGO-GALLERY-jpg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2022/11/CFA-Atlanta-Gallery-jpeg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/CHICAGO-GALLERY-jpg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2022/11/CFA-Atlanta-Gallery-jpeg.webp',
                'https://nyc.carouselartgroup.com/wp-content/uploads/2023/10/CHICAGO-GALLERY-jpg.webp']
        }

    ];
    filteredProjects: ProjectItem[];


    constructor(private renderer: Renderer2, private el: ElementRef) {
        this.filteredProjects = this.Projects
    }

    private scrollTo(element: HTMLElement) {
        const offset = 50;
        const position = element.offsetTop - offset;

        window.scrollTo({
            top: position,
            behavior: 'smooth'
        });
    }


    @HostListener('window:scroll', [])
    onWindowScroll() {
        this.checkElementsVisibility();
    }

    ngAfterViewInit() {
        this.attachClickEventListeners();
        this.checkElementsVisibility();
    }

    observerOptions: {} = {
        root: null,
        rootMargin: '10px',
        threshold: 0.1,
    };
    private checkElementsVisibility() {
        const elements = this.el.nativeElement.querySelectorAll('.category');
        elements.forEach((element: HTMLElement) => {
            const category = element.getAttribute('id');
            const categoryAnchor = this.el.nativeElement.querySelector(`a[data-category="${category}"]`);
            const rect = element.getBoundingClientRect();
            if (rect.top <= 400 && rect.bottom > 400) {
                this.renderer.addClass(categoryAnchor, 'active');
                if (category != null && !this.animatedSections.has(category)) {
                    const observerprojects = new IntersectionObserver((entries) => {
                        entries.forEach((entry) => {
                            if (entry.isIntersecting) {
                                const imgFluidElements = element.querySelectorAll('.img');
                                animate(
                                    imgFluidElements,
                                    {
                                        opacity: [0, 0.5, 1],
                                        y: [15, 0],
                                    },
                                    {
                                        delay: stagger(0.05),
                                        duration: 0.6,
                                        easing: ['ease-in-out'],
                                    }
                                );

                                observerprojects.disconnect();
                                this.animatedSections.add(category);
                            }
                        });
                    }, this.observerOptions);

                    observerprojects.observe(element);
                }
            } else {
                this.renderer.removeClass(categoryAnchor, 'active');
            }
        });
    }

    Search() {
        this.animatedSections.clear();
        if (this.SearchText.trim() === '') {
            this.filteredProjects = this.Projects;

        } else {
            this.filteredProjects = this.Projects.filter(category =>
                category.Name.toLowerCase().includes(this.SearchText.trim().toLowerCase()) ||
                category.Description.toLowerCase().includes(this.SearchText.trim().toLowerCase())
            );

        }
        setTimeout(() => {
            this.attachClickEventListeners();
            this.checkElementsVisibility();

        }, 0);
    }


    attachClickEventListeners() {
        const menuLinks = this.el.nativeElement.querySelectorAll('#categories');

        menuLinks.forEach((link: Element) => {
            link.addEventListener('click', (event: { preventDefault: () => void; }) => {
                event.preventDefault();
                const targetId = link.getAttribute('data-category');
                if (targetId) {
                    menuLinks.forEach((menuLink: { classList: { remove: (arg0: string) => void; }; }) => {
                        menuLink.classList.remove('active');
                    });
                    link.classList.add('active');
                    const targetElement = this.el.nativeElement.querySelector(`#${targetId}`);
                    if (targetElement) {
                        this.scrollTo(targetElement);
                    }
                }
            });
        });
    }
}

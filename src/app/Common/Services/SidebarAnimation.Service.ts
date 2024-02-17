import { ElementRef, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class SidebarAnimationService {
    animationflag: boolean = false;
    private isOpenSubject = new BehaviorSubject<boolean>(false);
    isOpen$ = this.isOpenSubject.asObservable();

    toggle() {
        this.isOpenSubject.next(!this.isOpenSubject.value);
    }

    constructor(

    ) { }
    transform(Element: ElementRef) {
        const icon = document.getElementById('menu-icon');
        const body = document.querySelector('body');

        if (this.animationflag == true) {
            Element.nativeElement.classList.remove('normal');
            Element.nativeElement.classList.add('move-animation');
            if (icon && icon.style) {
                icon.style.display = 'block';
            }
            if (body != null) {
                body.style.overflow = 'hidden';

            }
        }

        else {
            Element.nativeElement.classList.remove('move-animation');
            Element.nativeElement.classList.add('normal');
            if (icon && icon.style) {
                icon.style.display = 'none';
            }
            if (body != null) {
                body.style.overflow = 'auto';

            }
        }
    }

}

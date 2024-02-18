import { ElementRef, Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class SidebarAnimationService {
    animationflag: boolean = false;


    constructor(

    ) { }
    transform() {

        const icon = document.getElementById('menu-icon')!;
        const body = document.querySelector('body');
        const mainApp = document.querySelector('.main-app');
        const page = document.getElementById('page-inner') as HTMLElement;

        if (this.animationflag == true) {
            mainApp?.classList.remove('normal');
            mainApp?.classList.add('move-animation');
            if (body && icon) {
                // body.style.overflow = 'hidden';
                icon.style.display = 'block';
            }
            if (body != null) {
                body.style.overflow = 'hidden';
                icon.style.display = 'block';

            }
        }

        else {
            mainApp?.classList.remove('move-animation');
            mainApp?.classList.add('normal');
            if (body && icon) {
                // body.style.overflow = 'auto';
                icon.style.display = 'none';
            }
            if (body != null) {
                body.style.overflow = 'auto';
                icon.style.display = 'none';
            }
        }
    }

}

import { ElementRef, Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class SidebarAnimationService {
    animationflag: boolean = false;

    constructor() { }

    transform() {
        const icon = document.getElementById('menu-icon')!;
        const body = document.querySelector('body');
        const mainApp = document.querySelector('.main-app');
        const sidemenu = document.querySelector('.side-menu');
        const navbar = document.querySelector('.navbar')


        if (this.animationflag == true) {
            mainApp?.classList.remove('normal');
            mainApp?.classList.add('move-animation');
            sidemenu?.classList.remove('normal');
            sidemenu?.classList.add('move-animation');
            navbar?.classList.remove('nav-normal');
            navbar?.classList.add('nav-animation');

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
            sidemenu?.classList.remove('move-animation');
            sidemenu?.classList.add('normal');
            mainApp?.classList.remove('move-animation');
            mainApp?.classList.add('normal');
            navbar?.classList.remove('nav-animation');
            navbar?.classList.add('nav-normal');


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

    ScrollUp() {
        const mainApp = document.querySelector('.main-app');
        if (mainApp != null) {
            mainApp.scrollTop = 0;
        }
    }
}

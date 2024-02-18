import { ElementRef, Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class SidebarAnimationService {
    animationflag: boolean = false;


    constructor(

    ) { }
    transform() {

        const icon = document.getElementById('menu-icon');
        const body = document.querySelector('body');
        const page = document.getElementById('page-inner') as HTMLElement;

        if (this.animationflag == true) {
            body?.classList.remove('normal');
            body?.classList.add('move-animation');
            if (body && icon) {
                body.style.overflow = 'hidden';
                icon.style.display = 'block';

            }
        }

        else {
            body?.classList.remove('move-animation');
            body?.classList.add('normal');
            if (body && icon) {
                body.style.overflow = 'auto';
                icon.style.display = 'none';


            }
        }
    }

}

import { ApplicationRef, Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { PlatformLocation } from '@angular/common';
import { RoutePaths } from '../Common/Settings/RoutePaths';
import { HttpClient } from '@angular/common/http';
import { SidebarAnimationService } from '@App/Common/Services/SidebarAnimation.Service';

@Component({
  selector: 'app-root',
  templateUrl: './App.Component.html',
})
export class AppComponent {
  private readonly VAPID_PUBLIC_KEY: string =
    'BHECh-IJilGwLFwpKQhlsHvqT939nhAcVtU4DW63QimcoT0qsdk_po8_QYgrUjercp8hvwiZHSeTwtx-4HT3J2g';
  IsLoaded: boolean = false;
  NoLoader: boolean = false;
  ErrorToast!: number;

  constructor(
    private PlatformLocation: PlatformLocation,
    private Router: Router,
    private appRef: ApplicationRef,
    private http: HttpClient,
    private SidebarAnimationService: SidebarAnimationService
  ) { }

  ngOnInit() {
    this.PreLoaderListener();
    this.ScrollUpSub();
    this.CheckIOS();
    this.loadImages();
  }

  images: string[] = [
    'assets/Images/landing/1.webp',
    'assets/Images/landing/2.webp',
    'assets/Images/landing/3.webp',
    'assets/Images/landing/4.webp',
    'assets/Images/landing/5.webp',
    'assets/Images/landing/6.webp',
    'assets/Images/landing/7.webp'
  ];
  imagesLoaded: number = 0;
  totalImages: number = this.images.length;

  // landing carousel images
  loadImages() {
    this.images.forEach(url => {
      this.http.get(url, { responseType: 'blob' }).subscribe(() => {
        this.imagesLoaded++;
        // console.log('imagesLoaded', this.imagesLoaded);

        if (this.imagesLoaded === this.totalImages) {
          // All images are loaded, hide the preloader
          // this.IsLoaded = true;
        }
      });
    });
  }

  PreLoaderListener() {
    const startTime = new Date().getTime();
    // console.log('startTime: ', startTime);

    // for mobile and very slow connections
    setTimeout(() => {
      this.IsLoaded = true;
      setTimeout(() => {
        this.NoLoader = true;
      }, 1000);
    }, 5000);
    // Add an event listener to execute code when the window is loaded
    window.addEventListener('load', () => {
      const currentTime = new Date().getTime();
      const elapsedTime = currentTime - startTime;
      // console.log('elapsedTime: ', elapsedTime);

      const minLoadingTime = 1000;
      if (elapsedTime >= minLoadingTime) {
        // console.log('first');
        this.IsLoaded = true;
        setTimeout(() => {
          this.NoLoader = true;
        }, 1000);
      } else {
        setTimeout(() => {
          // console.log('scond');
          this.IsLoaded = true;
          setTimeout(() => {
            this.NoLoader = true;
          }, 1000);
        }, minLoadingTime - elapsedTime);
      }
    });
  }

  ScrollUpSub() {
    this.Router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Scroll to the top of the page when a new route is navigated
        // window.scrollTo(0, 0);
        this.SidebarAnimationService.ScrollUp();
      }
    });
  }

  CheckIOS() {
    // Check if the user is using an iOS device
    function isIOS() {
      return /iPad|iPhone|iPod/.test(navigator.userAgent);
    }

    // Add a class to the body if it's an iOS device
    if (isIOS()) {
      document.body.classList.add('ios-device');
    }
  }


}

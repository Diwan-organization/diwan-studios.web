import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SidebarAnimationService } from '@App/Common/Services/SidebarAnimation.Service';

@Component({
  selector: 'inner-container',
  templateUrl: './InnerContainer.html',
})
export class InnerContainer implements OnInit {
  @ViewChild('mainElement') mainElement!: ElementRef;
  icon = document.getElementById('icon');


  constructor(private Animation: SidebarAnimationService) { }

  ngOnInit(): void { }

  transform() {
    this.Animation.animationflag = true;
    document.getElementById('sidebar')?.classList.remove('d-none')
    document.getElementById('sidebar')?.classList.add('d-block')
    this.Animation.transform(this.mainElement);
  }
  back() {
    this.Animation.animationflag = false;
    document.getElementById('sidebar')?.classList.remove('d-block')
    document.getElementById('sidebar')?.classList.add('d-none')
    this.Animation.transform(this.mainElement);
  }
}
